import React from 'react'
import "./DetailCard.css"
import azucar from "../../Imgs/azucar.jpg"

const DetailCard = () => {
  return (
    <div className='DetailCard'>
        <div className='detail-img'>
          <img src={azucar} alt="azucar ledesma" />
        </div>
        <div className='detail-info'>
         <h1>Azúcar Ledesma clasica bolsa 1 kg.</h1>
         <h4> ( $314,00 x 1k ) </h4>
         <h2> $ 314 </h2>
         <button className='addButton'>ADD TO CART</button>
         <button className='returnButton'>Cambios y devoluciones → </button>
        </div>
    </div>
  )
}

export default DetailCard