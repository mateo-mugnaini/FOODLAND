import {
    UPDATE_CART
} from "../constants/cartConstants";

// Action para actualizar el carrito:

export const update_cart = (payload) =>{
    return {
        type: UPDATE_CART,
        payload,
      };
};
