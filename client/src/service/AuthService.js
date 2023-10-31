import axios from 'axios';

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

      if (response.data.accessToken) {
        localStorage.setItem('user', JSON.stringify(response.data));
      }

      return response.data;
    } catch (error) {
      throw error; // You might want to handle this error in the calling component.
    }
  },

  logout: () => {
    localStorage.removeItem('user');
  },

  getCurrentUser: () => {
    return JSON.parse(localStorage.getItem('user'));
  }
};

export default AuthService;
