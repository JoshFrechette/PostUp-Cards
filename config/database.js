// Dependencies
var mysql = require("mysql");
var Sequelize = require("sequelize");

if (process.env.JAWSDB_URL) {
  connection = mysql.createConnection(process.env.JAWSDB_URL);

  connection.connect();

connection.query('SELECT 1 + 1 AS solution', function(err, rows, fields) {
  if (err) throw err;

  console.log('The solution is: ', rows[0].solution);
});

connection.end();
} else {
  var sequelize = new Sequelize("postup_cards", "root", "", {

    host: "localhost",
    port: 3306,
    dialect: "mysql",
    pool: {
      max: 5,
      min: 0,
      idle: 10000
    }
  })
};

sequelize.authenticate()
  .then(() => console.log('Database connected...'))
  .catch(err => console.log('Error: ' + err))


module.exports = sequelize;

// const Sequelize = require('sequelize');

// new Sequelize('postup_cards', 'root', '', {
//   use_env_variable: "JAWSDB_URL",

//   database: "postup_cards",

//   dialect: "mysql",
//   operatorsAliases: false,
//   // host: 'localhost',
//   // dialect: 'mysql',
//   // operatorsAliases: false,

//   pool: {
//     max: 5,
//     min: 0,
//     acquire: 30000,
//     idle: 10000
//   },
// });

// module.exports = sequelize;