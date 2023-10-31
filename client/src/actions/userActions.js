import {
    FETCH_USER_SUCCESS,
    FETCH_USER_FAILURE,
} from "../constants/user.constants";
import UserService from '../service/UserService';

export const fetchUsersSuccess = (data) => {
    return {
        type: FETCH_USER_SUCCESS,
        payload: {
            message: "Liste des utilisateurs :)",
            data: data
        }
    };
};

export const fetchUsersFailure = (message) => {
    return {
        type: FETCH_USER_FAILURE,
        payload: {
            message: message
        }
    };
};

export const fetchUsers = () => {
    return (dispatch) => {
        UserService.getAllUsers() // Utilisation de UserService pour récupérer les utilisateurs
            .then(response => {
                dispatch(fetchUsersSuccess(response.data));
            })
            .catch(error => {
                dispatch(fetchUsersFailure("Une erreur s'est produite lors de la récupération des utilisateurs."));
            });
    };
};
