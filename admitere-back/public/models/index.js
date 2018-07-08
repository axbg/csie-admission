let sequelize = require('./database');
let Users = sequelize.import('./users');
let Contestants = sequelize.import('./contestants');
let Series = sequelize.import('./series');


module.exports = {
  sequelize,
  Users,
  Contestants,
  Series

};

