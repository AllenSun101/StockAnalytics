from flask import Flask
import category_indicator
import screener

app = Flask(__name__)

@app.route('/category_indicators')
def display_indicators():
    # Styling and chart integration
    return category_indicator.update_indicators()

@app.route('/screener')
def display_screener():
    return screener.run_screener()

@app.route('/broad_screener/<date>', methods=['GET'])
def broad_screener(date):
    return screener.run_screener(date)

if __name__ == '__main__':
   app.run(debug = True)
