const db = require("../models");
const config = require("../config/auth.config");
const User = db.User;
const Role = db.Role;
var bcrypt = require("bcryptjs");
var jwt = require("jsonwebtoken");
const Op = db.Sequelize.Op;
const io = require('socket.io-client');
const socket = io('http://localhost:8080');
require('dotenv').config();
exports.signup = (req, res) => {


  User.create({
    username: req.body.username,
    email: req.body.email,
    password: bcrypt.hashSync(req.body.password, 8),

  })
    .then(user => {
      if (!req.body.roles) {
        Role.findAll({
          where: {
            name: {
              [Op.or]: req.body.roles
            }
          }
        }).then(roles => {

          user.setRoles(roles).then(() => {
            res.send({ message: " user was registered successfully!" });
          });
        });
      } else {
        // user role = checkbox
        const roles = req.body.roles;
        if (roles)
          var new_roles = [];
        for (let i = 0; i < roles.length; i++) {
          new_roles.push(roles[i]);
        }
        console.log(new_roles, 'nouveau tableau')
        user.setRoles(new_roles).then(() => {
          res.send({ message: "profile was registered successfully!" });
        });

      }
    })
    .catch(err => {
      res.status(500).send({ message: err.message });
    });
};
exports.signin = async (req, res) => {
    try {
        const user = await User.findOne({
            where: {
                username: req.body.username
            }
            });
        if (!user) {
            return res.status(404).send({ message: "Utilisateur non trouvé." });
        }
        var passwordIsValid = bcrypt.compareSync(
            req.body.password,
            user.password
        );
        if (!passwordIsValid) {
            return res.status(401).send({
            accessToken: null,
            message: "Mot de passe invalide!"
            });
        }
        var token = jwt.sign({ id: user.id }, config.secret, {
            expiresIn: 86400 // 24 hours
        });
        var authorities = [];
        user.getRoles().then(roles => {
            for (let i = 0; i < roles.length; i++) {
            authorities.push("ROLE_" + roles[i].name.toUpperCase());
            }
            res.status(200).send({
            id: user.id,
            username: user.username,
            email: user.email,
            roles: authorities,
            accessToken: token
            });
             // Émettre un événement Socket.io lorsque l'utilisateur se connecte
             socket.emit('userConnected', user.id);
        });

    }catch (err) {
        res.status(500).send({ message: err.message });
    }
}