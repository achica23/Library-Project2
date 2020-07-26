var mysql = require('mysql2');
var connection;

console.log(process.env.JAWSDB_url);
if (process.env.JAWSDB_url) {
    connection = mysql.createConnection(process.env.JAWSDB_url);
} else {
    connection = mysql.createConnection({
        port: 3306,
        host: 'localhost',
        user: 'root',
        password: 'Password725',
        database: 'booksDatabase',
    });
}



connection.connect(function (error) {
    if (error) {
        console.error('errorconnecting:' + error.static);
        return;
    }
    console.log('connectedasID' + connection.threadID);
});

modules.exports = connection