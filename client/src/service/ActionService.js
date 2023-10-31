import axios from 'axios';

const API_URL = 'http://localhost:8080/api/action';

const ActionService = {
    getAllActions: () => {
        return axios.get(API_URL);
    },
    
    getActionById: (id) => {
        return axios.get(API_URL + `/${id}`);
    },
    
    updateAction: (id, actionData) => {
        return axios.put(API_URL + `/${id}`, actionData);
    },
    
    deleteAction: (id) => {
        return axios.delete(API_URL + `/${id}`);
    }
    };

export default ActionService;