import torch
import torch.nn as nn
import numpy as np
import pandas as pd
from sklearn.preprocessing import MinMaxScaler
from torch.utils.data import Dataset
from torch.utils.data import DataLoader
from matplotlib import pyplot as plt
from sklearn.metrics import mean_squared_error


device = 'cuda:0' if torch.cuda.is_available() else 'cpu'


class TimeSeriesDataset(Dataset):
    def __init__(self, X, y):
        self.X = X
        self.y = y

    def __len__(self):
        return len(self.X)

    def __getitem__(self, i):
        return self.X[i], self.y[i]


class LSTM(nn.Module):
    def __init__(self, input_size, hidden_size, num_stacked_layers):
        super().__init__()
        self.hidden_size = hidden_size
        self.num_stacked_layers = num_stacked_layers

        self.lstm = nn.LSTM(input_size, hidden_size, num_stacked_layers, 
                            batch_first=True)
        
        self.fc = nn.Linear(hidden_size, 1)
        self.dropout = nn.Dropout(0.4)

    def forward(self, x):
        batch_size = x.size(0)
        h0 = torch.zeros(self.num_stacked_layers, batch_size, self.hidden_size).to(device)
        c0 = torch.zeros(self.num_stacked_layers, batch_size, self.hidden_size).to(device)
        
        out, _ = self.lstm(x, (h0, c0))
        out = self.fc(out[:, -1, :])
        return out


def get_results(df):

    # Create lookback columns
    lookback = 15
    features = 12

    # List of columns to be added
    lookback_columns = []

    for period in range(1, lookback+1):
        lookback_columns.append(df['Close'].shift(periods=period))
        lookback_columns.append(df['Low'].shift(periods=period))
        lookback_columns.append(df['High'].shift(periods=period))
        lookback_columns.append(df['Volume'].shift(periods=period))
        lookback_columns.append(df['EMA_20'].shift(periods=period))
        lookback_columns.append(df['EMA_50'].shift(periods=period))
        lookback_columns.append(df['MACD'].shift(periods=period))
        lookback_columns.append(df['MACD_Signal'].shift(periods=period))
        lookback_columns.append(df['Stochastics_K'].shift(periods=period))
        lookback_columns.append(df['Stochastics_D'].shift(periods=period))
        lookback_columns.append(df['Force_Index'].shift(periods=period))
        lookback_columns.append(df['ATR'].shift(periods=period))


    # Concatenate all columns at once
    df_lookback = pd.concat(lookback_columns, axis=1)

    # Rename the columns with appropriate names
    column_names = [f'{col}_Lookback_{period}' for period in range(1, lookback+1) for col in df.columns[1:]]
    df_lookback.columns = column_names

    # Concatenate the original DataFrame with the new lookback DataFrame
    df = pd.concat([df, df_lookback], axis=1)

    columns_to_drop = ['Date', 'Low', 'High', 'Volume', 'EMA_20', 'EMA_50', 'MACD', 'MACD_Signal', 'Stochastics_K', 'Stochastics_D', 'Force_Index', 'ATR']
    df.drop(columns=columns_to_drop, inplace=True)


    df.dropna(inplace=True)

    # df.to_excel('test.xlsx', index=False) 


    df_as_np = df.to_numpy()

    scaler = MinMaxScaler(feature_range=(-1, 1))
    df_as_np = scaler.fit_transform(df_as_np)

    X = df_as_np[:, 1:]
    y = df_as_np[:, 0]

    X = np.flip(X, axis=1)

    split_index = int(len(X) * .95)

    X_train = X[:split_index]
    X_test = X[split_index:]

    y_train = y[:split_index]
    y_test = y[split_index:]


    X_train = X_train.reshape((-1, lookback, features))
    X_test = X_test.reshape((-1, lookback, features))

    y_train = y_train.reshape((-1, 1))
    y_test = y_test.reshape((-1, 1))

    X_train = torch.tensor(X_train.copy()).float()
    y_train = torch.tensor(y_train).float()
    X_test = torch.tensor(X_test.copy()).float()
    y_test = torch.tensor(y_test).float()

        
    train_dataset = TimeSeriesDataset(X_train, y_train)
    test_dataset = TimeSeriesDataset(X_test, y_test)


    batch_size = 64

    train_loader = DataLoader(train_dataset, batch_size=batch_size, shuffle=True)
    test_loader = DataLoader(test_dataset, batch_size=batch_size, shuffle=False)

    for _, batch in enumerate(train_loader):
        x_batch, y_batch = batch[0].to(device), batch[1].to(device)
        break


    model = LSTM(features, 4, 1)
    model.to(device)

    learning_rate = 0.01
    num_epochs = 30
    loss_function = nn.MSELoss()
    optimizer = torch.optim.Adam(model.parameters(), lr=learning_rate)

    def train_one_epoch():
        model.train(True)
        # print(f'Epoch: {epoch + 1}')
        running_loss = 0.0
        
        for batch_index, batch in enumerate(train_loader):
            x_batch, y_batch = batch[0].to(device), batch[1].to(device)
            
            output = model(x_batch)
            loss = loss_function(output, y_batch)
            running_loss += loss.item()
            
            optimizer.zero_grad()
            loss.backward()
            optimizer.step()

            #if batch_index % 100 == 99:  # print every 100 batches
                #avg_loss_across_batches = running_loss / 100
                #print('Batch {0}, Loss: {1:.3f}'.format(batch_index+1,
                #                                        avg_loss_across_batches))
                #running_loss = 0.0
        # print()

    def validate_one_epoch():
        model.train(False)
        running_loss = 0.0
        
        for batch_index, batch in enumerate(test_loader):
            x_batch, y_batch = batch[0].to(device), batch[1].to(device)
            
            with torch.no_grad():
                output = model(x_batch)
                loss = loss_function(output, y_batch)
                running_loss += loss.item()

        # avg_loss_across_batches = running_loss / len(test_loader)
        
        #print('Val Loss: {0:.3f}'.format(avg_loss_across_batches))
        #print('***************************************************')
        #print()

    for epoch in range(num_epochs):
        train_one_epoch()
        validate_one_epoch()

    with torch.no_grad():
        predicted = model(X_train.to(device)).to('cpu').numpy()

    """
    train_predictions = predicted.flatten()

    dummies = np.zeros((X_train.shape[0], lookback*features+1))
    dummies[:, 0] = train_predictions
    dummies = scaler.inverse_transform(dummies)

    train_predictions = dummies[:, 0]

    dummies = np.zeros((X_train.shape[0], lookback*features+1))
    dummies[:, 0] = y_train.flatten()
    dummies = scaler.inverse_transform(dummies)
    """

    test_predictions = model(X_test.to(device)).detach().cpu().numpy().flatten()

    dummies = np.zeros((X_test.shape[0], lookback*features+1))
    dummies[:, 0] = test_predictions
    dummies = scaler.inverse_transform(dummies)

    test_predictions = dummies[:-1, 0]
    predicted = dummies[-2:, 0]

    dummies = np.zeros((X_test.shape[0], lookback*features+1))
    dummies[:, 0] = y_test.flatten()
    dummies = scaler.inverse_transform(dummies)

    new_y_test = dummies[:-1, 0]

    mse = mean_squared_error(new_y_test, test_predictions)

    print('MSE between test_predictions and new_y_test:', mse)

    """
    plt.plot(new_y_test, label='Actual Close')
    plt.plot(test_predictions, label='Predicted Close')
    plt.xlabel('Day')
    plt.ylabel('Close')
    plt.legend()
    plt.show()
    """

    return predicted
