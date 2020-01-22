var mysql      = require('mysql');

var connection = mysql.createConnection({
<<<<<<< HEAD
  host     : 'JAWSDB_URL',
=======
  host     : 'localhost',
>>>>>>> master
  user     : 'root',
  password : 'Itsoverkamo000',
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