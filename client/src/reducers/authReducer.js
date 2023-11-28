import {
    REGISTER_SUCCESS,
    REGISTER_FAIL,
    LOGIN_SUCCESS,
    LOGIN_FAIL,
    LOGIN_REQUEST,
    REGISTER_REQUEST,
    LOGOUT,
} from "../constants/auth.constants";

const initialState = {
    userInfo: localStorage.getItem('user')
        ? JSON.parse(localStorage.getItem('user'))
        : null,
    loading: false,
};

export default function authReducer(state = initialState, action) {
    switch (action.type) {
        case REGISTER_REQUEST:
            return {
                ...state,
                loading: true,
            };
        case REGISTER_SUCCESS:
            return {
                ...state,
                userInfo: action.payload,
                loading: false,
            };
        case REGISTER_FAIL:
            return {
                ...state,
                loading: false,
            };
        case LOGIN_REQUEST:
            return {
                ...state,
                loading: true,
            };
        case LOGIN_SUCCESS:
            return {
                ...state,
                userInfo: action.payload,
                loading: false,
            };
        case LOGIN_FAIL:
            return {
                ...state,
                loading: false,
            };
        case LOGOUT:
            return {
                ...state,
                userInfo: null,
            };
        default:
            return state;
    }
}
