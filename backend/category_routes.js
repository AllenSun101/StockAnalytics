
module.exports = function(app){
    app.post("/update_indicators", (req, res) => {
        console.log("Test is working");
        // call flask functions
        res.json({message: "Successfully routed!"});
    })
}