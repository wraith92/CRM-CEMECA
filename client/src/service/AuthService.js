import axios from 'axios';
import io from 'socket.io-client';
const socket = io('http://localhost:8080');
const API_URL = 'http://localhost:8080/api/auth/';

const AuthService = {
  register: (username, email, password, roles) => {
    return axios.post(API_URL + 'signup', {
      username,
      email,
      password,
      roles
    });
  },

  login: async (username, password) => {
    try {
      const response = await axios.post(API_URL + 'signin', {
        username,
        password
      });
      console.log(response.data.accessToken, 'response.data');

      if (response.data.accessToken) {
        localStorage.setItem('user', JSON.stringify(response.data));

      }
      socket.emit('userConnected', response.data.id);

      return response.data;
    } catch (error) {
      throw error; // You might want to handle this error in the calling component.
    }
  },

  logout: () => {
    const user = JSON.parse(localStorage.getItem('user'));
    if (user) {
      socket.emit('userDisconnected', user.id); // Émettre un événement Socket.io lors de la déconnexion
    }
    localStorage.removeItem('user');
  },

  getCurrentUser: () => {
    return JSON.parse(localStorage.getItem('user'));
  }
};

export default AuthService;
