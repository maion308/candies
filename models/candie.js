'use strict';
module.exports = (sequelize, DataTypes) => {
  const Candie = sequelize.define('Candie', {
    name: DataTypes.STRING,
    color: DataTypes.STRING,
    rating: DataTypes.INTEGER
  }, {});
  Candie.associate = function(models) {
    // associations can be defined here
  };
  return Candie;
};