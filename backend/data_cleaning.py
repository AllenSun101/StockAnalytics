import datetime

import pandas as pd
from yahoofinancials import YahooFinancials
import numpy as np

spreadsheet = pd.read_excel("Considered_Stocks.xlsx", sheet_name="Stocks")

def insert_tickers(tickers: list[list[str, str]]) -> None:
    pass


def remove_duplicates(tickers: str, sector: list[str]) -> None:
    pass


def find_duplicates() -> list[list[str, list[str]]]:
    duplicates = []
    duplicates_sectors = []

    # Aggregate to a list
    stocks = []
    for sector in spreadsheet.columns:
        tickers = spreadsheet[sector].dropna().values.tolist()
        stocks.extend(tickers)    

    # Find duplicate tickers
    for stock in stocks:
        if stocks.count(stock) > 1 and stock not in duplicates:
            duplicates.append(stock)

    # Find all sectors of each duplicate 
    for stock in duplicates:
        sectors = []
        for sector in spreadsheet.columns:
            if stock in spreadsheet[sector].values:
                sectors.append(sector)
        duplicates_sectors.append([stock, sectors])

    return duplicates_sectors


def find_sector(ticker: str) -> str:
    for sector in spreadsheet.columns:
        if ticker in spreadsheet[sector].values:
            return sector


def check_spreadsheet_formatting():
    for sector in spreadsheet.columns:
        tickers = spreadsheet[sector].dropna()
        for ticker in tickers:
            if " " in ticker:
                # modify ticker
                print(ticker)


def verify_tickers():
    # Find tickers that do not exist anymore, tickers with incomplete data (need handling)

    sectors = ["Information Technology", "Communication Services", "Consumer Discretionary",
            "Consumer Staples", "Finance", "Healthcare", "Industrials", "Energy", "Real Estate"]
    
    bad_tickers = []
    for sector in sectors:
        tickers = spreadsheet[sector].dropna()

        for ticker in tickers:
            print(ticker)
            try:
                stock = YahooFinancials(ticker)
                start = str(datetime.date.today() - datetime.timedelta(days=4))
                end = str(datetime.date.today() - datetime.timedelta(days=0))
                historical_closes = stock.get_historical_price_data(start, end, "daily")
                prices = historical_closes[ticker]['prices']
                closes = [round(day['close'], 2) for day in prices]     
            except:
                bad_tickers.append(ticker)
        
    return bad_tickers
            
# print(verify_tickers())