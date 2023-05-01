import React from "react"
import { NavLink } from "react-router-dom"
import Rating from "../Rating/rating"

const ProductCard = ({name,price,image, rating, numReviews}) =>{

    return(
      <NavLink className="productCard" to={`/detail/${encodeURI(name)}`}> 
      <div 
      className="product" 
        >
        <img src={image} alt={name} />
        <h3>{name}</h3>
        <p>${price}</p>
        <Rating rating={rating} numReviews={numReviews} />
        <button className='addButton'>ADD TO CART</button>
      </div>   
      </NavLink>
    )
}

export default ProductCard