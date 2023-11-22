const db = require("../models");
const User = db.User;
const ROLES = db.Role;

checkDuplicateUsernameOrEmail = (req, res, next) => {
    // Username
    User.findOne({
        where: {
        username: req.body.username
        }
    })
    .then(user => {
        if (user) {
        res.status(400).send({
            message: "Échec! Le nom d'utilisateur est déjà utilisé!"
        });
        return;
        }
    
        // Email
        User.findOne({
        where: {
            email: req.body.email
        }
        })
        .then(user => {
        if (user) {
            res.status(400).send({
            message: "Échec! L'adresse email est déjà utilisée!"
            });
            return;
        }
    
        next();
        });
    });
    };
    checkRolesExisted = (req, res, next) => {
    if (req.body.role) {
        for (let i = 0; i < req.body.role.length; i++) {
        if (!ROLES.includes(req.body.role[i])) {
            res.status(400).send({
            message: "Échec! Le rôle n'existe pas = " + req.body.role[i]
            });
            return;
        }
        }
    }
    next();
    }
    const verifySignUp = {
    checkDuplicateUsernameOrEmail: checkDuplicateUsernameOrEmail,
    checkRolesExisted: checkRolesExisted
    };
    module.exports = verifySignUp;