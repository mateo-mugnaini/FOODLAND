import React from "react"
import "../Cards/Cards.css"
import {products} from "../products"
import { NavLink } from "react-router-dom"

const ProductCard = ({name,price,image}) =>{

    return(
      <NavLink to={`/detail/${encodeURI(name)}`}> 
      <div 
      className="product" 
        >
        <img src={image} alt={name} />
        <h3>{name}</h3>
        <p>${price}</p>
        <button className='addButton'>ADD TO CART</button>
      </div>   
      </NavLink>
    )
}

export default ProductCard