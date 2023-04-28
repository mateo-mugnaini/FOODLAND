/* ========================* IMPORT ACTIONS *======================== */
import { GET_ALL_CATEGORIES, GET_ALL_PRODUCTS,  HANDLE_SORTS,  LOADING, READY , RESULTSEARCH,  FILTERPRICE} from "./action-types";

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

      case HANDLE_SORTS:  
            
          const toOrder = state.products;
          console.log(action.payload)

          if (action.payload === "desc") {
           const arrOrdenado = toOrder.sort(function (a, b) {
              if (a.name.toLowerCase() > b.name.toLowerCase()) {
                  return -1;
              }
              if (b.name.toLowerCase() > a.name.toLowerCase()) {
                  return 1;
              }
              return 0;
          })
           return {
                ...state, products:arrOrdenado 
            };
          }

          if (action.payload === "asc") {
            const arrOrdenado = toOrder.sort(function (a, b) {
               if (a.name.toLowerCase() > b.name.toLowerCase()) {
                   return 1;
               }
               if (b.name.toLowerCase() > a.name.toLowerCase()) {
                   return -1;
               }
              return 0;
           })
           return {
            ...state, products:arrOrdenado 
            };
           }
          if (action.payload === "higher_price") {
            const arrOrdenado =  toOrder.sort((a, b) => b.price - a.price)
            return {
              ...state, products:arrOrdenado 
          };
          }
          else {
           const arrOrdenado = toOrder.sort((a, b) => a.price - b.price);
           return {
              ...state, products:arrOrdenado 
          };
          }
        
      ;
      case RESULTSEARCH:
        return{
          ...state,
          products: action.payload,
        };  
        case FILTERPRICE:
          return{
            ...state,
            products: action.payload,
          }; 
    default:
      return { ...state };
  }
};

export default rootReducer;
