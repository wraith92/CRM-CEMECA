const authJwt = require("./authJwt");
const verifySignUp = require("./verifySignUp");
const  socket  = require('./socket'); // Ajoutez cette ligne

module.exports = {
  authJwt,
  verifySignUp,
  socket // Ajoutez cette ligne
};
