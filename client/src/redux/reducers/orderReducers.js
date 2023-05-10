import{
    TOTAL_ORDER,
    ORDER_CREATE_REQUEST,
    ORDER_CREATE_SUCCESS,
    ORDER_CREATE_FAIL
} from "../constants/orderConstants";

const initialState = { 
    orders: [],
    loading: false,
    error: "",
    isError: false };

const ordersReducer = (state = initialState, action) => {
    switch (action.type) {
        case TOTAL_ORDER:
            // console.log(action.payload)
            return {
                ...state,
                totalOrder: action.payload,
            };
        case ORDER_CREATE_REQUEST:
          return {
          ...state,
          loading:true
          };
        case ORDER_CREATE_SUCCESS:
          return {
            ...state,
            orders: action.payload.orders,
            loading: false,
          };
        case ORDER_CREATE_FAIL:
          return {
            ...state,
            loading:false,
            error: action.payload,
            isError: true
          }
        default:
          return { ...state };
    }
};

export default ordersReducer;