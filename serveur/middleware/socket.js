const socketIo = require('socket.io');

function socket(server) {
  const io = socketIo(server, {
    cors: {
      origin: "http://localhost:3000",
      methods: ["GET", "POST"]
    }
  });
  const connectedUsers = {};
  io.on('connection', (socket) => {
    console.log('connexion socket io ');

    socket.on('userConnected', (userId) => {
      console.log(`L'utilisateur ${userId} s'est connecté`);
      const user = {
        userId: userId,
        date: new Date(),
        connext: true
      };
      connectedUsers[userId] = user;
      console.log(connectedUsers, 'connectedUsers');

      // Envoyer la liste mise à jour des utilisateurs connectés à tous les clients
      io.emit('updatedUserList', Object.values(connectedUsers));
    });

    socket.on('userDisconnected', (userId) => {
      console.log(`L'utilisateur ${userId} s'est déconnecté`);
      delete connectedUsers[userId];

      // Envoyer la liste mise à jour des utilisateurs connectés à tous les clients
      io.emit('updatedUserList', Object.values(connectedUsers));
    });
  });

  return io;
}

module.exports = socket;
