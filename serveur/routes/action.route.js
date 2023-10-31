const action = require("../controllers/action.controller.js");

module.exports = app => {
    // Create a new action
    app.post("/api/action", action.create);
    // Retrieve all actions
    app.get("/api/action", action.findAll);
    // Retrieve a single action with id
    app.get("/api/action/:id", action.findOne);
    // Update a action with id
    app.put("/api/action/:id", action.update);
    // Delete a action with id
    app.delete("/api/action/:id", action.delete);
  };