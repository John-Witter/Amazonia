'use strict';
module.exports = (sequelize, DataTypes) => {
  const Review = sequelize.define('Review', {
    review: {
      type: DataTypes.TEXT,
      allowNull: false
    },
  }, {});
  Review.associate = function (models) {
    Review.belongsTo(models.User, { foreignKey: 'userId' })
    Review.belongsTo(models.Products, {foreignKey: 'productId'})
  };
  return Review;
};
