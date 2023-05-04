//IMPORT STYLE:
import "./MyCart.css";
import {Link} from "react-router-dom";
import useLocalStore from "../../hooks/useLocalStore";
import Payment from "../../Components/Payment/Payment";

function CartItem({product}) {

	let quantity; // Cantidad de productos

  return (
    <ul class="cart_item">
      <li class="cart_img_col">
        <img src={product.image} alt={product.name} />
      </li>
      <li class="cart_product_col">
        <p>{product.name}</p>
        <span>{product.description}</span>
      </li>
      <li class="cart_options_col">
        <span>Quantity: </span>
        <input type="number" min="1" max="20" value={quantity} />
      </li>
      <li class="cart_price_col">
        <h2>${product.price * quantity}</h2>
      </li>
      <li class="cart_del_col">
        <img src="https://tinypic.host/images/2023/05/05/butonDelete.png" alt="deleteButton" />
      </li>
    </ul>
  );
}

function MyCart() {
	
  const [cart, setCart] = useLocalStore("Carrito Nº1", []);

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
              <li class="cart_head_options">Edit</li>
              <li class="cart_head_price">Price</li>
            </ul>

            {/* Productos del carrito: */}
            {cart.map((product) => (
              <CartItem key={product.id} product={product} />
            ))}

            {/* <<<<<<<<< Totales  >>>>>>>>*/}
            <ul class="cart_foot">
              <li class="cart_head_title">Total</li>
              <li>
                <p>${cart.reduce((total, product) => total + product.price * product.quantity, 0)}</p>
              </li>
            </ul>
          </div>
        </div>

        {/* ==================Container Payment=============== */}
        <div name="ContainerPayment">
          <Payment />
        </div>
      </div>
    </div>
  );
}

export default MyCart;
