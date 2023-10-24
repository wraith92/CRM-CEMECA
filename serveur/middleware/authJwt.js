const jwt = require("jsonwebtoken");
const config = require("../config/auth.config.js");
const db = require("../models");
const User = db.User;
const Role = db.Role;

verifyToken = (req, res, next) => {
    let token = req.headers["x-access-token"];
    if (!token) {
        return res.status(403).send({
        message: "Aucun token fourni!"
        });
    }
    jwt.verify(token, config.secret, (err, decoded) => {
        if (err) {
        return res.status(401).send({
            message: "Non autorisé!"
        });
        }
        req.userId = decoded.id;
        next();
    });
    }
    isAdmin = (req, res, next) => {
    User.findByPk(req.userId).then(user => {
        user.getRoles().then(roles => {
        for (let i = 0; i < roles.length; i++) {
            if (roles[i].name === "admin") {
            next();
            return;
            }
        }
        res.status(403).send({
            message: "Vous n'êtes pas administrateur!"
        });
        return;
        });
    });
    }
    isCemeca = (req, res, next) => {
    User.findByPk(req.userId).then(user => {
        user.getRoles().then(roles => {
        for (let i = 0; i < roles.length; i++) {
            if (roles[i].name === "cemeca") {
            next();
            return;
            }
        }
        res.status(403).send({
            message: "Vous n'êtes pas cemeca!"
        });
        return;
        });
    });
    }
    isSuperAdmin = (req, res, next) => {
    User.findByPk(req.userId).then(user => {
        user.getRoles().then(roles => {
        for (let i = 0; i < roles.length; i++) {
            if (roles[i].name === "super-admin") {
            next();
            return;
            }
        }
        res.status(403).send({
            message: "Vous n'êtes pas super-admin!"
        });
        return;
        });
    });
    }
    const authJwt = {
    verifyToken,
    isAdmin,
    isCemeca,
    isSuperAdmin
    };
    module.exports = authJwt;