import torch
import torch.nn as nn
import numpy as np
import pandas as pd
from sklearn.preprocessing import MinMaxScaler
from yahoofinancials import YahooFinancials
from torch.utils.data import Dataset
from torch.utils.data import DataLoader
from matplotlib import pyplot as plt


device = 'cuda:0' if torch.cuda.is_available() else 'cpu'

start = "2020-01-01"
end = "2024-01-10"

test = YahooFinancials("SPY").get_historical_price_data(start, end, "daily")
market_data = test["SPY"]['prices']

dates = [days['formatted_date'] for days in market_data]
closes = [round(day['close'], 2) for day in market_data]
low = [round(day['low'], 2) for day in market_data]
high = [round(day['high'], 2) for day in market_data]
volume = [round(day['volume'], 2) for day in market_data]

# Creating a DataFrame
data = {'Date': dates, 'Close': closes, 'Low': low, 'High': high, 'Volume': volume}
df = pd.DataFrame(data)

# Optional: Convert 'Date' column to datetime type
df['Date'] = pd.to_datetime(df['Date'])

# Create lookback columns
lookback_periods = [1, 2, 3, 4, 5]

for period in lookback_periods:
    df[f'Close_Lookback_{period}'] = df['Close'].shift(periods=period)
    df[f'Low_Lookback_{period}'] = df['Low'].shift(periods=period)
    df[f'High_Lookback_{period}'] = df['High'].shift(periods=period)
    df[f'Volume_Lookback_{period}'] = df['Volume'].shift(periods=period)

df.drop(['Date'], axis=1, inplace=True)

df_as_np = df.to_numpy()

scaler = MinMaxScaler(feature_range=(-1, 1))
df_as_np = scaler.fit_transform(df_as_np)

X = df_as_np[:, 4:]
y = df_as_np[:, 0]

X = np.flip(X, axis=1)

split_index = int(len(X) * 0.95)

X_train = X[:split_index]
X_test = X[split_index:]

y_train = y[:split_index]
y_test = y[split_index:]

lookback = 20
X_train = X_train.reshape((-1, lookback, 1))
X_test = X_test.reshape((-1, lookback, 1))

y_train = y_train.reshape((-1, 1))
y_test = y_test.reshape((-1, 1))

X_train = torch.tensor(X_train.copy()).float()
y_train = torch.tensor(y_train).float()
X_test = torch.tensor(X_test.copy()).float()
y_test = torch.tensor(y_test).float()


class TimeSeriesDataset(Dataset):
    def __init__(self, X, y):
        self.X = X
        self.y = y

    def __len__(self):
        return len(self.X)

    def __getitem__(self, i):
        return self.X[i], self.y[i]
    
train_dataset = TimeSeriesDataset(X_train, y_train)
test_dataset = TimeSeriesDataset(X_test, y_test)


batch_size = 16

train_loader = DataLoader(train_dataset, batch_size=batch_size, shuffle=True)
test_loader = DataLoader(test_dataset, batch_size=batch_size, shuffle=False)

for _, batch in enumerate(train_loader):
    x_batch, y_batch = batch[0].to(device), batch[1].to(device)
    print(x_batch.shape, y_batch.shape)
    break

class LSTM(nn.Module):
    def __init__(self, input_size, hidden_size, num_stacked_layers):
        super().__init__()
        self.hidden_size = hidden_size
        self.num_stacked_layers = num_stacked_layers

        self.lstm = nn.LSTM(input_size, hidden_size, num_stacked_layers, 
                            batch_first=True)
        
        self.fc = nn.Linear(hidden_size, 1)

    def forward(self, x):
        batch_size = x.size(0)
        h0 = torch.zeros(self.num_stacked_layers, batch_size, self.hidden_size).to(device)
        c0 = torch.zeros(self.num_stacked_layers, batch_size, self.hidden_size).to(device)
        
        out, _ = self.lstm(x, (h0, c0))
        out = self.fc(out[:, -1, :])
        return out

model = LSTM(1, 4, 1)
model.to(device)
print(model)

learning_rate = 0.001
num_epochs = 10
loss_function = nn.MSELoss()
optimizer = torch.optim.Adam(model.parameters(), lr=learning_rate)

def train_one_epoch():
    model.train(True)
    print(f'Epoch: {epoch + 1}')
    running_loss = 0.0
    
    for batch_index, batch in enumerate(train_loader):
        x_batch, y_batch = batch[0].to(device), batch[1].to(device)
        
        output = model(x_batch)
        loss = loss_function(output, y_batch)
        running_loss += loss.item()
        
        optimizer.zero_grad()
        loss.backward()
        optimizer.step()

        if batch_index % 100 == 99:  # print every 100 batches
            avg_loss_across_batches = running_loss / 100
            print('Batch {0}, Loss: {1:.3f}'.format(batch_index+1,
                                                    avg_loss_across_batches))
            running_loss = 0.0
    print()

def validate_one_epoch():
    model.train(False)
    running_loss = 0.0
    
    for batch_index, batch in enumerate(test_loader):
        x_batch, y_batch = batch[0].to(device), batch[1].to(device)
        
        with torch.no_grad():
            output = model(x_batch)
            loss = loss_function(output, y_batch)
            running_loss += loss.item()

    avg_loss_across_batches = running_loss / len(test_loader)
    
    print('Val Loss: {0:.3f}'.format(avg_loss_across_batches))
    print('***************************************************')
    print()

for epoch in range(num_epochs):
    train_one_epoch()
    validate_one_epoch()

with torch.no_grad():
    predicted = model(X_train.to(device)).to('cpu').numpy()

plt.plot(y_train, label='Actual Close')
plt.plot(predicted, label='Predicted Close')
plt.xlabel('Day')
plt.ylabel('Close')
plt.legend()
plt.show()