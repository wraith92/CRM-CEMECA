const controller = require("../controllers/auth.controllers");
const { verifySignUp } = require("../middleware");
module.exports = function(app) {
   
    app.post("/api/auth/signup",
    [
        verifySignUp.checkDuplicateUsernameOrEmail,
        verifySignUp.checkRolesExisted
    ],
    controller.signup);
    app.post("/api/auth/signin", controller.signin);
}
            

