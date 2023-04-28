/* ========================* ACTIONS LOADER *======================== */
const LOADING = "LOADING";
const READY = "READY";

/* ========================* ACTIONS PRODUCTS *======================== */

const CREATE_PRODUCT = "CREATE_PRODUCT"; // Action para crear un producto
const GET_ALL_PRODUCTS = "GET_ALL_PRODUCTS"; // Action para traer todos los productos
const HANDLE_SORTS = "HANDLE_SORTS"
const RESULTSEARCH = "RESULTSEARCH"; // Action que actualiza el estado global


/* ======================= FILTER ==========================*/
const FILTERPRICE = "FILTERPRICE"; //Action que filtra por precio


module.exports = {
  LOADING,
  READY,
  CREATE_PRODUCT,
  GET_ALL_PRODUCTS,
  GET_ALL_CATEGORIES,
  RESULTSEARCH,
  HANDLE_SORTS,
  FILTERPRICE,
};
