module.exports = (sequelize, DataTypes) => {
  return sequelize.define('contestants', {
    number: DataTypes.INTEGER,
  }, {
    underscored: true
  });
};