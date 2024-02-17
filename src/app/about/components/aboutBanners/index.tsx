// Carousel.js

import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './styles.css';

const Carousel = () => {
  const settings = {
    dots: false,
    fade: true,
    infinite: true,
    speed: 1,
    slidesToShow: 1,
    slidesToScroll: 1,
    waitForAnimate: false,
    autoplay: true,
    autoplaySpeed: 2000,
    cssEase: "linear"
  };

  return (
    <div className="carousel-container overflow-x-hidden bg-gray-200">
      <h1 className="about-us-text animaOpacity delay-1 opacity-0 syncopate-bold">About Us</h1>
      <Slider {...settings}>
        <div className='w-full bannerFadeAbout1'></div>
        <div className='w-full bannerFadeAbout2'></div>
        <div className='w-full bannerFadeAbout3'></div>
      </Slider>
    </div>
  );
}

export default Carousel;
