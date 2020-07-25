let booksData = require("../data/booksData");

module.export = function(app) {

    app.get("../data/booksData.js", function(req, res) {
        res.json(booksData);
    });

    app.post("/index.html", function(req, res) {
         res.json()
    })












}