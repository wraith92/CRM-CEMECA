const interlocuteur = require('../controllers/interlocuteur.controleur');

module.exports = function(app) {
    // Create a new interlocuteur
    app.post('/api/interlocuteur', interlocuteur.create);
    
    // Retrieve all interlocuteurs
    app.get('/api/interlocuteur', interlocuteur.findAll);
    
    // Retrieve a single interlocuteur with id
    app.get('/api/interlocuteur/:id', interlocuteur.findOne);
    
    // Update a interlocuteur with id
    app.put('/api/interlocuteur/:id', interlocuteur.update);
    
    // Delete a interlocuteur with id
    app.delete('/api/interlocuteur/:id', interlocuteur.delete);
    }