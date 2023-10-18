const societe = require("../controllers/societe.controllers.js");
module.exports = app => {
    // Create a new societe
    app.post("/api/societe", societe.create_societe);
    // Retrieve all societes
    app.get("/societe", societe.findAll);
    // Retrieve a single societe with id
    app.get("/societe/:id", societe.findOne);
    // Update a societe with id
    app.put("/societe/:id", societe.update);
    // Delete a societe with id
    app.delete("/societe/:id", societe.delete);
  };