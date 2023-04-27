import React from 'react'
import { NavLink } from 'react-router-dom'
import { products } from '../products'
import ProductCard from "./ProductCard"

const ProductsContainer = () => {
    return(
        <div className="CardContainer">
            {products.map(e => (
              
          <ProductCard
          name={e.name}
          price={e.price}
          image={e.image}
          />
     
        ))}     
        </div>            
    )
}

export default ProductsContainer