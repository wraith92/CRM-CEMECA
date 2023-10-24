const ListeUser = require("../controllers/list_user.controllers.js");
const userBoard = require("../controllers/user.controllers.js");
const { authJwt } = require("../middleware");
module.exports = app => {
    app.get("/api/user/all", ListeUser.findAll);
    app.get("/api/user/:id", ListeUser.findOne);
    //userBoard
    /*app.get("/api/user/cemeca",authJwt.verifyToken, userBoard.userBoard);
    app.get("/api/user/admin",authJwt.verifyToken, userBoard.adminBoard);
    app.get("/api/user/super-admin",authJwt.verifyToken, userBoard.superAdminBoard);
    */
}

