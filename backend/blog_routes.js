var mysql = require("mysql2");

module.exports = function(app){
    app.post("/blog_posts", (req, res) => {
        console.log("Load is working");

        var posts = req.body.numPosts;
        console.log(posts);

        var con = mysql.createConnection({
            host: "localhost",
            user: "root",
            password: "Isaac-Andy1",
            database: "blogposts"
        });
      
      con.connect(function(err) {
        if (err) throw err;
        console.log("Connected for blog!");

        // Render most recent posts
        var sql = "SELECT idPosts, Title, Author, Date, Category, ImageURL, Description FROM posts ORDER BY idPosts DESC LIMIT " + con.escape(posts);

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

            var sql = "SELECT Title, Author, Date, Category, Description, Text FROM posts WHERE idPosts = " + req.body.id;

            con.query(sql, function (err, result) {
                if (err) throw err;
                res.json(result);
            });

        });
    })
}


