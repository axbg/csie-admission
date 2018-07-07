let Sequelize = require('sequelize');
const sequelize = new Sequelize('admitere', 'alex', 'alex', {
  dialect: 'mysql',
  host: 'localhost',
  define: {
    timestamps: false
  }
});

module.exports = sequelize;