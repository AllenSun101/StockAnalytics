import datetime

import pandas as pd
from yahoofinancials import YahooFinancials
import numpy as np

# Change output
def run_screener():

    patterns = {}

    spreadsheet = pd.read_excel("Considered_Stocks.xlsx", sheet_name="Stocks")

    sectors = ["Information Technology", "Communication Services", "Consumer Discretionary",
            "Consumer Staples", "Finance", "Healthcare", "Industrials", "Energy", "Real Estate"]

    # run screener functions
    patterns["Momentum"] = strong_momentum(spreadsheet, sectors)
    patterns["Uptrend"] = strong_uptrend(spreadsheet, sectors)

    return patterns


# strong price growth
def strong_momentum(spreadsheet: pd.DataFrame, sectors: list[str]) -> list[str]:
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
            
            # create pandas dataframe for processing
            df = pd.DataFrame()
            df['Highs'] = highs
            df['Lows'] = lows
            df['Closes'] = closes

            atr = average_true_range(df)
            
            # check if close is at least 2 ATRs above lowest point in last ten days 
            for i in range(2, 12):
                if closes[-1] - closes[-i] > atr.iloc[-i] * 2:
                    momentum_stocks.append(ticker)
                    break
        break
    return momentum_stocks


# strong positive trend
def strong_uptrend(spreadsheet: pd.DataFrame, sectors: list[str]) -> list[str]:
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

            # Dataframe of exponential moving averages
            ema = pd.DataFrame()
            ema["Closes"] = closes
            ema["50 EMA"] = round(ema["Closes"].ewm(span=50).mean(), 2)

            # check if 50 day ema increases in seven of last ten days
            uptrend_points = 0
            for i in range(-10, 0, 1):
                if ema["50 EMA"].iloc[i] > ema["50 EMA"].iloc[i - 1]:
                    uptrend_points += 1

            if uptrend_points > 7:
                uptrend_stocks.append(ticker)         
        break
    return uptrend_stocks


def average_true_range(dataframe: pd.DataFrame) -> pd.DataFrame:
    high_low = dataframe['Highs'] - dataframe['Lows']
    high_close = np.abs(dataframe['Highs'] - dataframe['Closes'].shift())
    low_close = np.abs(dataframe['Lows'] - dataframe['Closes'].shift())
    ranges = pd.concat([high_low, high_close, low_close], axis=1)
    true_range = np.max(ranges, axis=1)
    dataframe["ranges"] = true_range
    atr = dataframe["ranges"].rolling(14).sum() / 14
    return atr


# run_screener()