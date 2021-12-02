'use strict';
module.exports = (sequelize, DataTypes) => {
  const CartAndProduct = sequelize.define('CartAndProduct', {
    quantity: {
      type: DataTypes.INTEGER
    }
  }, {});
  CartAndProduct.associate = function(models) {
    CartAndProduct.belongsTo(models.Cart, {foreignKey: 'cartId'})
    CartAndProduct.belongsTo(models.Products, {foreignKey: 'cartId'})
  };
  return CartAndProduct;
};
