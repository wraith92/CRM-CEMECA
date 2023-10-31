import axios from 'axios';

const API_URL = 'http://localhost:8080/api/interlocuteur/';

const InterlocuteurService = {
    getAllInterlocuteurs: () => {
        return axios.get(API_URL);
    },
    
    getInterlocuteurById: (id) => {
        return axios.get(API_URL + `/${id}`);
    },
    
    updateInterlocuteur: (id, interlocuteurData) => {
        return axios.put(API_URL + `/${id}`, interlocuteurData);
    },
    
    deleteInterlocuteur: (id) => {
        return axios.delete(API_URL + `/${id}`);
    }
    };
    export default InterlocuteurService;