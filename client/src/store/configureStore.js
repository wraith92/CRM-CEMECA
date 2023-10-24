// src/store/configureStore.js
import {composeWithDevTools} from 'redux-devtools-extension';
import { createStore, applyMiddleware, combineReducers } from 'redux';
import thunk from 'redux-thunk';

// Importez chaque reducer individuellement
import societeReducer from '../reducers/societeReducer';
import userReducer from '../reducers/userReducer';
// Combinez les reducers
const rootReducer = combineReducers({
  societes: societeReducer,
  users: userReducer,
  // Ajoutez d'autres reducers ici si nécessaire
});
const middelware =[thunk];

const store = createStore(rootReducer,composeWithDevTools(applyMiddleware(...middelware)));

export default store;