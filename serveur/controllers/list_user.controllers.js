// userController.js

const { io, connectedUsers } = require('../middleware/socket'); // Adjust the path accordingly
const db = require('../models');
const User = db.User;
const Role = db.Role;

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
        disconnectedDate: null,  // Ajoutez cette propriété
        isConnected: false
      };

      console.log(connectedUsers, 'connectedUsers[user.id]');

      if (connectedUsers && connectedUsers[user.id]) {
        formattedUser.connectedDate = connectedUsers[user.id].date;
        formattedUser.disconnectedDate = connectedUsers[user.id].disconnectedDate; // Utilisez la date de déconnexion si disponible
        formattedUser.isConnected = true;
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
      const [updated] = await User.update(req.body, {
        where: { id: id }
      });

      if (updated) {
        const updatedUser = await User.findByPk(id);
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

