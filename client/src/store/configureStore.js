// src/store/configureStore.js
import {composeWithDevTools} from 'redux-devtools-extension';
import { createStore, applyMiddleware, combineReducers } from 'redux';
import thunk from 'redux-thunk';

// Importez chaque reducer individuellement
import societeReducer from '../reducers/societeReducer';
import userReducer from '../reducers/userReducer';
import authReducer from '../reducers/authReducer';
import userLoginReducers from '../reducers/userLoginReducers';
import actionReducer from '../reducers/actionReducer';
import interlocuteurReducer from '../reducers/interlocuteurReduceur';
import registerReducer from '../reducers/registerReducer';
// Combinez les reducers


const rootReducer = combineReducers({
  register: registerReducer,
  actions: actionReducer,
  interlocuteurs: interlocuteurReducer,
  societes: societeReducer,
  users: userReducer,
  auth: authReducer,
  userLogin: userLoginReducers,
  // Ajoutez d'autres reducers ici si nécessaire
});
const middelware =[thunk];

const store = createStore(rootReducer,composeWithDevTools(applyMiddleware(...middelware)));

export default store;