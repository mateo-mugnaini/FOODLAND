import React from 'react'
import {categorys} from "../categorys"
import CategoryCard from './CategoryCard'
import { NavLink } from 'react-router-dom'
import "./Cards.css"

const CardContainer = () => {

console.log (categorys)
  return (
    <div className='CardContainer'>
      {categorys.map((e) => (
      <NavLink to={`/category/${e.name}`} >  
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

export default CardContainer