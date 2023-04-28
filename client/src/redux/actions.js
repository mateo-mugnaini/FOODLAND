//IMPORTS
import axios from "axios";
import * as action from "./action-types"; // Import para traer todas las actions-types

const URL = "http://localhost:5000";
//const URL = "https://foodland-back.onrender.com";

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

export const getAllProducts = (category) => {
  return async (dispatch) => {
    try {
      dispatch(loading());
      const response = await axios.get(`${URL}/api/products`);
    
      const arrayProducts = response.data.products;
      const productosFiltrados = arrayProducts.filter((producto) => {
        return producto.category === category;
      });

    console.log ("estoy filtrado", productosFiltrados)

      dispatch({
        type: action.GET_ALL_PRODUCTS,
        payload: productosFiltrados,
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

/* ========================* FILTROS *======================== */

export const getAllCategories = () => {
  return async (dispatch) => {
    try {
      dispatch(loading());
      const response = await axios.get(`${URL}/api/products/categories`);
  
      dispatch({
        type: action.GET_ALL_CATEGORIES,
        payload: response.data,
      });
      dispatch(ready());
    } catch (error) {
      console.log(error);
      dispatch({
        type: action.GET_ALL_CATEGORIES,
        payload: error,
      });
      dispatch(ready());
    }
  };
};

export function handle_sorts(payload){
  return ({
      type: 'HANDLE_SORTS',
      payload
  })
}


/* ========================*  SEARCH*======================== */
export const resultSearch = (result) => {
  return async (dispatch) => {
    try {
      dispatch({
        type: action.RESULTSEARCH,
        payload: result,
      });
    } catch (error) {
    console.log(error);
    }
  };
};

