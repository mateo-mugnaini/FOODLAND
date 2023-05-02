import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import Loader from "../../Components/Loader/Loader";
import "../../Components/Cards/cards.css"
import { NavLink } from "react-router-dom";
import ProductCard from "../../Components/Cards/productCard";
import Filters from "../../Components/Cards/Filters";
import { handle_sorts2 } from "../../redux/actions";

//IMPORT ACTIONS

const ProductsSearch = () => {
  const dispatch = useDispatch();
  /* IMPORT STATES */
  const { products, display } = useSelector((state) => state);

  /* PAGINADO */
  const [numeroPagina, setNumeroPagina] = useState(1);

  const grupo = 5;
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

  /* FUNCION DE ORDENAMIENTO  */

  function handleSorts(e) {
    e.preventDefault();
    dispatch(handle_sorts2(e.target.value));
  }

  return (
    <div className="productsContainer">
      <div className="select_and_breadcrumb">
        <div className="breadcrumb">
          <NavLink to="/">Categories</NavLink>
          {/*   
                  <NavLink className="active" to={`/categories/${categoriesId}`}>
                    CATEGORY NAME   
                   </NavLink>         */}
        </div>
        <select className="selectInput" onChange={handleSorts}>
          <option value="">Ordenar por</option>
          <option value="asc">A-Z</option>
          <option value="desc">Z-A</option>
          <option value="higher_price">Mayor precio</option>
          <option value="lower_price">Menor precio </option>
          <option value="best_score">Mayor puntuado</option>
          <option value="worst_score">Menor puntuado </option>
        </select>
      </div>
      <div className="filter_and_products">
      <div className="sidebar"> 
      <Filters/>
      </div>
        <div className="CardContainerProd">
        <div className="products">
          {display ? (
            <Loader />
          ) : Array.isArray(aux) ? (
            aux?.map((e) => (
              <ProductCard
                key={e._id}
                id={e._id}
                name={e.name}
                price={e.price}
                image={e.image}
                rating={e.rating}
                numReviews={e.numReviews}
              />
            ))
          ) : (
            <p>Sin productos</p>
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
    </div>
    </div>
  );
};

export default ProductsSearch;
