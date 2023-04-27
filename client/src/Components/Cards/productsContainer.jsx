import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import Loader from "../Loader/Loader";
import "../Cards/cards.css";
import { NavLink, useParams } from "react-router-dom";
import ProductCard from "./productCard";
import { getAllProducts } from "../../redux/actions";

const ProductsContainer = () => {


  const { categoriesId } = useParams();

  /* IMPORT STATES */
  const { products, display } = useSelector((state) => state);

  /* PAGINADO */
  const [numeroPagina, setNumeroPagina] = useState(1);

  const grupo = 3;
  const conteoFinal = numeroPagina * grupo;
  const conteoInicial = conteoFinal - grupo;

  const aux =
  products && products.slice
      ? products.slice(conteoInicial, conteoFinal)
      : [];

      

  const page = [];

  const pageNum = Math.ceil(products?.length / grupo);

  for (let i = 1; i <= pageNum; i++) {
    page.push(i);
  }

  /* DISPATCH PARA TRAER LOS PRODUCTOS */
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllProducts(categoriesId));
  }, [dispatch]);

  console.log(products);
  return (
    <div >
      <div className="CardContainer"> 
      {display ? (
        <Loader />
      ) : (        
          Array.isArray(aux) ? (
            aux?.map((e) => (
              <ProductCard
              name={e.name}
              price={e.price}
              image={e.image}
              />
            ))
          ) : (
            <p>Sin productos</p>
          )
        
       
      )} 
      </div>
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

export default ProductsContainer;

