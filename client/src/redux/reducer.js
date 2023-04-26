/* ========================* IMPORT ACTIONS *======================== */
import { GET_ALL_PRODUCTS } from "./action-types";

/* ========================* INITIAL STATE *======================== */
const initialState = {
  products: [],
};

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_ALL_PRODUCTS:
      return {
        ...state,
        products: action.payload,
      };
    default:
      return { ...state };
  }
};

export default rootReducer;
