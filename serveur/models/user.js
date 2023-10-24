'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    static associate(models) {
      // Ajoutez l'association ici
      User.belongsToMany(models.Role, {
        through: "user_roles",
        foreignKey: "userId",
        otherKey: "roleId"
      });
        // Association avec le modèle Societe
      User.hasMany(models.Societe, {
        foreignKey: 'id_utili',
        sourceKey: 'id'
      });
    }
  }
  User.init({
    username: DataTypes.STRING,
    email: DataTypes.STRING,
    password: DataTypes.STRING,
    passwordLastChanged: DataTypes.DATE,
    resetToken: DataTypes.STRING,
    resetTokenExpires: DataTypes.DATE,
    twoFactorAuthSecret: DataTypes.JSON,
    loginAttempts: DataTypes.INTEGER,
    blockedUntil: DataTypes.DATE
  }, {
    sequelize,
    modelName: 'User',
  });
  return User;
};
