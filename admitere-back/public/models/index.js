let sequelize = require('./database');
let Users = sequelize.import('./users');
let Contestants = sequelize.import('./contestants');


module.exports = {
  sequelize,
  Users,
  Contestants
};

