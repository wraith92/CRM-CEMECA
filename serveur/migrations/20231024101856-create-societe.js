'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Societes', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      siret: {
        type: Sequelize.BIGINT
      },
      siren: {
        type: Sequelize.BIGINT
      },
      nom_soc: {
        type: Sequelize.STRING
      },
      nom_responsable_soc: {
        type: Sequelize.STRING
      },
      date_creation_soc: {
        type: Sequelize.DATE
      },
      activite_soc: {
        type: Sequelize.STRING
      },
      libelle_naf: {
        type: Sequelize.STRING
      },
      adresse_local: {
        type: Sequelize.STRING
      },
      pays: {
        type: Sequelize.STRING
      },
      ville_soc: {
        type: Sequelize.STRING
      },
      code_postal: {
        type: Sequelize.INTEGER
      },
      syndicat: {
        type: Sequelize.STRING
      },
      observation: {
        type: Sequelize.STRING
      },
      tel: {
        type: Sequelize.STRING
      },
      app_sofitech: {
        type: Sequelize.BOOLEAN
      },
      app_cemeca: {
        type: Sequelize.BOOLEAN
      },
      soc_sofitech: {
        type: Sequelize.BOOLEAN
      },
      soc_cemeca: {
        type: Sequelize.BOOLEAN
      },
      origineprospect: {
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
    await queryInterface.dropTable('Societes');
  }
};