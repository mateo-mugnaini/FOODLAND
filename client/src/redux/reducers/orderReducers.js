import{
    TOTAL_ORDER,
} from "../constants/orderConstants";

const initialState = { 
    totalOrder: 0 };

const ordersReducer = (state = initialState, action) => {
    switch (action.type) {
        case TOTAL_ORDER:
            console.log(action.payload)
            return {
                ...state,
                totalOrder: action.payload,
            };
        default:
            return { ...state };
    }
};

export default ordersReducer;