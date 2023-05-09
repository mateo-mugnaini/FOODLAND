import * as action from "../constants/orderConstants"; 
import axios from "axios";

const URL = process.env.REACT_APP_URL ??  "http://localhost:5000"

// //  ============ Actualizo el total de la orden ======================
    export const total_order = (order) => {
        // console.log(order)
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
            const newOrder = await axios.post(`${URL}/order`, order);
            console.log(newOrder)

        } catch(error){
            console.log(error)
        }
    }