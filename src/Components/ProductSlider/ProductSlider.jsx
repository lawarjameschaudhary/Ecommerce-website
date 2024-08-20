import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";



const ProductSlider = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
  };

  return (
    <Slider {...settings}>
      <div>
        <img src="./src/assets/shopping.jpg" alt="Shopping" className="w-full" />
      </div>
      <div>
        <img src="./src/assets/shopping2.jpg" alt="Another" className="w-full" />
      </div>
      <div>
        <img src="./src/assets/shopping3.jpg" alt="Another" className="w-full" />
      </div>
      <div>
        <img src="./src/assets/shopping4.jpg" alt="Another" className="w-full" />
      </div>
    </Slider>
  );
}

export default ProductSlider;
