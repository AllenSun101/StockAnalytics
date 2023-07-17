var mysql = require("mysql2");

module.exports = function(app){
    app.post("/blog_posts", (req, res) => {
        console.log("Load is working");

        var posts = 6;
        // var numPosts = req.body.numPosts;

        var con = mysql.createConnection({
            host: "localhost",
            user: "root",
            password: "Isaac-Andy1",
            database: "blogposts"
        });
      
      con.connect(function(err) {
        if (err) throw err;
        console.log("Connected!");

        // Render most recent posts
        var sql = "SELECT * FROM blogposts ORDER BY idBlogPosts DESC LIMIT " + con.escape(posts);


        //var sql = "INSERT INTO blogposts (Title, Author, Date, BlogText) VALUES ('Title', 'Allen', '2023-03-12', 'Text')";

        con.query(sql, function (err, result) {
            if (err) throw err;
            res.json(result);
        });
      });
    });


    app.post("/blog_Search", (req, res) => {
        console.log("Search is working");
        res.json({message: "Search Load!"});
    });


    app.post("/Retrieve_Post", (req, res) => {
        console.log("Testing");

        var con = mysql.createConnection({
            host: "localhost",
            user: "root",
            password: "Isaac-Andy1",
            database: "blogposts"
        });
    

        con.connect(function(err) {
            if (err) throw err;
            console.log("Connected!");

            console.log(req.body.id);

            var sql = "SELECT * FROM blogposts WHERE idBlogPosts = " + req.body.id;

            con.query(sql, function (err, result) {
                if (err) throw err;
                res.json(result);
            });

        });
    })
}


