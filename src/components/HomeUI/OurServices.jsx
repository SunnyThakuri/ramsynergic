import { useState } from "react";
import Slider from "react-slick";
/* import service1 from "../../assets/HomeUI/serviceslider1.png";
import service2 from "../../assets/HomeUI/serviceslider2.png";
import service3 from "../../assets/HomeUI/serviceslider3.png";
import service4 from "../../assets/HomeUI/serviceslider4.png";
import slideright from "../../assets/HomeUI/slideright.png";
import slideleft from "../../assets/HomeUI/slideleft.png"; */
import "../../style/OurServicesSlider.css";
import { useNavigate } from "react-router-dom";
import PropTypes from "prop-types";
const OurServices = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  console.log(activeIndex);
  function SampleNextArrow(props) {
    const { onClick } = props;
    return (
      <div
        className="serviceslider right-arrow right-[50px] w-[36px] h-[36px]"
        onClick={onClick}
      >
        <p className="rotate-180 sm:text-[12px] text-[10px] text-white">
          <i className="fa-solid fa-play"></i>
        </p>
      </div>
    );
  }

  function SamplePrevArrow(props) {
    const { onClick } = props;
    return (
      <div
        className="serviceslider left-arrow right-0 md:w-[36px] w-[36px] h-[36px] md:h-[36px]"
        onClick={onClick}
      >
        <p className="text-[#00254F] sm:text-[12px] text-[10px] ">
          <i className="fa-solid fa-play"></i>
        </p>
      </div>
    );
  }
  SampleNextArrow.propTypes = {
    style: PropTypes.object,
    onClick: PropTypes.func,
  };

  SamplePrevArrow.propTypes = {
    style: PropTypes.object,
    onClick: PropTypes.func,
  };
  const settings = {
    dots: false,
    infinite: true,
    autoplay: true,
    speed: 500,
    swipeToSlide: true,
    autoplaySpeed: 2000,
    slidesToShow: 4,
    slidesToScroll: 1,
    centerMode: false,
    variableWidth: false,
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
          centerMode: true,
        },
      },
    ],
  };

  const redirect = useNavigate();
  return (
    <>
      <div className="bg-[#00254F] mt-32 pb-24 2xl:px-[166.5px] xl:px-[100px] lg:px-[80px] md:px-[50px] sm:px-[20px] px-[10px]">
        <div className="">
          <div className="heading pt-24 border-b-2 border-b-[#B2AFAF] pb-24 md:pb-5 flex justify-between">
            <h1 className="text-[#F7F7F7] text-2xl md:text-3xl font-semibold">
              Sectors And Industries Served
            </h1>
          </div>
        </div>

        <Slider {...settings} className="mt-12 h-[400px]   relative">
          <div
            className={` md:w-fit group    pb-16  md:pl-5 pl-4 h-full  cursor-pointer  `}
          >
            <div
              className="image overflow-hidden block w-[290px] h-[300px]"
              onClick={() => redirect("/services")}
            >
              <img
                className="h-full w-full object-cover hover:scale-105 ease-in duration-150 cursor-pointer"
                src="/industryServed/Hospitality.png"
                alt="hospitality"
              />
            </div>
            <h1 className="text-[#F7F7F7] text-base md:text-lg lg:text-xl font-medium mt-4">
              Hospitality
            </h1>
          </div>
          {/* new added */}
          <div
            className={`slider2 group md:pl-5 pl-4 cursor-pointer `}
            onClick={() => redirect("/services")}
          >
            <div className="image overflow-hidden block w-[290px] h-[300px]">
              <img
                className="h-full w-full object-cover hover:scale-105 ease-in duration-150 cursor-pointer"
                src="/industryServed/security.jpg"
                alt="Manpower Station"
              />
            </div>
            <h1 className="text-[#F7F7F7] text-base md:text-lg lg:text-xl font-medium mt-4">
              Security
            </h1>
          </div>
          <div
            className={`slider3 group md:pl-5 pl-4 cursor-pointer `}
            onClick={() => redirect("/services")}
          >
            <div className="image overflow-hidden block w-[290px] h-[300px]">
              <img
                className="h-full w-full hover:scale-105 ease-in duration-150 cursor-pointer"
                src="/industryServed/driving.jpg"
                alt="Manpower Station"
              />
            </div>
            <h1 className="text-[#F7F7F7] text-base md:text-lg lg:text-xl font-medium mt-4">
              Driving
            </h1>
          </div>
          {/* old */}
          <div
            className={`slider4 group md:pl-5 pl-4 cursor-pointer `}
            onClick={() => redirect("/services")}
          >
            <div className="image overflow-hidden block w-[290px] h-[300px]">
              <img
                className="h-full w-full hover:scale-105 object-cover ease-in duration-150 cursor-pointer"
                src="/industryServed/warehouse.jpg"
                alt="Expert Recruitment"
              />
            </div>
            <h1 className="text-[#F7F7F7] text-base md:text-lg lg:text-xl font-medium mt-4">
              Warehouse
            </h1>
          </div>

          <div
            className={`slider6 group md:pl-5 pl-4 cursor-pointer `}
            onClick={() => redirect("/services")}
          >
            <div className="image overflow-hidden block w-[290px] h-[300px]">
              <img
                className="h-full w-full hover:scale-105 ease-in duration-150 cursor-pointer"
                src="/industryServed/factory.jpg"
                alt="Consulting Services"
              />
            </div>
            <h1 className="text-[#F7F7F7] text-base md:text-lg lg:text-xl font-medium mt-4">
              Factories & Industries
            </h1>
          </div>

          <div
            className={`slider7 group md:pl-5 pl-4 cursor-pointer `}
            onClick={() => redirect("/services")}
          >
            <div className="image overflow-hidden block w-[290px] h-[300px]">
              <img
                className="h-full  w-full hover:scale-105 ease-in duration-150 cursor-pointer"
                src="/industryServed/telecommunication.jpg"
                alt="Talent Acquisition"
              />
            </div>
            <h1 className="text-[#F7F7F7] text-base md:text-lg lg:text-xl font-medium mt-4">
              Telecommunication
            </h1>
          </div>
          <div
            className={`slider8 group md:pl-5 pl-4 cursor-pointer `}
            onClick={() => redirect("/services")}
          >
            <div className="image overflow-hidden block w-[290px] h-[300px]">
              <img
                className="h-full w-full object-cover hover:scale-105 ease-in duration-150 cursor-pointer"
                src="/industryServed/construction.jpg"
                alt="Talent Acquisition"
              />
            </div>
            <h1 className="text-[#F7F7F7] text-base md:text-lg lg:text-xl font-medium mt-4">
              Construction
            </h1>
          </div>
          <div
            className={`slider9 group md:pl-5 pl-4 cursor-pointer `}
            onClick={() => redirect("/services")}
          >
            <div className="image overflow-hidden block w-[290px] h-[300px]">
              <img
                className="h-full w-full hover:scale-105 ease-in duration-150 cursor-pointer"
                src="/industryServed/finance.jpg"
                alt="Talent Acquisition"
              />
            </div>
            <h1 className="text-[#F7F7F7] text-base md:text-lg lg:text-xl font-medium mt-4">
              Finance
            </h1>
          </div>
        </Slider>

        <div className="btn flex justify-end -mt-8 md:mt-6">
          <button className="text-white text-sm md:text-base border-[1.5px] border-white rounded-lg flex px-5 py-2">
            Read More{" "}
            <p className="ml-3">
              <i className="fa-solid fa-arrow-right"></i>
            </p>
          </button>
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
/* 

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
          <div className={`slider1 group md:pl-5 pl-4 cursor-pointer ${getSlideClassName(0)}`}>
            <div className="image overflow-hidden block">
              <img className='h-60 md:h-72 lg:h-80 w-full hover:scale-105 ease-in duration-150 cursor-pointer' src={service1} alt="Manpower Station" />
            </div>
            <h1 className="text-[#F7F7F7] text-base md:text-lg lg:text-xl font-medium mt-4">Manpower Solutions</h1>
          </div>
     
          <div className={`slider1 group md:pl-5 pl-4 cursor-pointer ${getSlideClassName(0)}`}>
            <div className="image overflow-hidden block">
              <img className='h-60 md:h-72 lg:h-80 w-full hover:scale-105 ease-in duration-150 cursor-pointer' src={service1} alt="Manpower Station" />
            </div>
            <h1 className="text-[#F7F7F7] text-base md:text-lg lg:text-xl font-medium mt-4">Training & Developement Programs</h1>
          </div>
          <div className={`slider1 group md:pl-5 pl-4 cursor-pointer ${getSlideClassName(0)}`}>
            <div className="image overflow-hidden block">
              <img className='h-60 md:h-72 lg:h-80 w-full hover:scale-105 ease-in duration-150 cursor-pointer' src={service1} alt="Manpower Station" />
            </div>
            <h1 className="text-[#F7F7F7] text-base md:text-lg lg:text-xl font-medium mt-4">Innovative Technology Solutions</h1>
          </div>

          <div className={`slider2 group md:pl-5 pl-4 cursor-pointer ${getSlideClassName(1)}`}>
            <div className="image overflow-hidden block">
              <img className='h-60 md:h-72 lg:h-80 w-full hover:scale-105 ease-in duration-150 cursor-pointer' src={service2} alt="Expert Recruitment" />
            </div>
            <h1 className="text-[#F7F7F7] text-base md:text-lg lg:text-xl font-medium mt-4">Expert Recruitment in GCC & Europe</h1>
          </div>

          <div className={`slider3 group md:pl-5 pl-4 cursor-pointer ${getSlideClassName(2)}`}>
            <div className="image overflow-hidden block">
              <img className='h-60 md:h-72 lg:h-80 w-full hover:scale-105 ease-in duration-150 cursor-pointer' src={service3} alt="Consulting Services" />
            </div>
            <h1 className="text-[#F7F7F7] text-base md:text-lg lg:text-xl font-medium mt-4">Consulting Services</h1>
          </div>

          <div className={`slider4 group md:pl-5 pl-4 cursor-pointer ${getSlideClassName(3)}`}>
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
          height: 300px !important; /* Increase height for the big slides 
        }
      `}</style>
    </>
  );
};

export default OurServices;

*/
