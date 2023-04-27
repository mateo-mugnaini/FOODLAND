/* ========================* IMPORT ACTIONS *======================== */
import { GET_ALL_CATEGORIES, GET_ALL_PRODUCTS,  LOADING, READY , RESULTSEARCH, GET_FILTERED_CATEGORIES} from "./action-types";

/* ========================* INITIAL STATE *======================== */
const initialState = {
  products: [],
  display: false,
  categories: []
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
      case GET_ALL_CATEGORIES:
        return {
          ...state,
          categories: action.payload,
        };
    
      case RESULTSEARCH:
        return{
          ...state,
          products: action.payload,
        };  
    default:
      return { ...state };
  }
};

export default rootReducer;
