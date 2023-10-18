// reducers/societeReducer.js
import { FETCH_SOCIETE_SUCCESS } from "../constants/actionTypes";
import { FETCH_SOCIETE_FAILURE } from "../constants/actionTypes";

const initialState = {
  societes: [],
  error: null,
};

export default function societeReducer(state = initialState, action) {
  switch (action.type) {
    case FETCH_SOCIETE_SUCCESS:
      return {
        ...state,
        societes: action.payload,
      };
    case FETCH_SOCIETE_FAILURE:
      return {
        ...state,
        error: action.payload,
      };
    default:
      return state;
  }
}
