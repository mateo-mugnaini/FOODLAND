
import React, { useEffect } from "react";
// import {categorys} from "../categorys.js"
import CategoryCard from "./categoryCard";
import { NavLink } from "react-router-dom";
import "./cards.css";
import { getAllCategories, getAllProducts } from "../../redux/actions";
import { useSelector, useDispatch } from "react-redux";
import Carrousel from "../Carrousel/Carrousel";
import oferta1 from "../../Imgs/oferta1.jpeg"

const CategoryContainer = () => {
  /* IMPORT STATES */

  const { categories } = useSelector((state) => state);

  /* DISPATCH PARA TRAER LAS CATEGORIAS */
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllCategories());
    dispatch(getAllProducts());
  }, [dispatch]);

  return (
    <div className="categoryContainer">
      <h1>Recorre nuestros productos</h1>
      <div className="breadcrumbContainer">
        <div className="breadcrumb">
          <NavLink active="true" to="/">Categories</NavLink>
        </div>
      </div>
      <div className="CardContainerCat">
      <NavLink to={'/categories/allProducts'}>
      <div className='CategoryCard'>
      <h3>All products</h3>
      <img src={oferta1} alt="imagen de categoria" />
  </div>
      </NavLink>
 
        {categories.map((e) => (
          <NavLink key={e._id} to={`/categories/${e._id}`}>
            <CategoryCard key={e._id} name={e._id} image={e.imageCategory} />
          </NavLink>
        ))}
      </div>
    </div>
  );
};

export default CategoryContainer;


