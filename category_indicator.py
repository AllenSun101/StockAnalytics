import datetime
import plotly.graph_objects as go

import pandas as pd
from yahoofinancials import YahooFinancials
import numpy as np


def update_indicators():
    # Open spreadsheet, read, separate into categories

    spreadsheet = pd.read_excel("Considered_Stocks.xlsx", sheet_name="Stocks")
    sectors = ["Information Technology", "Communication Services", "Consumer Discretionary",
           "Consumer Staples", "Finance", "Healthcare", "Industrials", "Energy", "Materials",
           "Utilities", "Real Estate"]
    
    # Set start and end dates
    # Database last date will later determine how much to run
    start = str(datetime.date.today() - datetime.timedelta(days=150))
    end = str(datetime.date.today())

    # Get all market open dates
    test = YahooFinancials("SPY").get_historical_price_data(start, end, "daily")
    market_data = test["SPY"]['prices']
    dates = [days['formatted_date'] for days in market_data]

    # Call indicator calculations

    # Testing
    for sector in sectors:
        tickers = spreadsheet[sector].dropna()
        for ticker in tickers:
            try:
                stock = YahooFinancials(ticker)
                historical_closes = stock.get_historical_price_data(start, end, "daily")
                prices = historical_closes[ticker]['prices']
                closes = [round(day['close'], 2) for day in prices]
                print(ticker + " " + str(len(closes)))
            except:
                print("Error 1")
                continue



def get_indicators():
    pass

def calculate_uptrend():
    pass

def calculate_year_to_date():
    pass

def calculate_year_range_position():
    pass

def visualize_chart():
    pass


update_indicators()

'''
data = {}
for sector in sectors:
    tickers = spreadsheet[sector].dropna()
    positive_emas = [0] * (len(dates) - 30)
    for ticker in tickers:
        print(ticker)
        try:
            stock = YahooFinancials(ticker)
            historical_closes = stock.get_historical_price_data(start, end, "daily")
            prices = historical_closes[ticker]['prices']
            closes = []
        except:
            print("Error 1")
            continue
        try:
            for days in prices:
                closes.append(round(days['close'], 2))
        except TypeError:
            print("Error 2")
            continue
        try:
            ema = pd.DataFrame()
            ema["Closes"] = closes
            ema["EMA"] = round(ema["Closes"].ewm(span=50).mean(), 2)
            for i in range(30, len(ema["EMA"])):
                if ema["EMA"].iloc[i] >= ema["EMA"].iloc[i - 1]:
                    positive_emas[i - 30] += 1
        except:
            print("Error 3")
            continue
    # convert to percentage
    for i in range(len(dates) - 30):
        divisor = len(tickers)
        positive_emas[i] = positive_emas[i] * 100 // divisor
    data[sector] = positive_emas

fig = go.Figure()
dates = dates[30:]
for sector in data:
    fig.add_trace(go.Scatter(x=dates, y=data[sector], name=sector))

fig.show()
'''
