import * as action from "../constants/orderConstants";
import {ORDER_CREATE_REQUEST, ORDER_CREATE_SUCCESS, ORDER_CREATE_FAIL } from "../constants/orderConstants";
import axios from "axios";

const URL = process.env.REACT_APP_URL ??  "http://localhost:5000/api"


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


    export const post_order = (order,token) => async () =>{
        try{
            const newOrder = await axios.post(`${URL}/order`, order);
            console.log(newOrder)

        } catch(error){
            console.log(error)
        }
    }

    //==================== CREATE ORDER ================//
    
    /*export const createOrder = (order) => async (dispatch, getState) => {
        dispatch({ type: ORDER_CREATE_REQUEST, payload: order });
        try {
            const {
                userSignin: { userInfo },
            } = getState();
            const { data } = await axios.post("/api/orders", order, {
                headers: { Authorization: `Bearer ${userInfo.token}` },
            });
            dispatch({ type: ORDER_CREATE_SUCCESS, payload: data.order });
            dispatch({ type: CART_EMPTY });
            localStorage.removeItem("cartItems");
        } catch (error) {
            dispatch({
                type: ORDER_CREATE_FAIL,
                payload:
                    error.response && error.response.data.message
                        ? error.response.data.message
                        : error.message,
            });
        }
    };*/

    export const createOrder = (order, token) => async (dispatch) => {
        dispatch({ type: ORDER_CREATE_REQUEST });
        try {
            const { data } = await axios.post(`${URL}/api/orders`, order, {
                headers: { Authorization: `Bearer ${token}` },
            });
            if (data.message==="New Order Created") {
                dispatch ({type: ORDER_CREATE_SUCCESS, payload: data.order })
            }
        } catch (error) {
            dispatch({
                type: ORDER_CREATE_FAIL,
                payload:
                    error.response && error.response.data.message
                        ? error.response.data.message
                        : error.message,
            });
        }
    }

   