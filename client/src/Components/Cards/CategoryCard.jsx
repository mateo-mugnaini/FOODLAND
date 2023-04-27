import React from 'react'
import { NavLink } from 'react-router-dom'
import "./Cards.css"

const CategoryCard = ({name,image}) => {
  return (
      <div className='CategoryCard'>
      
        <h3>{name}</h3>
        <img src={image} alt="imagen de categoria" />
   
    </div>
  )
}

export default CategoryCard