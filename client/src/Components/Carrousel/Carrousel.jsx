import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import "./Carrousel.css";

const Carrousel = () => {
  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    speed: 2000,
    autoplaySpeed: 2000,
    cssEase: "linear",

  };

  return (
    <div className="carrousel">
   
      <Slider {...settings}>
        <div>
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR1b5_s5G5SIFZFOEFGNKiiSx-DJBkMqwx2SQ&usqp=CAU" alt="" />
        </div>
        <div>
          <img src="https://productosyofertas.com/wp-content/uploads/logo-productos-ofertas.png" />
        </div>
        <div>
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR1b5_s5G5SIFZFOEFGNKiiSx-DJBkMqwx2SQ&usqp=CAU" alt="" />
        </div>
        <div>
          <img src="https://productosyofertas.com/wp-content/uploads/logo-productos-ofertas.png" alt="" />
        </div>
        <div>
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR1b5_s5G5SIFZFOEFGNKiiSx-DJBkMqwx2SQ&usqp=CAU" alt="" />
        </div>
        <div>
          <img src="https://productosyofertas.com/wp-content/uploads/logo-productos-ofertas.png" alt="" />
        </div>
      </Slider>
    </div>
  );
};

export default Carrousel;