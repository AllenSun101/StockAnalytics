from flask import Flask
import category_indicator

app = Flask(__name__)

@app.route('/category_indicators')
def display_indicators():
    # Styling and chart integration
    return category_indicator.update_indicators()

if __name__ == '__main__':
   app.run(debug = True)
