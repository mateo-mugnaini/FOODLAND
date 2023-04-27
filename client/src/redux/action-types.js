/* ========================* ACTIONS LOADER *======================== */
const LOADING = "LOADING";
const READY = "READY";

/* ========================* ACTIONS PRODUCTS *======================== */

const CREATE_PRODUCT = "CREATE_PRODUCT"; // Action para crear un producto
const GET_ALL_PRODUCTS = "GET_ALL_PRODUCTS"; // Action para traer todos los productos
const RESULTSEARCH = "RESULTSEARCH" // Action que actualiza el estado global

/* ========================* ACTIONS SUSCRIBE-FOOTER*======================== */
// const POST_SUSCRIBE = "POST_SUSCRIBE"; //Action para suscribirse a FoodLand [REVISAR 2do STRING]

module.exports = {
  LOADING,
  READY,
  CREATE_PRODUCT,
  GET_ALL_PRODUCTS,
  RESULTSEARCH
};
