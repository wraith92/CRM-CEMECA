// reducers/societeReducer.js
import { FETCH_SOCIETE_SUCCESS } from "../constants/societe.constant";
import { FETCH_SOCIETE_FAILURE } from "../constants/societe.constant";

const initialState = {
  societes: [],
  error: null,
  loading: false,
};

export default function societeReducer(state = initialState, action) {
  switch (action.type) {
    case FETCH_SOCIETE_SUCCESS:
      return {
        ...state,
        societes: action.payload.data,
        error: null,
        loading: false,
      };
    case FETCH_SOCIETE_FAILURE:
      return {
        ...state,
        error: action.payload.message,
        loading: false,
        societes: [],
      };
    default:
      return state;
  }
}
