import {
    REGISTER_SUCCESS,
    REGISTER_REQUEST,
    REGISTER_FAIL,
} from "../constants/register.constant";

import AuthService from "../service/AuthService";

export function register(username, email, password, roles) {
    return async (dispatch) => {
        dispatch({ type: REGISTER_REQUEST });
        try {
            const { data } = await AuthService.register(username, email, password, roles);
            dispatch({ type: REGISTER_SUCCESS, payload: {
                message: "Utilisateur créé avec succès :)",
                data: data,
            } });
        } catch (error) {
            dispatch({ type: REGISTER_FAIL, payload: {
                message: "Une erreur s'est produite lors de la création de l'utilisateur.",
            } });
        }
    };
}
