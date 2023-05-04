import React, {  useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import  "./DetailCard.css"
import { useParams, NavLink } from "react-router-dom"
// import { products } from "../../Components/products"
import Rating from '../../Components/Rating/rating'
import "../Detail/DetailCard.css"

import {getDetail} from "../../redux/actions"

const DetailCard = () => {
  const { id } = useParams();
  const decodedName = decodeURI(id);
  const {product} = useSelector((state) => state.products)
  
  // const product = products.find((product) => product.name === decodedName);
  const dispatch = useDispatch();


  useEffect(() => {
    dispatch(getDetail(decodedName));
  }, [dispatch,decodedName]);

  return (
    <div className='DetailCardCont'>
      <div className="breadcrumb">
                <NavLink to="/">
                  Categories
                  </NavLink>
                  <p>/</p>
                 <NavLink  to={`/categories/${product.category}`}>
                  {product.category}   
                 </NavLink>
                 <p>/</p>    
                 <NavLink active="true" to={`/detail/${product["_id"]}`}>
                  {product.name}
                 </NavLink>    
      </div>
    
    <div className='DetailCard'>
      <div className='detail-img'>
        <img src={product.image} alt="azucar ledesma" />
      </div>
      <div className='detail-info'>
        <h4>{product.brand}</h4>
        <h1>{product.name}</h1>
        <h4>({product.price} x 1K )</h4>
        <h2>${product.price}</h2>
        <span ><Rating rating={product.rating} numReviews={product.numReviews}/></span>
        <div className="contador">
                <button>-</button>
                1
                <button>+</button>
            </div>
        <button className='addButton'>ADD TO CART</button>
        <button className='returnButton'>Cambios y devoluciones →</button>
      </div>

    </div>
  </div>
  )
}

export default DetailCard
