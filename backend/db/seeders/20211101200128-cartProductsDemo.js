'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('CartAndProducts', [
      {
        cartId: 1,
        productId: 1,
        quantity: 3
      },
      {
        cartId: 1,
        productId: 3,
        quantity: 1
      },
      {
        cartId: 2,
        productId: 8,
        quantity: 2
      },
      {
        cartId: 2,
        productId: 12,
        quantity: 1
      },
      {
        cartId: 3,
        productId: 17,
        quantity: 1
      },
    ], {});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('CartAndProducts', null, {});
  }
};
