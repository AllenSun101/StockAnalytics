const express = require("express");
const axios = require('axios');

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


app.listen(PORT, () => {
    console.log(`server listening on port ${PORT}`);
})


app.get("/test", (req, res) => {
    res.json({message: "Connection established!"});
});