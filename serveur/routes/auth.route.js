const signup = require("../constrollers/auth.controllers.js");
module.exports = app => {
    // Create a new societe
    app.post("/api/auth/signup", signup.signup);
    // Retrieve all societes
    // app.get("/api/auth/signin", signup.signin);
    // Retrieve a single societe with id
    // app.get("/societe/:id", societe.findOne);
    // Update a societe with id
    // app.put("/societe/:id", societe.update);
    // Delete a societe with id
    // app.delete("/societe/:id", societe.delete);
  };