'use strict';
module.exports = (sequelize, DataTypes) => {
  const Rating = sequelize.define('Rating', {
    rating: {
      type: DataTypes.FLOAT,
      allowNull: false
    },
  }, {});
  Rating.associate = function(models) {
    Rating.belongsTo(models.User, { foreignKey: 'userId'})
    Rating.belongsTo(models.Products, {foreignKey: 'productId'})
  };
  return Rating;
};
