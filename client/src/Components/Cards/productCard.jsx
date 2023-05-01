import React from "react"
import { Link } from "react-router-dom"
import Rating from "../Rating/rating"

const ProductCard = ({id,name,price,image, rating, numReviews}) =>{
    return(
      <Link className="productCard" to={`/detail/${encodeURI(id)}`}> 
      <div 
      className="product" 
        >
        <img src={image} alt={name} />
        <h3>{name}</h3>
        <p>${price}</p>
        <Rating rating={rating} numReviews={numReviews} />
        <button className='addButton'>ADD TO CART</button>
      </div>   
      </Link>
    )
}

export default ProductCard