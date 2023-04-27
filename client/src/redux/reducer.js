/* ========================* IMPORT ACTIONS *======================== */
import { GET_ALL_PRODUCTS, GET_PRODUCT, LOADING, POST_SUSCRIBE, READY } from "./action-types";

/* ========================* INITIAL STATE *======================== */
const initialState = {
  products: [],
  display: false,
};

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOADING:
      return {
        ...state,
        display: true,
      };
    case READY:
      return {
        ...state,
        display: false,
      };
    case GET_ALL_PRODUCTS:
      return {
        ...state,
        products: action.payload,
      };
    case GET_PRODUCT:
      return{
        ...state,
        products:action.payload,
      };
    default:
      return { ...state };
  }
};

export default rootReducer;
