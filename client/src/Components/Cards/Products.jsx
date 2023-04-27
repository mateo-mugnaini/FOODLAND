import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";


//IMPORT COMPONENTS
import Loader from "../Loader/Loader";

//IMPORT STYLES
import "../Cards/Products.css";
// import {products} from "../products"

import { NavLink } from "react-router-dom";

//IMPORT ACTIONS
import { getAllProducts } from "../../redux/actions";
const Products = () => {

  /* IMPORT STATES */
  const { products, display } = useSelector((state) => state);

  const allProduct = products.products // Constante para traer mas facil los productos

  const [numeroPagina, setNumeroPagina] = useState(1);

  const grupo = 3;
  const conteoFinal = numeroPagina * grupo;
  const conteoInicial = conteoFinal - grupo;

  const aux =
  allProduct && allProduct.slice
      ? allProduct.slice(conteoInicial, conteoFinal)
      : [];

      

  const page = [];

  const pageNum = Math.ceil(allProduct?.length / grupo);

  for (let i = 1; i <= pageNum; i++) {
    page.push(i);
  }


  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllProducts());
  }, [dispatch]);

  // console.log(product);
  return (
    <div className="contenedorProducts">
      <div>
        <h1> Nuestros productos </h1>
      </div>
      {display ? (
        <Loader />
      ) : (
        <NavLink to= "">
        <div className="products">
          {Array.isArray(aux) ? (
            aux?.map((e) => (
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
        </NavLink>
      )}
    <div className="containerPaginated">
    <div>
        <button
          className="btnPag"
          onClick={() => setNumeroPagina(numeroPagina - 1)}
          disabled={numeroPagina === 1}
        >
          Back
        </button>
        {page.map((page) => (
          <button
            key={page}
            className={`btnPag ${page === numeroPagina ? "active" : ""}`}
            onClick={() => setNumeroPagina(page)}
          >
            {page}
          </button>
        ))}
        <button
          className="btnPag"
          onClick={() => setNumeroPagina(numeroPagina + 1)}
          disabled={numeroPagina === pageNum}
        >
          Next
        </button>
      </div>
    </div>
    </div>
  );
};

export default Products;