/* ========================* ACTIONS LOADER *======================== */
const LOADING = "LOADING";
const READY = "READY";

/* ========================* ACTIONS PRODUCTS *======================== */

const CREATE_PRODUCT = "CREATE_PRODUCT"; // Action para crear un producto
const GET_ALL_PRODUCTS = "GET_ALL_PRODUCTS"; // Action para traer todos los productos
const GET_PRODUCT = "GET_PRODUCT" // Action para realizar busqueda de un producto


/* ========================* ACTIONS SUSCRIBE-FOOTER*======================== */
const POST_SUSCRIBE = "POST_SUSCRIBE"; //Action para suscribirse a FoodLand [NO ENTRA AL REDUCER!]

module.exports = {
  LOADING,
  READY,
  CREATE_PRODUCT,
  GET_ALL_PRODUCTS,
  GET_PRODUCT,
  POST_SUSCRIBE
};
