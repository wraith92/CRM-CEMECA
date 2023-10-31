import axios from 'axios';

const API_URL = 'http://localhost:8080/api/user/';

const UserService = {
  getAllUsers: () => {
    return axios.get(API_URL + 'all');
  },

  getUserById: (id) => {
    return axios.get(API_URL + `get/${id}`);
  },

  updateUser: (id, userData) => {
    return axios.put(API_URL + `update/${id}`, userData);
  },

  deleteUser: (id) => {
    return axios.delete(API_URL + `delete/${id}`);
  }
};

export default UserService;
