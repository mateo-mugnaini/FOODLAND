import React from 'react'
import {categorys} from "../categorys.js"
import CategoryCard from './categoryCard'
import { NavLink } from 'react-router-dom'
import "./cards.css"

const CategoryContainer = () => {

console.log (categorys)
  return (
    <div className='CardContainer'>
      {categorys.map((e) => (
      <NavLink to={`/categorys/${e.name}`} >  
      <CategoryCard
     key={e.name}
     name={e.name}
     image={e.image}
     />  
     </NavLink>
      )
    )}</div>
  )
}

export default CategoryContainer