const express = require("express");
const request = require('request');

const cors = require('cors');

const PORT = process.env.PORT || 3001

const app = express()

app.use(cors());

var mysql = require("mysql2");

app.use(express.urlencoded({ extended: true }));

app.use(express.json());

require('./category_routes')(app);

require('./blog_routes')(app);

require('./screener_routes')(app);

app.get("/api", (req, res) => {
    // Flask Connection Test- NEEDS TESTING AND FIXING
    // May need to move files to backend directory
    // res.json({message: "Hello, world"});
    // Maybe uninstall requests and convert to axios
    request('http://127.0.0.1:5000/category_indicators', function (error, response, body) {
        console.error('error:', error); // Print the error
        console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received
        //console.log('body:', body); // Print the data received
        res.send(body); //Display the response on the website
    });     
});


app.get("/database", (req, res) => {
    console.log("Working");

    var con = mysql.createConnection({
        host: "localhost",
        user: "root",
        password: "Isaac-Andy1",
        database: "blogposts"
    });

    res.json({message: "Connect to database"});
});


app.listen(PORT, () => {
    console.log(`server listening on port ${PORT}`);
})

app.get("/screener", (req, res) => {
    // Flask Connection Test- NEEDS TESTING AND FIXING
    // May need to move files to backend directory
    // res.json({message: "Hello, world"});
    // Maybe uninstall requests and convert to axios
    request('http://127.0.0.1:5000/screener', function (error, response, body) {
        console.error('error:', error); // Print the error
        console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received
        console.log('body:', body); // Print the data received
        res.send(body); //Display the response on the website
    });     
});

app.get("/test", (req, res) => {
    res.json({message: "Connection established!"});
});