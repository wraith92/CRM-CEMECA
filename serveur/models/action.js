'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Action extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Action.init({
    date_action: DataTypes.DATE,
    description: DataTypes.STRING,
    nom_interlocuteur: DataTypes.STRING,
    type_action: DataTypes.STRING,
    nom_societe: DataTypes.STRING,
    date_rdv: DataTypes.DATE,
    validation: DataTypes.STRING,
    besoin: DataTypes.STRING,
    investissement: DataTypes.STRING,
    montant: DataTypes.STRING,
    date_factor: DataTypes.STRING,
    date_assur: DataTypes.STRING,
    nom_assur: DataTypes.STRING,
    nom_factor: DataTypes.STRING,
    credit_cop: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Action',
  });
  return Action;
};