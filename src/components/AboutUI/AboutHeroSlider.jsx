import { useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "../../style/AboutSlider.css";
import arrow from "../../assets/HomeUI/arrow.png";
const AboutHeroSlider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  function SampleNextArrow(props) {
    const { onClick } = props;
    return (
      <div
        className="slick-arrow next-arrow 2xl:right-[212px] xl:right-[148px] lg:right-[126px] md:right-[98px] sm:right-[114px] right-[55px]  xl:bottom-[120px] lg:bottom-[100px] bottom-[95px] md:w-[36px] w-[26px] h-[26px] md:h-[36px]"
        onClick={onClick}
      >
        <p className="rotate-180 sm:text-[12px] text-[10px] text-white  "><i className="fa-solid fa-play"></i></p>
      </div>
    );
  }

  function SamplePrevArrow(props) {
    const { onClick } = props;
    return (
      <div
        className="slick-arrow prev-arrow 2xl:right-[166.5px] xl:right-[100px] lg:right-[80px] md:right-[50px] sm:right-[80px] right-[20px]  xl:bottom-[120px] lg:bottom-[100px] bottom-[95px] md:w-[36px] w-[26px] h-[26px] md:h-[36px]"
        onClick={onClick}
      >
        <p className="text-[#9A5A36] sm:text-[12px] text-[10px] "><i className="fa-solid fa-play"></i></p>
      </div>
    );
  }

  const settings = {
    dots: false,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 2000,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    afterChange: (current) => setCurrentSlide(current),
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 0,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <>
      <div className="relative">
        <div className="absolute z-30 xl:bottom-[100px] lg:bottom-[80px] bottom-[80px] 2xl:right-[166.5px] xl:right-[100px] lg:right-[80px] md:right-[50px] sm:right-[80px] right-[20px]   2xl:left-[166.5px] xl:left-[100px] lg:left-[80px] md:left-[50px] sm:left-[80px] left-[20px]">
          <div className="relative w-full h-1 bg-gray-400">
            <div
              className={`absolute top-0 left-0 h-1 bg-[#F7F7F7] transition-width duration-500 ease-in-out`}
              style={{ width: `${(currentSlide + 1) * 33.33}%` }}
            />
          </div>
        </div>

        <Slider {...settings} className="w-full font-Poppins">
          <div className="slider__item-01 h-[300px] lg:h-[564px] flex items-center justify-start">
            <div className="slider__content 2xl:pl-[166.5px] xl:pl-[100px] lg:pl-[80px] md:pl-[50px] sm:pl-[50px] pl-[10px] pt-5 lg:pt-[128px]">
              <h1 className="text-[#cee2f1] text-[24px] lg:text-[58px] font-bold">
                Unlocking Opportunities,
              </h1>
              <h1 className="text-[24px] lg:text-[58px] -mt-2 lg:-mt-[17px] text-white font-bold">
                Empowering Careers
              </h1>
              <p className="text-[#D9D9D9] font-semibold">
                Get to Work With the Leading Recruitment Agency in UAE
              </p>
              <div className="btn pt-4 lg:pt-10">
                <button className="bg-white flex items-center w-[120px] lg:w-[150px] lg:pl-[21.5px] pl-2 py-2 lg:text-[16px] text-[12px] lg:py-[12px] text-[#00264F] rounded-[8px]">
                  Apply Now
                  <img
                    className="w-4 h-2 lg:w-[20px] lg:h-[10px] ml-2 lg:ml-3"
                    src={arrow}
                    alt="arrow"
                  />
                </button>
              </div>
            </div>
          </div>

          {/* -----------slider02----------------- */}
          <div className="slider__item-02 h-[300px] lg:h-[564px] flex items-center justify-start">
            <div className="slider__content  2xl:pl-[166.5px] xl:pl-[100px] lg:pl-[80px] md:pl-[50px] sm:pl-[50px] pl-[10px] pt-5 lg:pt-[128px]">
              <h1 className="text-[#84CCFF] text-[24px] lg:text-[58px] font-bold">
                Unlocking Opportunities,
              </h1>
              <h1 className="text-[24px] lg:text-[58px] -mt-2 lg:-mt-[17px] text-white font-bold">
                Empowering Careers
              </h1>
              <p className="text-[#D9D9D9] font-semibold">
                Get to Work With the Leading Recruitment Agency in UAE
              </p>
              <div className="btn pt-4 lg:pt-10">
                <button className="bg-white flex items-center w-[120px] lg:w-[150px] lg:pl-[21.5px] pl-2 py-2 lg:text-[16px] text-[12px] lg:py-[12px] text-[#00264F] rounded-[8px]">
                  Apply Now
                  <img
                    className="w-4 h-2 lg:w-[20px] lg:h-[10px] ml-2 lg:ml-3"
                    src={arrow}
                    alt="arrow"
                  />
                </button>
              </div>
            </div>
          </div>

          {/* -----------slider03----------------- */}
          <div className="slider__item-03 h-[300px]  lg:h-[564px] flex items-center justify-start">
            <div className="slider__content 2xl:pl-[166.5px] xl:pl-[100px] lg:pl-[80px] md:pl-[50px] sm:pl-[50px] pl-[10px]  pt-5 lg:pt-[128px]">
              <h1 className="text-[#84CCFF] text-[24px] lg:text-[58px] font-bold">
                Unlocking Opportunities,
              </h1>
              <h1 className="text-[24px] lg:text-[58px] -mt-2 lg:-mt-[17px] text-white font-bold">
                Empowering Careers
              </h1>
              <p className="text-[#D9D9D9] font-semibold">
                Get to Work With the Leading Recruitment Agency in UAE
              </p>
              <div className="btn pt-4 lg:pt-10">
                <button className="bg-white flex items-center w-[120px] lg:w-[150px] lg:pl-[21.5px] pl-2 py-2 lg:text-[16px] text-[12px] lg:py-[12px] text-[#00264F] rounded-[8px]">
                  Apply Now
                  <img
                    className="w-4 h-2 lg:w-[20px] lg:h-[10px] ml-2 lg:ml-3"
                    src={arrow}
                    alt="arrow"
                  />
                </button>
              </div>
            </div>
          </div>
        </Slider>
      </div>
    </>
  );
};

export default AboutHeroSlider;
