import {
    FETCH_USER_SUCCESS,
    FETCH_USER_FAILURE,
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

        case FETCH_USER_FAILURE:
            return {
                ...state,
                users: [], // Réinitialisez la liste des utilisateurs en cas d'échec
                loading: false,
                error: action.payload.message, // Mettez à jour avec action.payload.message
            };
        default:
            return state;
    }
}
