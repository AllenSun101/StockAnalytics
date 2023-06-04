import pandas as pd
import yahoofinancials as YahooFinancials
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
    pass


def check_spreadsheet_formatting():
    # Spaces of spreadsheet
    pass

def verify_tickers():
    # Find tickers that do not exist anymore, tickers with incomplete data (need handling)
    pass