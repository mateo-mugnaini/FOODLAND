import React, {  useEffect, useState} from "react";
import { useSelector, useDispatch } from "react-redux";
import  "./DetailCard.css"
import { useParams, NavLink } from "react-router-dom"
import Rating from '../../Components/Rating/rating'
import "../Detail/DetailCard.css"
import Swal from 'sweetalert2'
import returnPolicyPopup from "../../Texts/returnPolicyPopup.txt"
import {getDetail} from "../../redux/actions"
import useLocalStore from "../../hooks/useLocalStore";


const DetailCard = () => {
  const { id } = useParams();
  const decodedName = decodeURI(id);
  const {product} = useSelector((state) => state.products)

  
  // const product = products.find((product) => product.name === decodedName);
  const dispatch = useDispatch();

  
  useEffect(() => {
    dispatch(getDetail(decodedName));
  }, [dispatch,decodedName]);
  
  // ======== Agregar productos al carrito====
  const [quantity, setQuantity] = useState(1);
  const [Cart, setCart] = useLocalStore( "Carrito", []);

  const handleAddToCart = () => {

      const existingItem = Cart.find((item) => item.id === id);
  
      if (existingItem) {
        const updatedCart = Cart.filter((item) => item.id !== id);
        const updatedQuantity = existingItem.quantity + quantity;
  
        setCart([...updatedCart, { ...existingItem, quantity: updatedQuantity , slug:existingItem.slug || existingItem.name}]);
      } else {
        setCart([...Cart, { id, name: product.name, description: product.description, price: product.price, image: product.image, quantity ,slug:product.slug || product.name}]);
      }
    };

    const showLegalInfo = () => {
      fetch(returnPolicyPopup)
      .then((response) => response.text())
      .then((data) => {
        Swal.fire({
          title: 'Supermarket Purchase Agreement',
          text:data,
          confirmButtonText: 'OK'
        })
      });
     
    }

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
        <img src={product.image} alt={product.name} />
      </div>
      <div className='detail-info'>
        <h4>{product.brand}</h4>
        <h1>{product.name}</h1>
        <h4>({product.price} x 1K )</h4>
        <h2>${product.price}</h2>
        <span ><Rating rating={product.rating} numReviews={product.numReviews}/></span>
        <div className="contador">
        <button onClick={() => setQuantity(quantity - 1)}  disabled={quantity <= 1}>-</button>
            <p>{quantity}</p>
            <button onClick={() => setQuantity(quantity + 1)}>+</button>
            </div>

         <button className="addButton" onClick={handleAddToCart}>Add Product</button>
        
        <button className='returnButton' onClick={showLegalInfo}>Cambios y devoluciones →</button>
      </div>

    </div>
  </div>
  )
}

export default DetailCard
