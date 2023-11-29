// userController.js

const e = require('cors');
const { io, connectedUsers } = require('../middleware/socket'); // Adjust the path accordingly
const db = require('../models');
const User = db.User;
const Role = db.Role;
const bcrypt = require('bcryptjs');

exports.findAll = async (req, res) => {
  try {
    const usersWithRoles = await User.findAll({
      include: Role,
    });

    const formattedUsers = usersWithRoles.map(user => {
      const formattedUser = {
        id: user.id,
        username: user.username,
        email: user.email,
        roles: user.Roles ? user.Roles.map(role => role.name) : [],
        connectedDate: null,
        disconnectedDate: null,
        isConnected: false,
      };

      if (connectedUsers && connectedUsers[user.id]) {
        if (connectedUsers[user.id].disconnectedDate) {
          formattedUser.disconnectedDate = connectedUsers[user.id].disconnectedDate;
        } else {
          formattedUser.connectedDate = connectedUsers[user.id].connectedDate;
          formattedUser.isConnected = true;

        }
      }

      return formattedUser;
    });

    res.send({ message: 'Liste des utilisateurs :)', data: formattedUsers });
    console.log(formattedUsers, 'formattedUsers');
  } catch (err) {
    res.status(500).send({
      message: err.message || "Une erreur s'est produite lors de la récupération des utilisateurs."
    });
  }
};

// Les autres routes restent inchangées...

exports.findOne = async (req, res) => {
    try {
      const { id } = req.params;
      const data = await User.findByPk(id);
      res.send(data);
    } catch (err) {
      res.status(500).send({
        message: err.message || "Une erreur s'est produite lors de la récupération de l'utilisateur."
      });
    }
  }

exports.update = async (req, res) => {
    try {
      const { id } = req.params;
  
      // Créez un objet avec les données à mettre à jour
      const updatedData = {
        username: req.body.username,
        email: req.body.email,
        password: bcrypt.hashSync(req.body.password, 8), // Cryptez le mot de passe
        // Autres champs à mettre à jour...
      };
  
      const [updated] = await User.update(updatedData, {
        where: { id: id }
      });
  
      if (updated) {
        // Récupérez l'utilisateur mis à jour avec les rôles
        const updatedUser = await User.findByPk(id, { include: Role });
  
        // Mettez à jour les rôles si nécessaire
        if (req.body.roles) {
          const roles = await Role.findAll({
            where: {
              name: {
                [Op.or]: req.body.roles
              }
            }
          });
  
          await updatedUser.setRoles(roles);
        }
  
        res.send({ message: "L'utilisateur a été mis à jour avec succès.", data: updatedUser });
      } else {
        res.status(404).send({ message: `Impossible de mettre à jour l'utilisateur avec l'ID ${id}.` });
      }
    } catch (err) {
      res.status(500).send({
        message: err.message || "Une erreur s'est produite lors de la mise à jour de l'utilisateur."
      });
    }
  };
  
  exports.delete = async (req, res) => {
    try {
      const { id } = req.params;
      const deleted = await User.destroy({
        where: { id: id }
      });

      if (deleted) {
        res.send({ message: "L'utilisateur a été supprimé avec succès." });
      } else {
        res.status(404).send({ message: `Impossible de supprimer l'utilisateur avec l'ID ${id}.` });
      }
    } catch (err) {
      res.status(500).send({
        message: err.message || "Une erreur s'est produite lors de la suppression de l'utilisateur."
      });
    }
  };
  exports.create = async (req, res) => {
    try {
      const user = await User.create(req.body);
      res.send({ message: "L'utilisateur a été créé avec succès.", data: user });
    } catch (err) {
      res.status(500).send({
        message: err.message || "Une erreur s'est produite lors de la création de l'utilisateur."
      });
    }
  }


