import { 
    REGISTER_FAIL,
    REGISTER_SUCCESS,
    LOGIN_FAIL,
    LOGIN_SUCCESS,
    LOGOUT,
    } from "../constants/auth.constants";
import AuthService from "../service/AuthService";

export const register = (username, email, password, roles) => async (dispatch) => {
    try {
        const response = await AuthService.register(username, email, password, roles);
    
        dispatch({
        type: REGISTER_SUCCESS,
        payload: response.data,
        });
    
        return Promise.resolve();
    } catch (error) {
        dispatch({
        type: REGISTER_FAIL,
        payload: error.response.data,
        });
    
        return Promise.reject();
    }
    };
export const login = (username, password) => async (dispatch) => {
    try {
        const response = await AuthService.login(username, password);
    
        dispatch({
        type: LOGIN_SUCCESS,
        payload: { 
            user: response
        },
        });
    
        return Promise.resolve();
    } catch (error) {
        dispatch({
        type: LOGIN_FAIL,
        payload: error.response.data.message
              
        });
        console.log(error.response.data.message,'error')
    
        
    }
    };
export const logout = () => (dispatch) => {
    AuthService.logout();
  
    dispatch({
      type: LOGOUT,
    });
  };

