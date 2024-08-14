import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "../../style/SuccessStories.css";
import user1 from "../../assets/HomeUI/successUser.png"
import user2 from "../../assets/HomeUI/successUser2.jpg"
import user3 from "../../assets/HomeUI/successUser3.jpg"
import user4 from "../../assets/HomeUI/successUser4.jpg"


const CustomSlider = () => {
  function SampleNextArrow(props) {
    const { onClick } = props;
    return (
      <div
        className="successStories forward-arrow  right-0 md:w-[36px] w-[26px] h-[26px] md:h-[36px]"
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
        className="successStories backward-arrow right-0 md:w-[36px] w-[26px] h-[26px] md:h-[36px]"
        onClick={onClick}
      >
        <p className="text-[#00254F] sm:text-[12px] text-[10px] "><i className="fa-solid fa-play"></i></p>
      </div>
    );
  }

  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 1.5,
    slidesToScroll: 1,
    centerMode: true,
    centerPadding: '0',
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />
  };

  return (
    <>
      <div className="bg-[#00254F] mt-[124px] flex">

        <Slider {...settings} className="w-[60%] gap-5 overflow-hidden pt-[87px] rounded-[20px] pb-[127px] mr-[20px]">

          <div className="slide01 w-[607px] border-[10px] border-[#00254F]  h-[413px] rounded-[12px] bg-white  ">
            <div className="img flex justify-center pt-[60px]">
              <img src={user1} alt="" />
            </div>
            <h1 className="text-center pt-3 text-[22px] text-[#2C2C2C] font-semibold">Rome Vuyvt</h1>
            <h1 className="text-center pt-3">Driver at Tyuv Ine / Poland </h1>
            <p className="text-center text-[#333333] pt-5 px-[80px]">With their extensive network and industry expertise, they opened doors to opportunities I never knew existed, propelling my career to new heights.</p>
          </div>


          <div className="slide01 border-[10px] border-[#00254F] w-[607px] h-[413px] rounded-[12px] bg-white  ">
            <div className="img flex justify-center pt-[60px]">
              <img className="rounded-full w-[95px] h-[95px]" src={user2} alt="" />
            </div>
            <h1 className="text-center pt-3 text-[22px] text-[#2C2C2C] font-semibold">test</h1>
            <h1 className="text-center pt-3">Driver at Tyuv Ine / Poland </h1>
            <p className="text-center text-[#333333] pt-5 px-[80px]">With their extensive network and industry expertise, they opened doors to opportunities I never knew existed, propelling my career to new heights.</p>
          </div>



          <div className="slide01 border-[10px] border-[#00254F] w-[607px] h-[413px] rounded-[12px] bg-white ">
            <div className="img flex justify-center pt-[60px]">
              <img className="rounded-full w-[95px] h-[95px]" src={user3} alt="" />
            </div>
            <h1 className="text-center pt-3 text-[22px] text-[#2C2C2C] font-semibold">Jhon Doe</h1>
            <h1 className="text-center pt-3">Driver at Tyuv Ine / Poland </h1>
            <p className="text-center text-[#333333] pt-5 px-[80px]">With their extensive network and industry expertise, they opened doors to opportunities I never knew existed, propelling my career to new heights.</p>
          </div>




          <div className="slide01 border-[10px] border-[#00254F] w-[607px] h-[413px] rounded-[12px] bg-white ">
            <div className="img flex justify-center pt-[60px]">
              <img className="rounded-full w-[95px] h-[95px]]" src={user4} alt="" />
            </div>
            <h1 className="text-center pt-3 text-[22px] text-[#2C2C2C] font-semibold">David</h1>
            <h1 className="text-center pt-3">Driver at Tyuv Ine / Poland </h1>
            <p className="text-center text-[#333333] pt-5 px-[80px]">With their extensive network and industry expertise, they opened doors to opportunities I never knew existed, propelling my career to new heights.</p>
          </div>


        </Slider>

        <div className="right_side  pt-[154px] pl-[50px] font-Poppins">
          <h1 className="text-[#F7F7F7] font-semibold text-[32px]">Our Success Stories</h1>
          <p className="text-[#F7F7F7] w-[363px] pt-[16px]">Our legal experts guide clients through
            a seamless relocation process, leveraging global resources and immigration expertise.</p>
        </div>
      </div>
    </>
  );
};

export default CustomSlider;
