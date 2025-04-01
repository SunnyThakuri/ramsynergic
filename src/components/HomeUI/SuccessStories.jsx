import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "../../style/SuccessStories.css";


const success = [
  "/New folder/uae1.jpg",
  "/New folder/uae2.jpg",
  "/New folder/uae3.jpg",
  "/New folder/uae4.jpg",

]

const CustomSlider = () => {
  function SampleNextArrow(props) {
    const { onClick } = props;
    return (
      <div
        className="successStories hidden md:block forward-arrow bg-[#00254F]  right-12 md:w-[36px] w-[26px] h-[26px] md:h-[36px]"
        onClick={onClick}
      >
        <p className="rotate-180 relative top-1.5 right-3.5 sm:text-[12px] text-[10px] text-white  ">
          <i className="fa-solid fa-play"></i>
        </p>
      </div>
    );
  }

  function SamplePrevArrow(props) {
    const { onClick } = props;
    return (
      <div
        className="successStories hidden md:block border-[#00254F] border-[1px] backward-arrow right-0 md:w-[36px] w-[26px] h-[26px] md:h-[36px]"
        onClick={onClick}
      >
        <p className="text-[#00254F] relative top-2.5 left-3.5 sm:text-[12px] text-[10px] ">
          <i className="fa-solid fa-play"></i>
        </p>
      </div>
    );
  }

  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
    centerMode: false,
    centerPadding: "",
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    responsive: [
      {
        breakpoint: 768, // For devices with width <= 768px
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          centerMode: true,
          centerPadding: "50px", // Adjust padding as needed
        },
      },
    ],
  };

  return (
    <>
      <div className=" md:py-16 py-8 px-16 justify-between  flex flex-col md:flex-row">
        <div className=" pt-12 px-8 font-Poppins md:hidden">
          <h1 className="text-[#00254F] font-semibold text-[28px]">
            UAE Success Stories
          </h1> 
          <p className="text-[#00254F] text-left tracking-tight md:w-[363px] pt-[16px]">
            Our legal experts guide clients through a seamless relocation
            process, leveraging global resources and immigration expertise.
          </p>
        </div>

        
          <Slider
            {...settings}
            className="md:w-[60%] gap-5 overflow-hidden pt-12 md:pt-[87px] rounded-[20px] md:pb-[127px] md:mr-[20px]"
          >
            {
              success.map((user,index) =>(
                <div key={index} className="w-[300px] md:w-[400px] border-[10px] border-[#F7F7F7] h-[350px]  md:h-[450px] rounded-2xl ">  
                  <div className="h-full w-full">
                        <img src={user} alt={user} className="h-full w-full md:object-cover rounded-2xl" />
                    </div>
                </div>
              ))
            }
          </Slider>
          
        <div className="right_side text-[#00254F] hidden md:block pt-[154px] pl-[50px] font-Poppins">
          <h1 className=" font-semibold text-[32px]">
            UAE Success Stories
          </h1>
          <p className=" w-[250px] md:w-[363px] pt-[16px]">
            Our legal experts guide clients through a seamless relocation
            process, leveraging global resources and immigration expertise.
          </p>
        </div>
      </div>
    </>
  );
};

export default CustomSlider;
