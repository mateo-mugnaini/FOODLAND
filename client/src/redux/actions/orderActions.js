import * as action from "../constants/orderConstants"; 
import axios from "axios";

// //  ============ Actualizo el total de la orden ======================
    export const total_order = ( order) => {
        return (dispatch) => {
            dispatch({
                type: action.TOTAL_ORDER,
                payload: order,
            });
        };
    };


    //============ POST ORDER ============== //

    export const post_order = (order) => async () =>{
        try{
            const newOrder = await axios.post("", order);
            console.log(newOrder)

        } catch(error){
            console.log(error)
        }
    }