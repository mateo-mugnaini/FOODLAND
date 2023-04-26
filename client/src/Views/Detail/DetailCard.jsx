import React from 'react'
import azucar from "../../Imgs/azucar.jpg"
import  "./DetailCard.css"

const DetailCard = () => {
  return (
    <div className='DetailCard'>
      
      <div className='detail-img'>
        <img src={azucar} alt="azucar ledesma" />
      </div>
      <div className='detail-info'>
        <h4>LEDESMA</h4>
        <h1>Azúcar Ledesma molida superior bolsa 1 kg.</h1>
        <h4>($314,00 x 1K )</h4>
        <h2>$314</h2>
        <button className='addButton'>ADD TO CART</button>
        <button className='returnButton'>Cambios y devoluciones →</button>
      </div>

    </div>
  )
}

export default DetailCard