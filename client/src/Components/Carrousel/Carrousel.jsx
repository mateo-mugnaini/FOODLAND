import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./Carrousel.css";
import oferta1 from "../../Imgs/oferta1.jpeg"
import oferta2 from "../../Imgs/oferta2.png"

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
          <img src={oferta1} alt="" />
        </div>
        <div>
          <img src={oferta2} />
        </div>
        <div>
          <img src={oferta1} alt="" />
        </div>
        <div>
          <img src={oferta2} alt="" />
        </div>
        <div>
          <img src={oferta1} alt="" />
        </div>
        <div>
          <img src={oferta2} alt="" />
        </div>
      </Slider>
    </div>
  );
};

export default Carrousel;