
// var requireStack = require("require-stack")
var express = require("express");
var mysql = require("mysql2");

var app = express();

var PORT = process.env.port || 8080;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static('public'))

require("./app/routes/apiroutes")(app);
require("./app/routes/htmlroutes")(app);

app.listen(PORT, function () {
  console.log("App listening on PORT: " + PORT);
});
































