import { useState } from "react";
import "./CartItem.css"
import {Link} from "react-router-dom";

function CartItem({product}) {
  
    const [quantity, setQuantity] = useState( product.quantity || 1)

    return (
      <ul class="cart_item">
        <li class="cart_img_col">

        <Link to={`/detail/${product.id}`}>
          <img src={product.image } alt={product.name} />
        </Link> 
        </li>
        <li class="cart_product_col">
        <Link to={`/detail/${product.id}`}>
          <p>{product.name}</p>
          <span>{product.description}</span>
        </Link> 
        </li>
        <li class="cart_options_col">
        <div className="contador">
        <button onClick={() => setQuantity(quantity - 1)}  disabled={quantity <= 1}>-</button>
            <p>{quantity}</p>
            <button onClick={() => setQuantity(quantity + 1)}>+</button>
            </div>
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

  export default CartItem;