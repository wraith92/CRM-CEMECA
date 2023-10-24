'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Societe extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Societe.init({
    siret: DataTypes.BIGINT,
    siren: DataTypes.BIGINT,
    nom_soc: DataTypes.STRING,
    nom_responsable_soc: DataTypes.STRING,
    date_creation_soc: DataTypes.DATE,
    activite_soc: DataTypes.STRING,
    libelle_naf: DataTypes.STRING,
    adresse_local: DataTypes.STRING,
    pays: DataTypes.STRING,
    ville_soc: DataTypes.STRING,
    code_postal: DataTypes.INTEGER,
    syndicat: DataTypes.STRING,
    observation: DataTypes.STRING,
    tel: DataTypes.STRING,
    app_sofitech: DataTypes.BOOLEAN,
    app_cemeca: DataTypes.BOOLEAN,
    soc_sofitech: DataTypes.BOOLEAN,
    soc_cemeca: DataTypes.BOOLEAN,
    origineprospect: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Societe',
  });
  return Societe;
};