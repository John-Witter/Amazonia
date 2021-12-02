'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Carts', [
      {
        userId: 2
      },
      {
        userId: 1
      },
      {
        userId: 3
      },
    ], {});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Carts', null, {});
  }
};
