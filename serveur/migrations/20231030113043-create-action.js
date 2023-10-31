'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Actions', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      date_action: {
        type: Sequelize.DATE
      },
      description: {
        type: Sequelize.STRING
      },
      nom_interlocuteur: {
        type: Sequelize.STRING
      },
      type_action: {
        type: Sequelize.STRING
      },
      nom_societe: {
        type: Sequelize.STRING
      },
      date_rdv: {
        type: Sequelize.DATE
      },
      validation: {
        type: Sequelize.STRING
      },
      besoin: {
        type: Sequelize.STRING
      },
      investissement: {
        type: Sequelize.STRING
      },
      montant: {
        type: Sequelize.STRING
      },
      date_factor: {
        type: Sequelize.STRING
      },
      date_assur: {
        type: Sequelize.STRING
      },
      nom_assur: {
        type: Sequelize.STRING
      },
      nom_factor: {
        type: Sequelize.STRING
      },
      credit_cop: {
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
    await queryInterface.dropTable('Actions');
  }
};