import React, { useEffect } from "react";
// import {categorys} from "../categorys.js"
import CategoryCard from "./categoryCard";
import { NavLink } from "react-router-dom";
import "./cards.css";
import { getAllCategories } from "../../redux/actions";
import { useSelector, useDispatch } from "react-redux";

const CategoryContainer = () => {
  /* IMPORT STATES */

  const { categories } = useSelector((state) => state);

  /* DISPATCH PARA TRAER LAS CATEGORIAS */
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllCategories());
  }, [dispatch]);

  return (
    <div className="categoryContainer">
      <h1>Recorre nuestros productos</h1>
      <div className="breadcrumbContainer">
        <div className="breadcrumb">
          <NavLink to="/">Categories</NavLink>
        </div>
      </div>
      <div className="CardContainerCat">
        {categories.map((e) => (
          <NavLink to={`/categories/${e._id}`}>
            <CategoryCard key={e} name={e._id} image={e.imageCategory} />
          </NavLink>
        ))}
      </div>
    </div>
  );
};

export default CategoryContainer;
