import React, {useEffect} from 'react'
import {categorys} from "../categorys.js"
import CategoryCard from './categoryCard'
import { NavLink } from 'react-router-dom'
import "./cards.css"
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
    <div className='CardContainer'>
    <div className='Breadcrumb'>
<div className='bc-item'>
  <a href="../../dashboard/default">CATEGORIES</a>
</div>

</div>
      {categories.map((e) => (
      <NavLink to={`/categories/${e}`} >  
      <CategoryCard
     key={e}
     name={e._id}
     image={e.imageCategory}
     />  
     </NavLink>
      )
    )}</div>
  )
}

export default CategoryContainer