'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
     return queryInterface.addColumn(
      'user_games',
      'role',
     Sequelize.STRING
    );
  },

  down: async (queryInterface, Sequelize) => {
     return queryInterface.removeColumn(
      'user_games',
      'role'
    );
  }
};
