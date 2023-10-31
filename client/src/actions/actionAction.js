import {
    FETCH_ACTIONS_FAILURE,
    FETCH_ACTIONS_REQUEST,
    FETCH_ACTIONS_SUCCESS,
} from "../constants/action.constant";

import ActionService from "../service/ActionService";

export function fetchActions() {
    return async (dispatch) => {
        dispatch({ type: FETCH_ACTIONS_REQUEST });
        try {
            const { data } = await ActionService.getAllActions();
            dispatch({ type: FETCH_ACTIONS_SUCCESS, payload: {
                message: "Liste des actions :)",
                data: data,
            } });
        } catch (error) {
            dispatch({ type: FETCH_ACTIONS_FAILURE, payload: {
                message: "Une erreur s'est produite lors de la récupération des actions.",
            } });
        }
    };
}

export function fetchActionById(id) {
    return async (dispatch) => {
        dispatch({ type: FETCH_ACTIONS_REQUEST });
        try {
            const { data } = await ActionService.getById(id);
            dispatch({ type: FETCH_ACTIONS_SUCCESS, payload: 
            {
                message: "Action trouvée :)",
                data: data,
            } 
        });
        } catch (error) {
            dispatch({ type: FETCH_ACTIONS_FAILURE, payload: {
                message: "Une erreur s'est produite lors de la récupération de l'action.",
            } });
        }
    };
}

