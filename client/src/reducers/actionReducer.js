import {
    FETCH_ACTIONS_FAILURE,
    FETCH_ACTIONS_REQUEST,
    FETCH_ACTIONS_SUCCESS,
} from "../constants/action.constant";

const initialState = {
    actions: [],
    loading: false,
    error: null,
};

export default function actionReducer(state = initialState, action) {
    switch (action.type) {
        case FETCH_ACTIONS_SUCCESS:
            return {
                ...state,
                actions: action.payload.data,
                loading: false,
                error: null,
            };
        case FETCH_ACTIONS_FAILURE:
            return {
                ...state,
                error: action.payload.message,
                loading: false,
                actions: [],
            };
        default:
            return state;
    }
}