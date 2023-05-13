import {
  TOTAL_ORDER,
  ORDER_CREATE_REQUEST,
  ORDER_CREATE_SUCCESS,
  ORDER_CREATE_FAIL,
  ORDER_COMPLETE_PAY,
} from "../constants/orderConstants";

const initialState = {
  orders: {
    active:false,
  },
  loading: false,
  error: "",
  isError: false,
  totalOrder: {
    shippingPrice: 0,
    subtotal: 0,
    taxes: 0,
    totalOrder: 0,
  },
};

const ordersReducer = (state = initialState, action) => {
  switch (action.type) {
    case TOTAL_ORDER:
      return {
        ...state,
        totalOrder: action.payload,
      };
    case ORDER_CREATE_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case ORDER_CREATE_SUCCESS:
      return {
        ...state,
        orders: action.payload,
        loading: false,
      };
    case ORDER_CREATE_FAIL:
      return {
        ...state,
        loading: false,
        error: action.payload,
        isError: true,
      };
      case ORDER_COMPLETE_PAY:
        return {
          ...state,
          orders:{
            active:false
          },
          loading:false
        }
    default:
      return { ...state };
  }
};

export default ordersReducer;
