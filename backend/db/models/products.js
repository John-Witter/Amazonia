'use strict';
module.exports = (sequelize, DataTypes) => {
  const Products = sequelize.define('Products', {
    name: {
      type: DataTypes.STRING(100),
      allowNull: false
    },
    category: {
      type: DataTypes.STRING,
      allowNull: false
    },
    image: {
      type: DataTypes.STRING,
      allowNull: false
    },
    price: {
      type: DataTypes.FLOAT,
      allowNull: false
    },
    countInStock: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    numReviews: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    description: {
      type: DataTypes.TEXT,
      allowNull: false
    },
  }, {});
  Products.associate = function(models) {
    Products.hasMany(models.Review, {foreignKey: 'productId'})
    Products.hasMany(models.Rating, {foreignKey: 'productId'})
  };
  return Products;
};
