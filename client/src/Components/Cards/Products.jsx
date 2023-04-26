import React from "react"
import { NavLink } from "react-router-dom"

const Products = () =>{

    return(
        <div className="ProductContainer">
            <h1>Soy un map de tarjetas con link a <NavLink to="/detail/:id">detail</NavLink> </h1>

        </div>
    )
}

export default Products