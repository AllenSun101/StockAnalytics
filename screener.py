import datetime
from datetime import date

import pandas as pd
from yahoofinancials import YahooFinancials
import numpy as np


def run_screener():
    # Get Inputs and Set Time parameters
    days_back = 235
    days_backtesting = 0
    start = str(datetime.date.today() - datetime.timedelta(days=days_back))
    end = str(datetime.date.today() - datetime.timedelta(days=days_backtesting))

    spreadsheet = pd.read_excel("Considered_Stocks.xlsx", sheet_name="Stocks")

    sectors = ["Information Technology", "Communication Services", "Consumer Discretionary",
            "Consumer Staples", "Finance", "Healthcare", "Industrials", "Energy", "Real Estate"]

    momentum = strong_momentum(spreadsheet, sectors)
    uptrend = strong_uptrend(spreadsheet, sectors)

    print(momentum)
    print(uptrend)


# strong price growth
def strong_momentum(spreadsheet, sectors):
    momentum_stocks = []

    for sector in sectors:
        tickers = spreadsheet[sector].dropna()

        for ticker in tickers:
            print(ticker)
            stock = YahooFinancials(ticker)

            start = str(datetime.date.today() - datetime.timedelta(days=40))
            end = str(datetime.date.today() - datetime.timedelta(days=0))

            historical_closes = stock.get_historical_price_data(start, end, "daily")
            prices = historical_closes[ticker]['prices']

            closes = [round(day['close'], 2) for day in prices]     
            highs = [round(day['high'], 2) for day in prices]     
            lows = [round(day['low'], 2) for day in prices]   
            
            df = pd.DataFrame()
            df['Highs'] = highs
            df['Lows'] = lows
            df['Closes'] = closes
            atr = average_true_range(df)
            
            for i in range(2, 12):
                if closes[-1] - closes[-i] > atr.iloc[-i] * 2:
                    momentum_stocks.append(ticker)
                    break

    return momentum_stocks


# strong positive trend
def strong_uptrend(spreadsheet, sectors):
    uptrend_stocks = []

    for sector in sectors:
        tickers = spreadsheet[sector].dropna()

        for ticker in tickers:
            print(ticker)
            stock = YahooFinancials(ticker)

            start = str(datetime.date.today() - datetime.timedelta(days=100))
            end = str(datetime.date.today() - datetime.timedelta(days=0))

            historical_closes = stock.get_historical_price_data(start, end, "daily")
            prices = historical_closes[ticker]['prices']

            closes = [round(day['close'], 2) for day in prices]

            ema = pd.DataFrame()
            ema["Closes"] = closes
            ema["50 EMA"] = round(ema["Closes"].ewm(span=50).mean(), 2)

            uptrend_points = 0
            for i in range(-10, 0, 1):
                if ema["50 EMA"].iloc[i] > ema["50 EMA"].iloc[i - 1]:
                    uptrend_points += 1

            if uptrend_points > 7:
                uptrend_stocks.append(ticker)

    return uptrend_stocks


def average_true_range(dataframe):
    high_low = dataframe['Highs'] - dataframe['Lows']
    high_close = np.abs(dataframe['Highs'] - dataframe['Closes'].shift())
    low_close = np.abs(dataframe['Lows'] - dataframe['Closes'].shift())
    ranges = pd.concat([high_low, high_close, low_close], axis=1)
    true_range = np.max(ranges, axis=1)
    dataframe["ranges"] = true_range
    atr = dataframe["ranges"].rolling(14).sum() / 14
    return atr


run_screener()