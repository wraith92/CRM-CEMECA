'use strict';
const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Role extends Model {
    static associate(models) {
      // Ajoutez l'association ici
      Role.belongsToMany(models.User, {
        through: "user_roles",
        foreignKey: "roleId",
        otherKey: "userId"
      });
    }
  }

  Role.init(
    {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      name: DataTypes.STRING
    },
    {
      sequelize,
      modelName: 'Role',
    }
  );

  return Role;
};
