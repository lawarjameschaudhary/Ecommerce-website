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
    responsive: [
      {
        breakpoint: 1024, // For large screens
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 768, // For tablets
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 480, // For mobile screens
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <Slider {...settings}>
      <div>
        <img src="./src/assets/shopping.jpg" alt="Shopping" className="w-full h-auto object-cover" />
      </div>
      <div>
        <img src="./src/assets/shopping2.jpg" alt="Another" className="w-full h-auto object-cover" />
      </div>
      <div>
        <img src="./src/assets/shopping3.jpg" alt="Another" className="w-full h-auto object-cover" />
      </div>
      <div>
        <img src="./src/assets/shopping4.jpg" alt="Another" className="w-full h-auto object-cover" />
      </div>
    </Slider>
  );
}

export default ProductSlider;
