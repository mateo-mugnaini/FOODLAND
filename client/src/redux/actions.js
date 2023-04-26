//IMPORTS
import axios from "axios";
import * as action from "./actions-type"; // Import para traer todas las actions-types

const URL = "http://localhost:3001";

/* ========================*  LOADER *======================== */
export function loading() {
  return {
    type: action.LOADING,
  };
}

/* ========================*  PRODUCTS *======================== */

export const getAllProducts = () => {
  return async (dispatch) => {
    try {
      dispatch(loading());
      const response = await axios.get(``);

      dispatch({ type: action.GET_ALL_PRODUCTS, payload: response.data });
      dispatch(ready());
    } catch (error) {
      console.log(error);
      dispatch({ type: action.GET_ALL_PRODUCTS, payload: error });
      dispatch(ready());
    }
  };
};
