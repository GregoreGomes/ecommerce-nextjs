import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import "./style.css"

const AutoPlay = () => {
  const settings = {
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    speed: 400,
    autoplaySpeed: 2000,
    cssEase: "ease",
  };

  return (
    <div className="bg-gray-200 flex">
      <div className="w-1/2 flex flex-col justify-center items-start gap-5 pl-32">
        <h1 className="text-4xl syncopate-bold text-left w-full animaTranslateY">Discover our store</h1>
        <h2 className="text-xl text-left w-3/4 animaTranslateY opacity-0 delay-1">Step into our boutique, where style awaits,
        Find fashions finest, trends that captivate,
        From chic apparel to accessories so divine,
        Discover your signature look, a true design.</h2>
        <button className="border border-black bg-gray-200 hover:bg-gray-300 text-black font-bold py-2 px-10 mt-4 text-left opacity-0 animaOpacity delay-2">Discover</button>
      </div>
      <div className="w-1/2">
        <div className="w-full overflow-x-hidden">
          <Slider {...settings}>
            <div className='w-full animaSlideIn bannerSlide1'></div>
            <div className='w-full animaSlideIn bannerSlide2'></div>
            <div className='w-full animaSlideIn bannerSlide3'></div>
          </Slider>
        </div>
      </div>
    </div>
  );
};

export default AutoPlay;
