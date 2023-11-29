import {
    FETCH_USER_SUCCESS,
    FETCH_USER_FAILURE,
    FETCH_USER_REQUEST,
    UPDATE_USER_FAILURE,
    UPDATE_USER_REQUEST,
    UPDATE_USER_SUCCESS,
    DELETE_USER_FAILURE,
    DELETE_USER_REQUEST,
    DELETE_USER_SUCCESS,
    ADD_USER_FAILURE,
    ADD_USER_REQUEST,
    ADD_USER_SUCCESS
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

export const fetchUsersRequest = () => {
    return {
        type: FETCH_USER_REQUEST
    };
};

export const fetchUsers = () => {

    return (dispatch) => {
        dispatch(fetchUsersRequest());
        UserService.getAllUsers()
            .then(response => {
                const users = response.data;
                dispatch(fetchUsersSuccess(users));
            })
            .catch(error => {
                const message = error.message;
                dispatch(fetchUsersFailure(message));
            });
    };
};

//update user
export const updateUserSuccess = (data) => {
    return {
        type: UPDATE_USER_SUCCESS,
        payload: {
            message: "Utilisateur modifié avec succès :)",
            data: data
        }
    };
};

export const updateUserFailure = (message) => {
    return {
        type: UPDATE_USER_FAILURE,
        payload: {
            message: message
        }
    };
};

export const updateUserRequest = () => {
    return {
        type: UPDATE_USER_REQUEST
    };
};

export const updateUser = (id, username, email, password, roles) => {
    return (dispatch) => {
      dispatch(updateUserRequest());
      const userData = { id, username, email, password, roles }; // Créez un objet avec les données à envoyer
      UserService.updateUser(id, userData) // Envoyez l'objet userData au lieu des paramètres individuels
        .then(response => {
          const user = response.data;
          dispatch(updateUserSuccess(user));
        })
        .catch(error => {
          const message = error.message;
          dispatch(updateUserFailure(message));
        });
    };
  };
  


//delete user

export const deleteUserSuccess = (data) => {
    return {
        type: DELETE_USER_SUCCESS,
        payload: {
            message: "Utilisateur supprimé avec succès :)",
            data: data
        }
    };
}

export const deleteUserFailure = (message) => {
    return {
        type: DELETE_USER_FAILURE,
        payload: {
            message: message
        }
    };
}

export const deleteUserRequest = () => {
    return {
        type: DELETE_USER_REQUEST
    };
}

export const deleteUser = (id) => {

    return (dispatch) => {
        dispatch(deleteUserRequest());
        UserService.deleteUser(id)
            .then(response => {
                const user = response.data;
                dispatch(deleteUserSuccess(user));
            })
            .catch(error => {
                const message = error.message;
                dispatch(deleteUserFailure(message));
            });
    };
};

//add user
export const addUserSuccess = (data) => {
    return {
        type: ADD_USER_SUCCESS,
        payload: {
            message: "Utilisateur ajouté avec succès :)",
            data: data
        }
    };
}

export const addUserFailure = (message) => {
    return {
        type: ADD_USER_FAILURE,
        payload: {
            message: message
        }
    };
}

export const addUserRequest = () => {
    return {
        type: ADD_USER_REQUEST
    };
}

export const addUser = (username, email, password, roles) => {

    return (dispatch) => {
        dispatch(addUserRequest());
        UserService.create(username, email, password, roles)
            .then(response => {
                const user = response.data;
                dispatch(addUserSuccess(user));
            })
            .catch(error => {
                const message = error.message;
                dispatch(addUserFailure(message));
            });
    };
};



