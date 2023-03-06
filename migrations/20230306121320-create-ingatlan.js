'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Ingatlans', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      kategoria: {
        type: Sequelize.INTEGER
      },
      leiras: {
        type: Sequelize.STRING
      },
      hirdetesDatuma: {
        type: Sequelize.DATE
      },
      tehermentes: {
        type: Sequelize.BOOLEAN
      },
      ar: {
        type: Sequelize.INTEGER
      },
      kepUrl: {
        type: Sequelize.STRING
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('Ingatlans');
  }
};