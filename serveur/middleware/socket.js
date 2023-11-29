// socket.js

const socketIo = require('socket.io');

const connectedUsers = {};
let io;

function timeDifference(previousDate) {
  const current = new Date();
  const previous = new Date(previousDate);
  const elapsed = current - previous;

  const seconds = Math.floor(elapsed / 1000);
  const minutes = Math.floor(seconds / 60);
  const hours = Math.floor(minutes / 60);
  const days = Math.floor(hours / 24);

  if (days > 0) {
    return days === 1 ? `${days} day ago` : `${days} days ago`;
  } else if (hours > 0) {
    return hours === 1 ? `${hours} hour ago` : `${hours} hours ago`;
  } else if (minutes > 0) {
    return minutes === 1 ? `${minutes} minute ago` : `${minutes} minutes ago`;
  } else {
    return 'Just now';
  }
}

function initSocket(server) {
  io = socketIo(server, {
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
        connectedDate: new Date(),
        disconnectedDate: null,
      };

      if (connectedUsers[userId] && connectedUsers[userId].disconnectedDate) {
        // L'utilisateur s'est reconnecté, réinitialisez la date de déconnexion
        console.log(`L'utilisateur ${userId} s'est reconnecté`);
        console.log('connectedUsers[userId].disconnectedDate', connectedUsers[userId].disconnectedDate);
        connectedUsers[userId].disconnectedDate = null;
        
      }

      connectedUsers[userId] = user;
      io.emit('updatedUserList', Object.values(connectedUsers));
    });

    socket.on('userDisconnected', ({ userId, disconnectedDate }) => {
  
      if (connectedUsers[userId]) {
        connectedUsers[userId].disconnectedDate = timeDifference(disconnectedDate);
        connectedUsers[userId].connected = false;
        io.emit('updatedUserList', Object.values(connectedUsers));
       
      }
    });
  });

  return io;
}

module.exports = { initSocket, connectedUsers, timeDifference };
