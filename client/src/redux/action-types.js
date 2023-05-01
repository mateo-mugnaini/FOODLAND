/* ========================* ACTIONS LOADER *======================== */
const LOADING = "LOADING";
const READY = "READY";

/* ========================* ACTIONS PRODUCTS *======================== */

const CREATE_PRODUCT = "CREATE_PRODUCT"; // Action para crear un producto
const GET_ALL_PRODUCTS = "GET_ALL_PRODUCTS"; // Action para traer todos los productos
const HANDLE_SORTS = "HANDLE_SORTS";
const RESULTSEARCH = "RESULTSEARCH"; // Action que actualiza el estado global
const DETAIL_PRODUCT = "DETAIL_PRODUCT"; // Action para traer el detalle

/* ======================= FILTER ==========================*/
const FILTERPRICE = "FILTERPRICE"; //Action que filtra por precio

/* ======================= CATEGORIES ==========================*/
const GET_ALL_CATEGORIES = "GET_ALL_CATEGORIES";
const ADD_CATEGORY_REQUEST = "ADD_CATEGORY_REQUEST";
const ADD_CATEGORY_SUCCESS = "ADD_CATEGORY_SUCCESS";
const ADD_CATEGORY_FAILURE = "ADD_CATEGORY_FAILURE";

module.exports = {
  LOADING,
  READY,
  CREATE_PRODUCT,
  GET_ALL_PRODUCTS,
  GET_ALL_CATEGORIES,
  RESULTSEARCH,
  HANDLE_SORTS,
  FILTERPRICE,
  ADD_CATEGORY_REQUEST,
  ADD_CATEGORY_SUCCESS,
  ADD_CATEGORY_FAILURE,
};
