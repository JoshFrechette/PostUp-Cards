const Sequelize = require('sequelize');

module.exports = new Sequelize('postup_cards', 'root', 'Itsoverkamo000', {
  use_env_variable: "JAWSDB_URL",

  database: "postup_cards",

  dialect: "mysql",
  operatorsAliases: false,
  // host: 'localhost',
  // dialect: 'mysql',
  // operatorsAliases: false,

  pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000
  },
});