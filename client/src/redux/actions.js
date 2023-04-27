//IMPORTS
import axios from "axios";
import * as action from "./action-types"; // Import para traer todas las actions-types

const URL = "http://localhost:5000";

/* ========================*  LOADER *======================== */
export function loading() {
  return {
    type: action.LOADING,
  };
}

export function ready() {
  return {
    type: action.READY,
  };
}

/* ========================*  PRODUCTS *======================== */

export const getAllProducts = () => {
  return async (dispatch) => {
    try {
      dispatch(loading());
      const response = await axios.get(`${URL}/api/products`);
      console.log(response);
      dispatch({
        type: action.GET_ALL_PRODUCTS,
        payload: response.data,
      });
      dispatch(ready());
    } catch (error) {
      console.log(error);
      dispatch({
        type: action.GET_ALL_PRODUCTS,
        payload: error,
      });
      dispatch(ready());
    }
  };
};


/* ========================*  PRODUCT *======================== */

export const getProduct = (name) => {
  return async (dispatch) => {
    try {
      dispatch(loading());
      const responseBack = await axios.get(`${URL}/api/products?name=${name}`); //Corroborar Ruta cuando Back funcione!!!!
      console.log(responseBack);
      dispatch({
        type: action.GET_PRODUCT,
        payload: responseBack.data,
      });
      dispatch(ready());
    } catch (error) {
      // console.log(error);
      alert("Product no found , try again")
      dispatch({
        type: action.GET_PRODUCT,
        payload: error,
      });
      dispatch(ready());
    }
  };
};


/* ========================*  SUSCRIBE - FOOTER*======================== */
 /// --------------------------------REVISAR!!-------------------------- 2do string!!!
// export function postSuscribe(email) {
//   return async function(){
//       try {
//           const newEmail = await axios.post(URL+"/???????",email);   /// Corroborrar ruta!!!!
//           console.log(newEmail);
//       } catch (error) {
//           console.log(error)
//           alert("Please try again")
//       }
//       }

// };