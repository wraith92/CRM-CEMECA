// socket.js

const socketIo = require('socket.io');

const connectedUsers = {};
const io = socketIo(server, {
  cors: {
    origin: "http://localhost:3000",
    methods: ["GET", "POST"]
  }
});

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
    console.log(connectedUsers, 'connectedUsers test');

    io.emit('updatedUserList', Object.values(connectedUsers));
  });

  socket.on('userDisconnected', (userId) => {
    console.log(`L'utilisateur ${userId} s'est déconnecté`);
    delete connectedUsers[userId];

    io.emit('updatedUserList', Object.values(connectedUsers));
  });
});

module.exports = { io, connectedUsers };
