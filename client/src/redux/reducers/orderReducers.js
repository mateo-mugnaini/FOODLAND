import{
    TOTAL_ORDER,
} from "../constants/orderConstants";

const initialState = { 
    totalOrder: { 
    subtotal: 0,
    taxes: 0,
    shipping: "Free",
    totalOrder: 0, }, };

const ordersReducer = (state = initialState, action) => {
    switch (action.type) {
        case TOTAL_ORDER:
            return {
                ...state,
                totalOrder: action.payload,
            };
        default:
            return { ...state };
    }
};

export default ordersReducer;