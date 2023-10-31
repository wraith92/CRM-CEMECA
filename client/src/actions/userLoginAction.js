import {
    USER_LOGIN_REQUEST,
    USER_LOGIN_SUCCESS,
    USER_LOGIN_FAILURE,

} from '../constants/user.login'
import UserService from '../service/UserService'


export const login = (username, password) => async (dispatch) => {
    try {
        dispatch({
            type: USER_LOGIN_REQUEST,
        })
        const response = await UserService.login(username, password)
        dispatch({
            type: USER_LOGIN_SUCCESS,
            payload: { user: response },
        })
        return Promise.resolve()
    } catch (error) {
        dispatch({
            type: USER_LOGIN_FAILURE,
            payload: error.response.data,
        })
        return Promise.reject()
    }
}