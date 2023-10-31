import {
    REGISTER_SUCCESS,
    REGISTER_FAIL,
    LOGIN_SUCCESS,
    LOGIN_FAIL,
    LOGIN_REQUEST,
    REGISTER_REQUEST,
    LOGOUT,
} from "../constants/auth.constants";
const intialState = {
    user: null,
    loading : false,
};

export default function authReducer(state = intialState, action) {
    const { type, payload } = action;

    switch (type) {
        case REGISTER_SUCCESS:
            return {
            ...state,
            user: payload.user,
            loading: false,
            };
        case REGISTER_REQUEST:
            return {
            ...state,
            loading: true,
            };
        case REGISTER_FAIL:
            return {
            ...state,
            user: null,
            loading: false,
            
            };
        case LOGIN_SUCCESS:
            return {
            ...state,
            user: payload.user,
            loading: false,
            };
        case LOGIN_REQUEST:
            return {
            ...state,
            loading: true,
            };
        case LOGIN_FAIL:
            return {
            ...state,
            error: payload,
            loading: false,
            };
        case LOGOUT:
            return {
            ...state,
            user: null,
            };
        default:
            return state;
    }
}