let booksData = require("./app/public/js/apicode.js");
let connection = require("../app/config/connection");

module.export = function (app) {

    app.get("./app/data/booksData.js", function (req, res) {
        res.json(booksData);
    });

    app.post("/index.html", function (req, res) {
        res.json();
    });





};