import { useState, useEffect } from "react";
import "./CartItem.css";
import { Link } from "react-router-dom";
import useLocalStore from "../../hooks/useLocalStore";

function CartItem({ product, updateQuantity, removeItem, updateCartTotal, total }) {
  const [quantity, setQuantity] = useState(product.quantity || 1);
  const [cart, setCart] = useLocalStore("Carrito", []);

  useEffect(() => {
    updateCartTotal();
  }, [cart, updateCartTotal]);

  const updateQuantityHandler = (newQuantity) => {
    setQuantity(newQuantity);
    updateQuantity(product.id, newQuantity);
  };

  const removeItemHandler = () => {
    removeItem(product.id);
  };

  return (
    <ul className="cart_item">
      <li className="cart_img_col">
        <Link to={`/detail/${product.id}`}>
          <img src={product.image} alt={product.name} />
        </Link>
      </li>
      <li className="cart_product_col">
        <Link to={`/detail/${product.id}`}>
        {cart.length === 0 ? <p>Please Add Product</p> : ""}
          <p>{product.name}</p>
          <span>{product.description}</span>
        </Link>
      </li>
      <li className="cart_options_col">
        <div className="contador">
          <button onClick={() => updateQuantityHandler(quantity - 1)} disabled={quantity <= 1}>
            -
          </button>
          <p>{quantity}</p>
          <button onClick={() => updateQuantityHandler(quantity + 1)}>+</button>
        </div>
      </li>
      <li className="cart_price_col">
        <h2>${product.price * quantity}</h2>
      </li>
      <li className="cart_del_col">
        <img src="https://tinypic.host/images/2023/05/05/butonDelete.png" alt="deleteButton" onClick={removeItemHandler} />
      </li>
    </ul>
  );
}

export default CartItem;