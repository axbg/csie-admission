const Sequelize = require('sequelize');
const DB_NAME = require('../config/constants').DB_NAME;
const DB_USER = require('../config/constants').DB_USER;
const DB_PASSWORD = require('../config/constants').DB_PASSWORD;
const DB_URL = require('../config/constants').DB_URL;

const sequelize = new Sequelize(DB_NAME, DB_USER, DB_PASSWORD, {
  dialect: 'mysql',
  host: DB_URL,
  define: {
    timestamps: false
  }
});

module.exports = sequelize;