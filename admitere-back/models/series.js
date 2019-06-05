module.exports = (sequelize, DataTypes) => {
  return sequelize.define('series', {
    data: DataTypes.STRING,
    contestants: DataTypes.INTEGER
  }, {
      underscored: true
    });
};