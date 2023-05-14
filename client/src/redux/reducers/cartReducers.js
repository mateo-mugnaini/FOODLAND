
import{
UPDATE_CART
} from "../constants/cartConstants"

const cartsReducer = (state = {carrito:[]}, action) => {
    switch (action.type) {
      case UPDATE_CART:
        console.log(action.payload)
        return{
            ...state,
            carrito: action.payload
            }
        default:
            return state ;
        }
    };

export default cartsReducer;