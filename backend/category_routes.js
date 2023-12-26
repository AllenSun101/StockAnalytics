const axios = require('axios');

module.exports = function (app) {
    app.post("/retrieve_dates", async (req, res) => {
        const start = req.body.start;
        const end = req.body.end;
        const version = req.body.version;
        
        const response = await axios.post('http://127.0.0.1:5000/category_indicators', {
            start: start,
            end: end,
            version: version,
        });

        res.send(response.data);
    });

}