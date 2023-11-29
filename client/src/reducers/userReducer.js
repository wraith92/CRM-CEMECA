import {
    FETCH_USER_SUCCESS,
    FETCH_USER_FAILURE,
    FETCH_USER_REQUEST,
    UPDATE_USER_SUCCESS,
    UPDATE_USER_FAILURE,
    UPDATE_USER_REQUEST,
    DELETE_USER_SUCCESS,
    DELETE_USER_FAILURE,
    DELETE_USER_REQUEST,
    ADD_USER_SUCCESS,
    ADD_USER_FAILURE,
    ADD_USER_REQUEST
    
} from "../constants/user.constants";

const initialState = {
    users: [], // Initialisé avec une liste vide
    loading: false,
    error: null,
};

export default function userReducer(state = initialState, action) {
    switch (action.type) {
        case FETCH_USER_SUCCESS: // Vérifiez si les données sont correctes
    return {
        ...state,
        users: action.payload.data.data,
        loading: false,
        error: null,
    };
        case FETCH_USER_REQUEST: // Vérifiez si les données sont correctes
            return {
                ...state,
                loading: true,
                error: null,
            };

        case FETCH_USER_FAILURE:
            return {
                ...state,
                users: [], // Réinitialisez la liste des utilisateurs en cas d'échec
                loading: false,
                error: action.payload.message, // Mettez à jour avec action.payload.message
            };

        case UPDATE_USER_SUCCESS:
            return {
                ...state,
                loading: false,
                error: null,
            };
        case UPDATE_USER_REQUEST:
            return {
                ...state,
                loading: true,
                error: null,
            };
        case UPDATE_USER_FAILURE:
            return {
                ...state,
                loading: false,
                error: action.payload.message,
            };

        case DELETE_USER_SUCCESS:
            return {
                ...state,
                loading: false,
                error: null,
            };
        case DELETE_USER_REQUEST:
            return {
                ...state,
                loading: true,
                error: null,
            };
        case DELETE_USER_FAILURE:
            return {
                ...state,
                loading: false,
                error: action.payload.message,
            };

        case ADD_USER_SUCCESS:
            return {
                ...state,
                loading: false,
                error: null,
            };
        case ADD_USER_REQUEST:
            return {
                ...state,
                loading: true,
                error: null,
            };
        case ADD_USER_FAILURE:
            return {
                ...state,
                loading: false,
                error: action.payload.message,
            };
        default:
            return state;
    }
}


