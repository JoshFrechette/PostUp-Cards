var mysql = require('mysql');

var connection = mysql.createConnection({
  host     : 'JAWSDB_URL',
  user     : 'root',
  password : '',
  database : 'postup_cards'
});
connection.connect(function(err){
if(!err) {
    console.log("Database is connected");
} else {
    console.log("Error while connecting with database");
}
});
module.exports = connection;