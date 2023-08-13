var mysql = require("mysql2");

var axios = require("axios");

module.exports = function(app){
    app.post("/screener_find_date", (req, res) => {

        var con = mysql.createConnection({
            host: "localhost",
            user: "root",
            password: "Isaac-Andy1",
            database: "screeners"
        });

        var screener = req.body.screener;
        var date = req.body.date;
        var present = false;
      
      con.connect(async function(err) {
        if (err) throw err;
        console.log("Connected for screener");

        // Find if date already exists

        var sql = "SELECT COUNT(Date) AS count FROM " + con.escapeId(screener) + " WHERE Date = " + con.escape(date);

        const result = await new Promise((resolve, reject) => {
            con.query(sql, function (err, result) {
                if (err) reject(err);
                else resolve(result);
            });
        });

        // if date already exists
        if(result[0].count > 0){
            present = true;
        }

        // If dates does not exist, call flask function and add to database
        if(!present){
            console.log("Not present");

            var stocks = null;
            
            await axios.get(`http://127.0.0.1:5000/broad_screener/${date}`)
            .then(
                response => {
                    stocks = response.data;
                }
            )
            .catch(function (error) {
                console.log(error);
            });

            console.log(stocks.Momentum);
            console.log(stocks.Uptrend);
            var insertion = `INSERT INTO ${screener} (Date, Momentum, Trend) VALUES ('${date}', '${stocks.Momentum}', '${stocks.Uptrend}')`;
            con.query(insertion, function (err, result) {
                if (err) throw err;
                console.log("Successfully inserted!")
            }); 
        }

        // Return screener picks

        var picks = "SELECT * FROM " + con.escapeId(screener) + " WHERE Date = " + con.escape(date);
        const returnedStocks = await new Promise((resolve, reject) => {
            con.query(picks, function (err, result) {
                if (err) reject(err);
                else resolve(result);
            });
        });

        console.log(returnedStocks[0]);
        res.json(returnedStocks[0]);
      });
    });
}


