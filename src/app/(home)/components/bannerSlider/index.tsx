import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const AutoPlay = () => {
  const settings = {
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    speed: 1000,
    autoplaySpeed: 5000,
    cssEase: "ease-in-out"
  };

  return (
    <div className="w-full">
      <Slider {...settings}>
        <div className='w-full bannerSlide1'>
        </div>
        <div className='w-full bannerSlide2'>
        </div>
        <div className='w-full bannerSlide3'>
        </div>

      </Slider>
    </div>
  );
};

export default AutoPlay;
