import pandas as pd
from yahoofinancials import YahooFinancials
import numpy as np

from sklearn.linear_model import LogisticRegression
from sklearn.model_selection import train_test_split
import lstm
import yfinance as yf


from datetime import date, datetime


def get_data(ticker : str) -> pd.DataFrame:

    start = "2020-01-01"
    end = str(date.today())
    time_frame = "daily"

    stock = YahooFinancials(ticker).get_historical_price_data(start, end, time_frame)
    data = stock[ticker]['prices']

    dates = [days['formatted_date'] for days in data]
    closes = [round(day['close'], 2) for day in data]
    low = [round(day['low'], 2) for day in data]
    high = [round(day['high'], 2) for day in data]
    volume = [round(day['volume'], 2) for day in data]

    data = {'Date': dates, 'Close': closes, 'Low': low, 'High': high, 'Volume': volume}
    df = pd.DataFrame(data)

    # EMAs
    df['EMA_20'] = round(df['Close'].ewm(span=20).mean(), 2)
    df['EMA_50'] = round(df['Close'].ewm(span=50).mean(), 2)

    # MACD
    df['EMA_12'] = df['Close'].ewm(span=12).mean()
    df['EMA_26'] = df['Close'].ewm(span=26).mean()

    df['MACD'] = round(df['EMA_12'] - df['EMA_26'], 2)
    df['MACD_Signal'] = round(df['MACD'].ewm(span=9).mean(), 2)

    # Stochastics
    df['Stochastics_14_High'] = df['High'].rolling(14).max()
    df['Stochastics_14_Low'] = df['Low'].rolling(14).min()
    df['Stochastics_Fast_K'] = (df['Close'] - df['Stochastics_14_Low']) * 100 / (df['Stochastics_14_High'] - df['Stochastics_14_Low'])

    df['Stochastics_K'] = round(df['Stochastics_Fast_K'].rolling(3).mean(), 2)
    df['Stochastics_D'] = round(df['Stochastics_K'].rolling(3).mean(), 2)

    # Force Index
    df['Forces'] = (df['Close'] - df['Close'].shift()) * df['Volume']
    df['Force_Index'] = round(df['Forces'].ewm(span=13).mean(), 2)

    # Average True Range
    df['Range'] = df['High'] - df['Low']
    df['High_Close'] = np.abs(df['High'] - df['Close'].shift())
    df['Low_Close'] = np.abs(df['Low'] - df['Close'].shift())
    ranges = pd.concat([df['Range'], df['High_Close'], df['Low_Close']], axis=1)
    df['True_Range'] = np.max(ranges, axis=1)
    df['ATR'] = round(df['True_Range'].rolling(14).sum() / 14, 2)

    columns_to_drop = ['EMA_12', 'EMA_26', 'Stochastics_14_High', 'Stochastics_14_Low', 'Stochastics_Fast_K', 'Forces', 'Range', 'High_Close', 'Low_Close', 'True_Range']
    df.drop(columns=columns_to_drop, inplace=True)

    # Create dummy row for current day- will not be factored in lookback period
    new_row = pd.Series([0] * len(df.columns), index=df.columns)

    # Concatenate the new row to the DataFrame
    df = pd.concat([df, new_row.to_frame().transpose()], ignore_index=True)

    return df


def earnings(ticker): 
    earnings_dates = yf.Ticker(ticker).earnings_dates.index.unique().tolist()
    df = pd.DataFrame({'timestamp': earnings_dates})

    df['year'] = df['timestamp'].dt.year
    df['month'] = df['timestamp'].dt.month
    df['day'] = df['timestamp'].dt.day
    df['hour'] = df['timestamp'].dt.hour

    today_date = datetime.now().date()
    # Check for same day morning or previous day afternoon
    df['is_today'] = (df['timestamp'].dt.year == today_date.year) & \
                 (df['timestamp'].dt.month == today_date.month) & \
                 (df['timestamp'].dt.day == today_date.day) & \
                  (df['timestamp'].dt.hour < 12) 
    df['is_today'] = df['is_today'] | (df['timestamp'].dt.year == today_date.year) & \
                 (df['timestamp'].dt.month == today_date.month) & \
                 (df['timestamp'].dt.day == today_date.day - 1) & \
                  (df['timestamp'].dt.hour > 12)

    return any(df['is_today'])


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


def price_forecast(ticker):
    df = get_data(ticker)
    predicted = lstm.get_results(df)
    return predicted


def trading_bot(num_stocks):
    
    spreadsheet = pd.read_excel("Condensed_Watchlist.xlsx", sheet_name="Stocks")

    sectors = ["Information Technology", "Communication Services", "Consumer Discretionary",
            "Consumer Staples", "Finance", "Healthcare", "Industrials", "Energy", "Real Estate"]
    
    picks = {}

    for sector in sectors:
        tickers = spreadsheet[sector].dropna()

        for ticker in tickers:
            print(ticker)
            
            if earnings(ticker):
                continue

            df = get_data(ticker)

            close = df['Close'].iloc[-2]
            
            sum_score = 0
            runs = 3
            for i in range(runs):
                predicted = lstm.get_results(df)
                prev_predicted = predicted[0]
                current_predicted = predicted[1]

                percentage_change = ((current_predicted - close) + (current_predicted - prev_predicted))/ close * 100
                sum_score += percentage_change

            avg_score = round(sum_score/runs, 2)
            
            # if higher percentage, add to picks
            if len(picks) < num_stocks:
                picks[ticker] = avg_score
            else:
                min_key = min(picks, key = picks.get)
                if avg_score > picks[min_key]:
                    picks[ticker] = avg_score
                    picks.pop(min_key)

    return picks


#df = get_data("AAPL")
#df.to_excel('output.xlsx', index=False) 
#trade_decision(df)
            
print(trading_bot(20))