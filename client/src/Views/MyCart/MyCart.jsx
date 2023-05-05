//IMPORT STYLE:
import "./MyCart.css";
//IMPORT Librery:
import {Link} from "react-router-dom";
import { useState } from "react";
//IMPORT STATE:
import useLocalStore from "../../hooks/useLocalStore";
//IMPORT COMPONENTS:
import Payment from "../../Components/Payment/Payment";
import CartItem from "../../Components/CartItem/CartItem";

function MyCart() {

  const [cart, setCart] = useLocalStore("Carrito", []);
  const [quantity, setQuantity] = useState(1)
  const [total , setTotal] = useState();

  return (
    <div name="MyCart" class="MyCart">
      {/* ==========boton para seguir comprando==============  */}
      <div name="Container Button back" class="ButonReturn">
        <p>Did you forget something?...</p>
        <buton class="butonBack"><Link to="/">keep buying</Link></buton>
      </div>

      {/* ============ Contenedor de carrito y forma de pago ======== */}
      <div name="Container My cart && Payment " class="ContainerPage">
        {/* <<<<<< Carritoo>>>>>> */}
        <div class="page">
          <div id="store_cart">
            {/* <<<<<<Encabezado>>>> */}
            <ul class="cart_head">
              <li class="cart_head_title">
                <img src="https://tinypic.host/images/2023/04/27/carrito-removebg-preview.png" alt="Mycart" class="logoCart" />
              </li>
              <li class="cart_head_product">Product</li>
              <li class="cart_head_options">Quantity</li>
              <li class="cart_head_price">Price</li>
            </ul>

            {/* Productos del carrito: */}
            {cart.map((product) => (
              <CartItem key={product.id} product={product}/>
            ))}

            {/* <<<<<<<<< Totales  >>>>>>>>*/}
            <ul class="cart_foot">
              <li class="cart_head_title">Total</li>
              <li>
                <p>${cart.reduce((total, product) => total + product.price * product.quantity ,0)}</p> 
              </li>
            </ul>
          </div>
        </div>

        {/* ==================Container Payment=============== */}
          <Payment />
      </div>
    </div>
  );
}

export default MyCart;
