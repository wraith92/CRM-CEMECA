// src/store/configureStore.js
import { composeWithDevTools } from 'redux-devtools-extension';
import { createStore, applyMiddleware, combineReducers } from 'redux';
import thunk from 'redux-thunk';

// Import each reducer individually
import societeReducer from '../reducers/societeReducer';
import userReducer from '../reducers/userReducer';
import authReducer from '../reducers/authReducer';
import userLoginReducers from '../reducers/userLoginReducers';
import actionReducer from '../reducers/actionReducer';
import interlocuteurReducer from '../reducers/interlocuteurReduceur';
import registerReducer from '../reducers/registerReducer';

// Combine the reducers
const rootReducer = combineReducers({
  register: registerReducer,
  actions: actionReducer,
  interlocuteurs: interlocuteurReducer,
  societes: societeReducer,
  users: userReducer,
  auth: authReducer,
  userLogin: userLoginReducers,
  // Add other reducers here if necessary
});

// Check if localStorage is empty
const userinfoFromStorage = localStorage.getItem('user')
  ? JSON.parse(localStorage.getItem('user'))
  : null;

// Set initialState based on localStorage
const initialState = {
  auth: { userInfo: userinfoFromStorage },
};


const middleware = [thunk];

// Create the Redux store
const store = createStore(
  rootReducer,
  initialState,
  composeWithDevTools(applyMiddleware(...middleware))
);

export default store;
