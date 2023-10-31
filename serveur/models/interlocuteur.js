'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Interlocuteur extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Interlocuteur.init({
    nom: DataTypes.STRING,
    prenom: DataTypes.STRING,
    email: DataTypes.STRING,
    adresse: DataTypes.STRING,
    code_postale: DataTypes.STRING,
    tel: DataTypes.STRING,
    fonction_inter: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Interlocuteur',
  });
  return Interlocuteur;
};