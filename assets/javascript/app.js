var mysql = require("mysql2");
var requireStack = require("require-stack");

var connection = mysql.createConnection({
  host: "localhost",
  port: 3306,
  user: "root",
  password: "Chefkaiden09",
  database: "books_DB"
});

connection.connect(function(err) {
  if (err) throw err;
  console.log("connected as id " + connection.threadId);
  connection.end();
});


function displayBooks () {
  connection.query("SELECT * FROM books", function (err, res) {
    console.log("Books for Sale");
    for (let i = 0; i < res.length; i++) {
      console.log(res[i].tumbnail + " | " + res[i].author + " | " + res[i].title + " | " + res[i].publish_date + " | "  + res[i].cost + " | ")
    };
  });
};

displayBooks();





























