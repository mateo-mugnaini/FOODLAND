import "./cards.css";
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllProducts, getByCategory, setProduct } from "../../redux/actions";
import { useParams } from "react-router-dom";

const Filters = () => {
  const { categoriesId } = useParams();
  const [minPrice, setMinPrice] = useState(0);
  const [maxPrice, setMaxPrice] = useState(10000);
  
  const dispatch = useDispatch();
  const products = useSelector((state) => state.products);

  const inputHandler = (e) => {
    const { name, value } = e.target;
    if (name === "min") {
      setMinPrice(value);
    } else if (name === "max") {
      setMaxPrice(value);
    }
    console.log("minPrice:", minPrice);
    console.log("maxPrice:", maxPrice);
  };
  
  const handleSubmit = () => {
    const filteredProducts = products.filter((product) => {
      return product.price >= parseInt(minPrice) && product.price <= parseInt(maxPrice);
    });
    console.log(filteredProducts);
    dispatch(setProduct(filteredProducts));
  };

  return (
    <fieldset>
      <label>Filter by Prices:</label>
      <div className="MinMax">
        $
        <input
          type="number"
          placeholder="Min"
          onChange={inputHandler}
          name="min"
        />{" "}
        -
        <input
          type="number"
          placeholder="Max" 
          onChange={inputHandler}
          name="max"
        />
      </div>
      <button type="submit" className="butonFilter" onClick={handleSubmit}>
        Filtrar
      </button>
    </fieldset>
  );
};

export default Filters;
