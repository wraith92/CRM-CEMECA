import {
    USER_LOGIN_REQUEST,
    USER_LOGIN_SUCCESS,
} from "../constants/user.login";
const initialState = {
    user: [],
    loading: false,
};

export default function userLoginReducers(state = initialState, action) {
    switch (action.type) {
        case USER_LOGIN_REQUEST:
            return {
                ...state,
                loading: true,
            };
        case USER_LOGIN_SUCCESS:
            return {
                ...state,
                user: action.payload,
                loading: false,
            };

            
        default:
            return state;
    }
}
