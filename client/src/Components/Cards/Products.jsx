import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

import Loader from "../Loader/Loader";

//IMPORT STYLES
import "../Cards/Products.css";
// import {products} from "../products"

import { NavLink } from "react-router-dom";

//IMPORT ACTIONS
import { getAllProducts } from "../../redux/actions";
const Products = () => {
  const { products, display } = useSelector((state) => state);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllProducts());
  }, [dispatch]);

  console.log(products);
  return (
    <div className="contenedorProducts">
      <div>
        <h1> Nuestros productos </h1>
      </div>
      {display ? (
        <Loader />
      ) : (
        <div className="products">
          {Array.isArray(products) ? (
            products.map((e) => (
              <div className="product" key={e.id}>
                <h3 className="productName">{e.name}</h3>
                <img className="imgProduct" src={e.image} alt={e.name} />
                <p>${e.price}</p>
              </div>
            ))
          ) : (
            <p>Sin productos</p>
          )}
        </div>
      )}
    </div>
  );
};

export default Products;