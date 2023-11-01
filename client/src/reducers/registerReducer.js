import {
    REGISTER_SUCCESS,
    REGISTER_REQUEST,
    REGISTER_FAIL,
} from "../constants/register.constant";

const initialState = {
    isLoggedIn: false,
    user: null,
    loading: false,
    error: null,
};

const registerReducer = (state = initialState, action) => {
    switch (action.type) {
        case REGISTER_REQUEST:
            return {
                ...state,
                loading: true,
            };
        case REGISTER_SUCCESS:
            return {
                ...state,
                isLoggedIn: true,
                user: action.payload,
                loading: false,
            };
        case REGISTER_FAIL:
            return {
                ...state,
                isLoggedIn: false,
                user: null,
                loading: false,
                error: action.payload,
            };
        default:
            return state;
    }
};

export default registerReducer;