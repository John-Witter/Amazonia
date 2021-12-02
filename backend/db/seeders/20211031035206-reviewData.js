'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Reviews', [
      {
        userId: 1,
        productId: 5,
        review: 'This product was fantastic'
      },
      {
        userId: 1,
        productId: 13,
        review: 'This product is fantastic! High definition and a lot of screen mobility!'
      },
      {
        userId: 2,
        productId: 13,
        review: 'Personally, I did not think the product was that great.'
      },
      {
        userId: 3,
        productId: 13,
        review: 'Good first buy 👍!'
      },
      {
        userId: 1,
        productId: 3,
        review: 'Good product, and good price!'
      },

      {
        userId: 2,
        productId: 8,
        review: 'Nice'
      },
      {
        userId: 3,
        productId: 1,
        review: 'This product was ok'
      },
      {
        userId: 1,
        productId: 10,
        review: 'At first, this product was really nice! But now its not too goo!'
      },
      {
        userId: 2,
        productId: 7,
        review: 'This product was not to great to be honest'
      }
    ], {});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Reviews', null, {});
  }
};
