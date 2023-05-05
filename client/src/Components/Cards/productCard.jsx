import React from "react"
import { Link } from "react-router-dom"
import Rating from "../Rating/rating"
//IMPORT LOCALSTORE
import useLocalStore from "../../hooks/useLocalStore"

const ProductCard = ({id,name,price,image, rating,description, numReviews}) =>{

  // ======== Traigo el LocalStore ====
  const [Cart, setCart] = useLocalStore( "Carrito", []);
 
  // ======= funcion add product =====
  const AddProductoToCart = ()=>{
    const existingItem = Cart.find((item) => item.id === id);
    // =============== Verifico si existe previamente ========
    if (existingItem) {
      // =========== Si existe sumo 1 a la cantidad pero no lo agrego al carrito =====
      const updatedCart = Cart.filter((item) => item.id !== id);
      const updatedQuantity = existingItem.quantity + 1;

      setCart([...updatedCart, { ...existingItem, quantity: updatedQuantity }]);
    } else {
      setCart([...Cart, { id, name, price, image, description, quantity: 1 }]);
    }
  };

    return(
      <div  className="productCard">
        <div 
        className="product" 
        >
          <Link to={`/detail/${encodeURI(id)}`}> 
            <img src={image} alt={name} />
            <h3>{name}</h3>
            <p>${price}</p>
            <Rating rating={rating} numReviews={numReviews} />
          </Link>
          {/* <button className='addButton'>ADD TO CART</button> */}
                  <button className='addButton' onClick={() => AddProductoToCart(id)}>ADD TO CART</button>
        </div>   
      </div>
    )
}

export default ProductCard