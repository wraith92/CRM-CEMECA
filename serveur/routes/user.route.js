// user.route.js

const express = require('express');
const router = express.Router();
const ListeUser = require("../controllers/list_user.controllers.js");
const userBoard = require("../controllers/user.controllers.js");
const { authJwt } = require("../middleware");

module.exports = (io, connectedUsers) => {
  router.get("/api/user/all", (req, res) => ListeUser.findAll(req, res, io, connectedUsers));
  router.get("/api/user/:id", (req, res) => ListeUser.findOne(req, res, io, connectedUsers));
  router.put("/api/user/:id", (req, res) => ListeUser.update(req, res, io, connectedUsers));
  router.delete("/api/user/:id", (req, res) => ListeUser.delete(req, res, io, connectedUsers));

  // Uncomment the following routes if needed
  /*
  router.get("/api/user/cemeca", authJwt.verifyToken, (req, res) => userBoard.userBoard(req, res, io, connectedUsers));
  router.get("/api/user/admin", authJwt.verifyToken, (req, res) => userBoard.adminBoard(req, res, io, connectedUsers));
  router.get("/api/user/super-admin", authJwt.verifyToken, (req, res) => userBoard.superAdminBoard(req, res, io, connectedUsers));
  */

  return router;
};
