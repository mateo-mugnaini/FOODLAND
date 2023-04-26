import React from "react";
import { useSelector } from "react-redux";
import Loader from "../Loader/Loader";

//IMPORT STYLES
import "../Cards/Products.css";
// import {products} from "../products"

import { NavLink } from "react-router-dom";
const Products = () => {
  const { products, display } = useSelector((state) => state);

  console.log(products);
  return (
    <div className="contenedorProducts">
      <div>
        <h1> Nuestros productos </h1>
      </div>
      {display ? (
        <Loader />
      ) : (
        <NavLink to="/detail/:id">
          <div className="products">
            {products.map((e) => (
              <div className="product" key={e.id}>
                <h3 className="productName">{e.name}</h3>
                <img className="imgProduct" src={e.image} alt={e.name} />
                <p>${e.price}</p>
              </div>
            ))}
          </div>
        </NavLink>
      )}
    </div>
  );
};

export default Products;
