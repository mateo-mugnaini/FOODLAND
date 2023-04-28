
import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import Loader from "../Loader/Loader";
import "../Cards/cards.css";
import { NavLink, useParams } from "react-router-dom";
import ProductCard from "./productCard";
import { getAllProducts, handle_sorts } from "../../redux/actions";

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

  /* FUNCION DE ORDENAMIENTO  */

  function handleSorts(e) {
    e.preventDefault();
    dispatch(handle_sorts(e.target.value))
  }


  /* DISPATCH PARA TRAER LOS PRODUCTOS */
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllProducts(categoriesId));
  }, [dispatch]);

  return (
    <div className="productsContainer">
      <div className='selectDiv'>

     <select className="selectInput" onChange={handleSorts} >
      <option value="">Ordenar por</option>
      <option value="asc">A-Z</option>
      <option value="desc">Z-A</option>
      <option value="higher_price">Mayor precio</option>
      <option value="lower_price">Menor precio </option>
      <option value="best_score">Mayor puntuado</option>
      <option value="worst_score">Menor puntuado </option>
     </select>

    </div>
      <div className="CardContainer"> 
      {display ? (
        <Loader />
      ) : (        
          Array.isArray(aux) ? (
            aux?.map((e) => (
              <ProductCard
              key={e.id}
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
  
  );
};

export default ProductsContainer;

