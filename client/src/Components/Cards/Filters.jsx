//IMPORT STYLES:
import "./cards.css"
//IMPORT REACTS:
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllProducts , filterPrice} from "../../redux/actions";

const Filters = () => { 
    const dispatch = useDispatch(); 
    const [price, setPrice] = useState({ 
        min: "", max: "", }); 

    const [filteredProducts, setFilteredProducts] = useState([]);

useEffect(() => {
    dispatch(getAllProducts());
}, [dispatch]);

const products = useSelector(state => state.products ? state.products : []);

const editedProducts = products.map(product => {
    return {
      ...product,
      price: parseFloat(product.price.toString().replace('.', ''))
    }
  });

const inputHandler = (e) => {
    e.preventDefault();
    if(price.min ==="") price.min = 0;
    else if(price.max ==="") price.max = 100000;
    setPrice({
        ...price,
        [e.target.name]: e.target.value,
    });
};

const priceProducts = editedProducts?.filter(product => {
    return (
        product.price >= parseFloat(price.min) &&
        product.price <= parseFloat(price.max)
    );
});

const handleSubmit = () => {
    setFilteredProducts(priceProducts);
    dispatch(filterPrice(priceProducts));
}

return (
    <fieldset>
        <label>Filter by Prices:</label>
        <div className="MinMax">
            $
            <input
                type="number"
                placeholder="Min"
                value={price.min}
                className="Range"
                name="min"
                onChange={inputHandler}
                min="1"
            /> -
            <input
                type="number"
                placeholder="Max"
                value={price.max}
                className="Range"
                name="max"
                onChange={inputHandler}
                min="1"
            />
        </div>
        <br />
        <button
            type="submit"
            className="butonFilter"
            onClick={handleSubmit}
        >
            Filtrar
        </button>
    </fieldset>
)
}

export default Filters;
    
        // {/*  ============ Filtrado de categoria para el /Allproducts ========
        // <label> Category:</label>
        // <h5>
        // <input type="checkbox" value="Almacen" />Almacen<br></br>
        // <input type="checkbox" value="Frutas y Verduras" />Frutas y Verduras<br/>
        // <input type="checkbox" value="Carniceria" />Carniceria<br/>
        // <input type="checkbox" value="Bebidas" />Bebidas<br/>
        // <input type="checkbox" value="Panaderia" />Panaderia<br/>
        // <input type="checkbox" value="Cuidado Personal" />Cuidado Personal<br/>
        // <input type="checkbox" value="Lacteos" />Lacteos<br/>
        // <input type="checkbox" value="Congelados" />Congelados<br/>
        // <input type="checkbox" value="Limpieza" />Limpieza
        // </h5> 
        // */}