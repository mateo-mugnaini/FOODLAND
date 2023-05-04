import React from "react"
import { Link } from "react-router-dom"
import Rating from "../Rating/rating"
//IMPORT LOCALSTORE
// import useLocalStore from "../../hooks/useLocalStore"

const ProductCard = ({id,name,price,image, rating, numReviews}) =>{

  // // ======== Traigo el LocalStore ====
  // const [Cart, setCart] = useLocalStore( "Carrito Nº1", []);
 
  // // ======= funcion add product =====
  // const AddProductoToCart = (id)=>{
  //   setCart([...Cart, id])
  // }

  // console.log(Cart)

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
          <button className='addButton'>ADD TO CART</button>
                  {/*<button className='addButton' onClick={() => AddProductoToCart(id)}>ADD TO CART</button> */}
        </div>   
      </div>
    )
}

export default ProductCard