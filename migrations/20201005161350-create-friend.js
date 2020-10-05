'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('Friends', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      userId1: {
        type: Sequelize.INTEGER
      },
      userId2: {
        type: Sequelize.INTEGER
      },
      relationship: {
        type: Sequelize.INTEGER,
      },
      createdAt: {
        defaultValue: new Date(),
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        defaultValue: new Date(),
        allowNull: false,
        type: Sequelize.DATE
      }
    },
    {
      uniqueKeys: {
          actions_unique: {
              fields: ['userId1', 'userId2']
          }
      }
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('Friends');
  }
};