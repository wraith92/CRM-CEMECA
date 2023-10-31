import { 
    FETCH_INTERLOCUTEURS_FAILURE,
    FETCH_INTERLOCUTEURS_SUCCESS,

 } from "../constants/interlocuteur.constant";


const initialState = {
    interlocuteurs: [],
    error: null,
    loading: false,
    };

export default function interlocuteurReducer(state = initialState, action) {
    switch (action.type) {
        case FETCH_INTERLOCUTEURS_SUCCESS:
            return {
                ...state,
                interlocuteurs: action.payload.data,
                error: null,
                loading: false,

            };
        case FETCH_INTERLOCUTEURS_FAILURE:
            return {
                ...state,
                interlocuteurs: [],
                error: action.payload.message,
                loading: false,
            };
        default:
            return state;
    }
}