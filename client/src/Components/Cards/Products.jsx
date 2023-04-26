import { NavLink } from "react-router-dom"

const Products = () =>{

    return(
        <div>
            <h1> soy un map de productos que va al <NavLink to="/detail/:id">Detalle</NavLink></h1>
        </div>
    )
}

export default Products