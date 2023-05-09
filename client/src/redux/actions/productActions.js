import axios from "axios";
import * as action from "../constants/productConstants"; // Import para traer todas las actions-types

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

export const getAllProducts = () => {
  return async (dispatch) => {
    try {
      dispatch(loading());
      const response = await axios.get(`${URL}/api/products`);

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

export function setProduct(payload) {
  return {
    type: "SET_PRODUCT",
    payload,
  };
}

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

export const getByCategory = (category) => {
  return async (dispatch) => {
    try {
      dispatch(loading());
      const response = await axios.get(`${URL}/api/products`);
      const arrayProducts = response.data.products;

      if (category === "allProducts") {
        dispatch({
          type: action.GET_BY_CATEGORY,
          payload: arrayProducts,
        });
        dispatch(ready());
      } else {
        const productosFiltrados = arrayProducts.filter((producto) => {
          return producto.category === category;
        });
        dispatch({
          type: action.GET_BY_CATEGORY,
          payload: productosFiltrados,
        });
        dispatch(ready());
      }
    } catch (error) {
      console.log(error);
      dispatch({
        type: action.GET_BY_CATEGORY,
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

//========================*Add Category*==============//

export const updateProduct = (product) => async (dispatch) => {
  try {
    dispatch({ type: action.PRODUCT_UPDATE_REQUEST });

    const { data } = await axios.put(
      `http://localhost:5000/api/products/${product._id}`,
      product
    );

    dispatch({ type: action.PRODUCT_UPDATE_SUCCESS, payload: data });
  } catch (error) {
    dispatch({
      type: action.PRODUCT_UPDATE_FAIL,
      payload: error.response?.data?.message || error.message,
    });
  }
};
