'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Ratings', [
      {
        userId: 1,
        productId: 5,
        rating: 2
      },
      {
        userId: 1,
        productId: 13,
        rating: 5
      },
      {
        userId: 2,
        productId: 13,
        rating: 2
      },
      {
        userId: 3,
        productId: 13,
        rating: 4
      },
      {
        userId: 2,
        productId: 8,
        rating: 5
      },
      {
        userId: 3,
        productId: 1,
        rating: 5
      },
      {
        userId: 1,
        productId: 10,
        rating: 3
      },
      {
        userId: 2,
        productId: 7,
        rating: 1
      }
    ], {});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Ratings', null, {});
  }
};
