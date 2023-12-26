from flask import Flask, request
import category_indicator
import screener

app = Flask(__name__)

@app.route('/category_indicators', methods=['POST'])
def display_indicators():
    data = request.get_json()
    
    start = data.get('start')
    end = data.get('end')
    version = data.get('version')

    return category_indicator.build_chart(start, end, version)

@app.route('/screener')
def display_screener():
    return screener.run_screener()

@app.route('/broad_screener/<date>', methods=['GET'])
def broad_screener(date):
    return screener.run_screener(date)

if __name__ == '__main__':
   app.run(debug = True)
