import React, { useState } from 'react';
import Slider from 'react-slick';
import service1 from "../../assets/HomeUI/serviceslider1.png";
import service2 from "../../assets/HomeUI/serviceslider2.png";
import service3 from "../../assets/HomeUI/serviceslider3.png";
import service4 from "../../assets/HomeUI/serviceslider4.png";
import slideright from "../../assets/HomeUI/slideright.png"
import slideleft from "../../assets/HomeUI/slideleft.png"
import "../../style/OurServicesSlider.css"

const OurServices = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  function SampleNextArrow(props) {
    const { onClick } = props;
    return (
      <div
        className="serviceslider right-arrow  right-[50px] w-[36px] h-[36px]"
        onClick={onClick}
      >
        <p className="rotate-180 sm:text-[12px] text-[10px] text-white"><i className="fa-solid fa-play"></i></p>
      </div>
    );
  }

  function SamplePrevArrow(props) {
    const { onClick } = props;
    return (
      <div
        className="serviceslider left-arrow right-0 md:w-[36px] w-[26px] h-[26px] md:h-[36px]"
        onClick={onClick}
      >
        <p className="text-[#00254F] sm:text-[12px] text-[10px] "><i className="fa-solid fa-play"></i></p>
      </div>
    );
  }


  const settings = {
    dots: false,
    infinite: true,
    autoplay: false,
    speed: 1000,
    swipeToSlide: true,
    autoplaySpeed: 2000,
    slidesToShow: 4,
    slidesToScroll: 1,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    beforeChange: (current, next) => setActiveIndex(next),
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
          dots: false,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
        },
      },
    ],
  };

  const getSlideClassName = (index) => {
    const position = (index - activeIndex + settings.slidesToShow) % settings.slidesToShow;
    return position === 0 || position === 2 ? 'big-slide' : '';
  };

  return (
    <>
      <div className="bg-[#00254F] mt-32 pb-24 2xl:px-[166.5px] xl:px-[100px] lg:px-[80px] md:px-[50px] sm:px-[20px] px-[10px]">
        <div className="Development Slider_section">
          <div className="heading pt-24 border-b-2 border-b-[#B2AFAF] pb-5 flex justify-between">
            <h1 className="text-[#F7F7F7] text-2xl md:text-3xl font-semibold">Our Services</h1>
          </div>
        </div>

        <Slider {...settings} className='mt-12 relative'>
          <div className={`slider1 group pl-2 md:pl-5 cursor-pointer ${getSlideClassName(0)}`}>
            <div className="image overflow-hidden block">
              <img className='h-60 md:h-72 lg:h-80 w-full hover:scale-105 ease-in duration-150 cursor-pointer' src={service1} alt="Manpower Station" />
            </div>
            <h1 className="text-[#F7F7F7] text-base md:text-lg lg:text-xl font-medium mt-4">Manpower Station</h1>
          </div>

          <div className={`slider2 group pl-2 md:pl-5 cursor-pointer ${getSlideClassName(1)}`}>
            <div className="image overflow-hidden block">
              <img className='h-60 md:h-72 lg:h-80 w-full hover:scale-105 ease-in duration-150 cursor-pointer' src={service2} alt="Expert Recruitment" />
            </div>
            <h1 className="text-[#F7F7F7] text-base md:text-lg lg:text-xl font-medium mt-4">Expert Recruitment</h1>
          </div>

          <div className={`slider3 group pl-2 md:pl-5 cursor-pointer ${getSlideClassName(2)}`}>
            <div className="image overflow-hidden block">
              <img className='h-60 md:h-72 lg:h-80 w-full hover:scale-105 ease-in duration-150 cursor-pointer' src={service3} alt="Consulting Services" />
            </div>
            <h1 className="text-[#F7F7F7] text-base md:text-lg lg:text-xl font-medium mt-4">Consulting Services</h1>
          </div>

          <div className={`slider4 group pl-2 md:pl-5 cursor-pointer ${getSlideClassName(3)}`}>
            <div className="image overflow-hidden block">
              <img className='h-60 md:h-72 lg:h-80 w-full hover:scale-105 ease-in duration-150 cursor-pointer' src={service4} alt="Talent Acquisition" />
            </div>
            <h1 className="text-[#F7F7F7] text-base md:text-lg lg:text-xl font-medium mt-4">Talent Acquisition</h1>
          </div>
        </Slider>

        <div className="btn flex justify-end mt-6">
          <button className='text-white text-sm md:text-base border-[1.5px] border-white rounded-lg flex px-5 py-2'>Read More <p className='ml-3'><i className="fa-solid fa-arrow-right"></i></p></button>
        </div>
      </div>
      <style jsx>{`
        .big-slide .image img {
          height: 300px !important; /* Increase height for the big slides */
        }
      `}</style>
    </>
  );
};

export default OurServices;
