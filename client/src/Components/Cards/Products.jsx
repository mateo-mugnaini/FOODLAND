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
            <div className="productos">
            {products.map(e => (
          <div className="producto" key={e.id}>
            <h3>{e.name}</h3>
            <img className="imgProducto" src={e.image} alt={e.name} />
            <p>${e.price}</p>
            <p>Descripcion: {e.description}</p>
          </div>
        ))}
        
        <div>
            <h1> soy un map de productos que va al <NavLink to="/detail/:id">Detalle</NavLink></h1>
        </div>
            </div>
        </div>

            
    )
}

export default Products