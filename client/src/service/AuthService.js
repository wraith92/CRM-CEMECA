import io from 'socket.io-client';
import axios from 'axios';

const API_URL = 'http://localhost:8080/api/auth/';

const createSocketConnection = () => {
  return new Promise((resolve, reject) => {
    const socket = io('http://localhost:8080');
    socket.on('connect', () => {
      resolve(socket);
    });
    socket.on('connect_error', (error) => {
      reject(error);
    });
  });
};

const AuthService = {
  register: (username, email, password, roles) => {
    return axios.post(API_URL + 'signup', {
      username,
      email,
      password,
      roles,
    });
  },

  login: async (username, password) => {
    try {
      const socket = await createSocketConnection();
      const response = await axios.post(API_URL + 'signin', {
        username,
        password,
      });

      if (response.data.accessToken) {
        localStorage.setItem('user', JSON.stringify(response.data));
      }

      // Wait for the socket connection before emitting the event
      socket.emit('userConnected', response.data.id);

      return response.data;
    } catch (error) {
      throw error; // You might want to handle this error in the calling component.
    }
  },

  logout: async () => {
    try {
      const user = JSON.parse(localStorage.getItem('user'));
      if (user) {
        const socket = await createSocketConnection();

        // Capture the disconnection date
        const disconnectedDate = new Date().toISOString();

        // Emit the disconnection event with the user id and disconnection date
        socket.emit('userDisconnected', { userId: user.id, disconnectedDate });
      }
      
      // Remove the user information from local storage
      localStorage.removeItem('user');
    } catch (error) {
      console.error('Error during logout:', error);
    }
  },
  
  getCurrentUser: () => {
    return JSON.parse(localStorage.getItem('user'));
  },
};

export default AuthService;
