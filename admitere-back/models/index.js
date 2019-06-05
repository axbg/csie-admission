const sequelize = require('./database');
const Users = sequelize.import('./users');
const Contestants = sequelize.import('./contestants');
const Series = sequelize.import('./series');

module.exports = {
  sequelize,
  Users,
  Contestants,
  Series

};

