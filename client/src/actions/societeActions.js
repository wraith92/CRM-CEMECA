// actions/societeActions.js

import { FETCH_SOCIETE_FAILURE,FETCH_SOCIETE_SUCCESS } from "../constants/actionTypes";

export const fetchSocietes = () => async (dispatch) => {
  try {
    const response = await fetch("http://localhost:8080/societe");
    const data = await response.json();
    dispatch({ type: FETCH_SOCIETE_SUCCESS, payload: {
      message: "Liste des societes :)",
      data: data,
    } });
  } catch (error) {
    dispatch({ type: FETCH_SOCIETE_FAILURE, payload: {
      message: "Une erreur s'est produite lors de la récupération des societes.",
      
    } });
  }
}
