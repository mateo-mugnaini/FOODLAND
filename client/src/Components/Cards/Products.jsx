import React from "react"
import "../Cards/Products.css"
import {products} from "../products"
import { NavLink } from "react-router-dom"
const Products = () =>{

console.log(products.map(e => e.name));
    return(
        <div className="contenedorProducts">
            <div>
            <h1> I'm the list product's</h1>
            </div>
            <NavLink to="/detail/:id">
            <div className="products">
            {products.map(e => (
          <div className="product" key={e.id}>
            <h3 className="productName">{e.name}</h3>
            <img className="imgProduct" src={e.image} alt={e.name} />
            <p>${e.price}</p>
          </div>
        ))}     
            </div>
        </NavLink>
        </div>            
    )
}

export default Products