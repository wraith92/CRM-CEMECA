// actions/societeActions.js

import { FETCH_SOCIETE_FAILURE,FETCH_SOCIETE_SUCCESS } from "../constants/actionTypes";

export const fetchSocietes = () => async (dispatch) => {
  try {
    const response = await fetch("http://localhost:8080/societe");
    const data = await response.json();
    dispatch({ type: FETCH_SOCIETE_SUCCESS, payload: data });
  } catch (error) {
    dispatch({ type: FETCH_SOCIETE_FAILURE, payload: error });
  }
}
