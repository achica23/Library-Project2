
// var requireStack = require("require-stack")
var express = require("express");
var mysql = require("mysql2");

var app = express();

var PORT = 8080;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

require("./routes/apiroutes")(app);
require("./routes/htmlroutes")(app);

app.listen(PORT, function () {
  console.log("App listening on PORT: " + PORT);
});


let connection = mysql.createConnection({
  host: "localhost",
  port: 3306,
  user: "root",
  password: "Chefkaiden09",
  database: "books_info"
});

connection.connect(function (err) {
  if (err) {
    console.log("error connection: " + err.stack);
    return;
  }
  console.log("connected as id " + connection.threadId);

});





























