import torch
import torch.nn as nn
import numpy as np
import pandas as pd
from sklearn.preprocessing import MinMaxScaler
from sklearn.model_selection import train_test_split

# Assuming you have a pandas DataFrame with a 'Close' column representing stock prices
# Load your data here or replace it with your dataset
# For example:
# data = pd.read_csv('your_data.csv')
# prices = data['Close'].values.reshape(-1, 1)

# Generate sample data for demonstration
np.random.seed(42)
prices = np.random.rand(100, 1) * 10 + np.sin(np.linspace(0, 10, 100)) * 5

# Normalize the data
scaler = MinMaxScaler(feature_range=(-1, 1))
prices_normalized = scaler.fit_transform(prices)

# Convert data to PyTorch tensors
prices_normalized = torch.FloatTensor(prices_normalized).view(-1)

# Define a function to create input sequences and labels
def create_sequences(data, seq_length):
    sequences = []
    labels = []

    for i in range(len(data) - seq_length):
        seq = data[i:i+seq_length]
        label = data[i+seq_length:i+seq_length+1]
        sequences.append(seq)
        labels.append(label)

    return torch.stack(sequences), torch.stack(labels)

# Create sequences and labels
sequence_length = 10
sequences, labels = create_sequences(prices_normalized, sequence_length)

# Split the data into training and testing sets
train_size = int(len(sequences) * 0.8)
test_size = len(sequences) - train_size
train_sequences, test_sequences = sequences[:train_size], sequences[train_size:]
train_labels, test_labels = labels[:train_size], labels[train_size:]

# Define the LSTM model
class LSTMModel(nn.Module):
    def __init__(self, input_size=1, hidden_layer_size=100, output_size=1):
        super().__init__()
        self.hidden_layer_size = hidden_layer_size

        self.lstm = nn.LSTM(input_size, hidden_layer_size)

        self.linear = nn.Linear(hidden_layer_size, output_size)

        self.hidden_cell = (torch.zeros(1,1,self.hidden_layer_size),
                            torch.zeros(1,1,self.hidden_layer_size))

    def forward(self, input_seq):
        lstm_out, self.hidden_cell = self.lstm(input_seq.view(len(input_seq) ,1, -1), self.hidden_cell)
        predictions = self.linear(lstm_out.view(len(input_seq), -1))
        return predictions[-1]

# Instantiate the model
model = LSTMModel()

# Define loss function and optimizer
criterion = nn.MSELoss()
optimizer = torch.optim.Adam(model.parameters(), lr=0.001)

# Training the model
epochs = 10

for epoch in range(epochs):
    for seq, labels in zip(train_sequences, train_labels):
        optimizer.zero_grad()
        model.hidden_cell = (torch.zeros(1, 1, model.hidden_layer_size),
                        torch.zeros(1, 1, model.hidden_layer_size))

        y_pred = model(seq)

        single_loss = criterion(y_pred, labels)
        single_loss.backward()
        optimizer.step()

    if epoch % 10 == 0:
        print(f'Epoch {epoch} Loss: {single_loss.item()}')

# Testing the model
model.eval()
test_predictions = []

for seq in test_sequences:
    with torch.no_grad():
        model.hidden = (torch.zeros(1, 1, model.hidden_layer_size),
                        torch.zeros(1, 1, model.hidden_layer_size))
        test_predictions.append(model(seq).item())

# Convert predictions back to original scale
test_predictions = scaler.inverse_transform(np.array(test_predictions).reshape(-1, 1))

# You can now compare test_predictions with your actual test labels to evaluate the performance of the model.
