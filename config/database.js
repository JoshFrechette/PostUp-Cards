// Dependencies
var Sequelize = require("sequelize");

if (process.env.JAWSDB_URL) {
  connection = mysql.createConnection(process.env.JAWSDB_URL);
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