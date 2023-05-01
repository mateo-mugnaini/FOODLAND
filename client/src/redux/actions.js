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

function getProducts(data) {
  return {
    type: action.GET_PRODUCTS,
    payload: data,
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

      // console.log("estoy filtrado", productosFiltrados);
      // console.log("aaaa", response.data.products);

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

export const getDetail = (id) => {
  return async (dispatch) => {
    try {
      dispatch(loading());
      const response = await axios.get(`${URL}/api/products/slug/${id}`);

      console.log(response.data);
      dispatch({
        type: action.DETAIL_PRODUCT,
        payload: response.data,
      });
      dispatch(ready());
    } catch (error) {
      console.log(error, "WWWW");
      dispatch({
        type: action.DETAIL_PRODUCT,
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
      const products = await axios.get(`${URL}/api/products`);
      dispatch(getProducts(products.data.products));
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

export function handle_sorts(payload) {
  return {
    type: "HANDLE_SORTS",
    payload,
  };
}
export function handle_sorts2(payload) {
  return {
    type: "HANDLE_SORTS",
    payload,
  };
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

//========================*Filtro de rango de precios*==============//

export const filterPrice = (products) => {
  return async (dispatch) => {
    try {
      dispatch({
        type: action.FILTERPRICE,
        payload: products,
      });
    } catch (error) {
      console.log(error);
    }
  };
};

//========================*Add Category*==============//
export const addCategory = (category) => async (dispatch) => {
  try {
    dispatch({ type: action.ADD_CATEGORY_REQUEST });
    const { data } = await axios.post(
      "http://localhost:5000/api/categories",
      category
    );
    dispatch({
      type: action.ADD_CATEGORY_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: action.ADD_CATEGORY_FAILURE,
      payload: error.message,
    });
  }
};
