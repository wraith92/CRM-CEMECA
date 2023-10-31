import {
    FETCH_INTERLOCUTEURS_FAILURE,
    FETCH_INTERLOCUTEURS_REQUEST,
    FETCH_INTERLOCUTEURS_SUCCESS,
} from "../constants/interlocuteur.constant";

import InterlocuteurService from "../service/InterlocuteurService";

export const fetchInterlocuteus = (data) => {
    return {
        type: FETCH_INTERLOCUTEURS_SUCCESS,
        payload: {
            message: "Liste des interlocuteurs :)",
            data: data,
        },
    };
}

export const fetchInterlocuteursFailure = (message) => {
    return {
        type: FETCH_INTERLOCUTEURS_FAILURE,
        payload: {
            message: message,
        },
    };
}

export const listInterlocuteur = () => {
    return (dispatch) => {
        InterlocuteurService.getAllInterlocuteurs()
            .then(response => {
                dispatch(fetchInterlocuteus(response.data));
            })
            .catch(error => {
                dispatch(fetchInterlocuteursFailure("Une erreur s'est produite lors de la récupération des interlocuteurs."));
            });
    };
};