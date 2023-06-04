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
    start = str(datetime.date.today() - datetime.timedelta(days=151))
    end = str(datetime.date.today())

    # Get all market open dates
    test = YahooFinancials("SPY").get_historical_price_data(start, end, "daily")
    market_data = test["SPY"]['prices']
    dates = [days['formatted_date'] for days in market_data]

    # Call indicator calculations
    #uptrend(dates, sectors, spreadsheet, start, end)
    #price_growth(dates, sectors, spreadsheet, start, end)
    aggregate_percentage_growth(dates, sectors, spreadsheet, start, end)

def get_indicators():
    pass

def uptrend(dates, sectors, spreadsheet, start, end):
    data = {}
    for sector in sectors:
        increasing_emas = [0] * (len(dates) - 30)
        tickers = spreadsheet[sector].dropna()
        
        # Cycle through all tickers in each sector
        for ticker in tickers:
            # extract close data
            try:
                stock = YahooFinancials(ticker)
                historical_closes = stock.get_historical_price_data(start, end, "daily")
                prices = historical_closes[ticker]['prices']
                closes = [round(day['close'], 2) for day in prices]
            except:
                print("Error")
                # Call diagnostic/handling functions
                continue

            # Calculate moving average
            ema = pd.DataFrame()
            ema["Closes"] = closes
            ema["EMA"] = round(ema["Closes"].ewm(span=50).mean(), 2)
            # Fix for adjusted histories- will be done during database implementation

            # Calculate whether moving average increased, add accordingly to sector total 
            # 30 day offset to account for moving average time lag as days accumulate in averaging
            for i in range(30, len(ema["EMA"])):
                if ema["EMA"].iloc[i] > ema["EMA"].iloc[i - 1]:
                    increasing_emas[i-30] += 1
        
        # convert to percentage
        for i in range(len(dates) - 30):
            increasing_emas[i] = increasing_emas[i] * 100 // len(tickers)
        
        data[sector] = increasing_emas

    fig = go.Figure()
    dates = dates[30:]
    for sector in data:
        fig.add_trace(go.Scatter(x=dates, y=data[sector], name=sector))

    fig.show()


def aggregate_percentage_growth(dates, sectors, spreadsheet, start, end):
    data = {}
    for sector in sectors:
        percentage_increase = [0] * len(dates)
        tickers = spreadsheet[sector].dropna()
        
        # Cycle through all tickers in each sector
        for ticker in tickers:
            # extract close data
            try:
                stock = YahooFinancials(ticker)
                historical_closes = stock.get_historical_price_data(start, end, "daily")
                prices = historical_closes[ticker]['prices']
                closes = [round(day['close'], 2) for day in prices]
            except:
                print("Error")
                # Call diagnostic/handling functions
                continue

            # Fix for adjusted histories- will be done during database implementation

            # check whether close is higher than it was 50 days ago
            # Increment accordingly to sector total
            for i in range(len(closes)):
                if i-1 < 50:
                    continue
                percentage_increase[i] += (closes[i] - closes[i-50]) / closes[i]
                
            break

        # convert to percentage
        for i in range(len(dates)):
            percentage_increase[i] = round(percentage_increase[i] * 100 / len(tickers), 2)
        
        data[sector] = percentage_increase

    fig = go.Figure()
    for sector in data:
        fig.add_trace(go.Scatter(x=dates, y=data[sector], name=sector))

    fig.show()

def price_growth(dates, sectors, spreadsheet, start, end):
    data = {}
    for sector in sectors:
        price_increase = [0] * len(dates)
        tickers = spreadsheet[sector].dropna()
        
        # Cycle through all tickers in each sector
        for ticker in tickers:
            # extract close data
            try:
                stock = YahooFinancials(ticker)
                historical_closes = stock.get_historical_price_data(start, end, "daily")
                prices = historical_closes[ticker]['prices']
                closes = [round(day['close'], 2) for day in prices]
            except:
                print("Error")
                # Call diagnostic/handling functions
                continue

            # Fix for adjusted histories- will be done during database implementation

            # check whether close is higher than it was 50 days ago
            # Increment accordingly to sector total
            for i in range(len(closes)):
                if i-1 < 50:
                    continue
                if closes[i] > closes[i-50]:
                    price_increase[i] += 1

        # convert to percentage
        for i in range(len(dates)):
            price_increase[i] = price_increase[i] * 100 // len(tickers)
        
        data[sector] = price_increase

    fig = go.Figure()
    for sector in data:
        fig.add_trace(go.Scatter(x=dates, y=data[sector], name=sector))

    fig.show()


def visualize_chart():
    pass

def clean_database():
    pass


update_indicators()

