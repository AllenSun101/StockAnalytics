import datetime

import pandas as pd
from yahoofinancials import YahooFinancials
import numpy as np

from sklearn.linear_model import LogisticRegression
from sklearn.model_selection import train_test_split

import tensorflow as tf


def get_data(ticker : str) -> pd.DataFrame:
    stock = YahooFinancials(ticker)

    start = str(datetime.date.today() - datetime.timedelta(days=200))
    end = str(datetime.date.today() - datetime.timedelta(days=0))

    historical_closes = stock.get_historical_price_data(start, end, "daily")
    prices = historical_closes[ticker]['prices']

    closes = [round(day['close'], 2) for day in prices]     
    highs = [round(day['high'], 2) for day in prices]     
    lows = [round(day['low'], 2) for day in prices]   
    volume = [day['volume'] for day in prices]
    
    # Pandas dataframe overlays indicators 
    df = pd.DataFrame()
    df['Highs'] = highs
    df['Lows'] = lows
    df['Closes'] = closes
    df['Volume'] = volume

    # EMAs - Exclude or modify
    df['EMA_20'] = round(df['Closes'].ewm(span=20).mean(), 2)
    df['EMA_50'] = round(df['Closes'].ewm(span=50).mean(), 2)
    df['EMA_200'] = round(df['Closes'].ewm(span=200).mean(), 2)

    # MACD
    df['EMA_12'] = df['Closes'].ewm(span=12).mean()
    df['EMA_26'] = df['Closes'].ewm(span=26).mean()
    df['MACD'] = round(df['EMA_12'] - df['EMA_26'], 2)
    df['MACD_Signal'] = round(df['MACD'].ewm(span=9).mean(), 2)
    df['MACD_Histogram'] = round(df['MACD'] - df['MACD_Signal'], 2)

    # Stochastics
    df['Stochastics_14_High'] = df['Highs'].rolling(14).max()
    df['Stochastics_14_Low'] = df['Lows'].rolling(14).min()
    df['Stochastics_Fast_K'] = (df['Closes'] - df['Stochastics_14_Low']) * 100 / (df['Stochastics_14_High'] - df['Stochastics_14_Low'])
    df['Stochastics_K'] = round(df['Stochastics_Fast_K'].rolling(3).mean(), 2)
    df['Stochastics_D'] = round(df['Stochastics_K'].rolling(3).mean(), 2)

    # Force Index
    df['Forces'] = (df['Closes'] - df['Closes'].shift()) * df['Volume']
    df['Force_Index'] = round(df['Forces'].ewm(span=13).mean(), 2)

    # Average True Range
    df['Range'] = df['Highs'] - df['Lows']
    df['High_Close'] = np.abs(df['Highs'] - df['Closes'].shift())
    df['Low_Close'] = np.abs(df['Lows'] - df['Closes'].shift())
    ranges = pd.concat([df['Range'], df['High_Close'], df['Low_Close']], axis=1)
    df['True_Range'] = np.max(ranges, axis=1)
    df['ATR'] = round(df['True_Range'].rolling(14).sum() / 14, 2)

    # Offset Close- How to do time series?
    df['Offset'] = df['Closes'].loc[0]

    return df


def trade_decision(df):
    # Result- price up enough or not (closes-changes)
    # range, volume, MACD, Stochastics, Exponential Moving Averages (changes)
    # EMA channel/positions 
    # time offset, increase or decrease
    df = df.iloc[19:]
    X_indicators = df[['MACD_Histogram', 'Stochastics_K', 'Stochastics_D', 'Force_Index', 'Volume', 'ATR']]
    y_change_direction = df[['Offset',]]

    X_train, y_train, X_test, y_test = train_test_split(X_indicators, y_change_direction, train_size=0.7, random_state=0)

    model = LogisticRegression(C=1).fit(X_train, X_test)
    train_score = model.score(X_train, y_train)
    test_score = model.score(X_test, y_test)

    print(train_score, test_score)
    

def short_squeeze():
    pass

def price_forecast():
    pass

def day_trading_bot():
    pass


df = get_data("AAPL")
df.to_excel('output.xlsx', index=False) 
trade_decision(df)