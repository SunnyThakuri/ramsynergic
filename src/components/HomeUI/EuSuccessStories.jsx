import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "../../style/SuccessStories.css";

const success = [
  {
    id:0,
    name:"Mikmar Lama",
    image:"/HomeUI/success/user1.png",
    location:"Sindhupalchok, Nepal",
    quote:"With their extensive network and industry expertise, they opened doors to opportunities I never knew existed, propelling my career to new heights."
  },
  {
    id:1,
    name:"Umesh Khatri",
    image:"/HomeUI/success/user2.png",
    location:"Ramechhap, Nepal",
    quote:"Thanks to their vast network and deep industry knowledge, they unlocked opportunities I never thought possible, significantly advancing my career."
  },
  {
    id:2,
    name:"Subash Thapa",
    image:"/HomeUI/success/user3.png",
    location:"Nawalparasi, Nepal",
    quote:"Their extensive connections and profound understanding of the industry revealed new pathways for my professional growth, elevating my career to unprecedented levels."
  },
  {
    id:3,
    name:"Shyam Shrestha",
    image:"/HomeUI/success/user4.png",
    location:"Dolakha, Nepal",
    quote:"Thanks to their extensive connections and deep industry expertise, they revealed a multitude of new opportunities, transforming my career trajectory and pushing me to new heights of success."
  },
]

const EuSuccessStories = () => {
  function SampleNextArrow(props) {
    const { onClick } = props;
    return (
      <div
        className="successStories hidden md:block forward-arrow  right-12 md:w-[36px] w-[26px] h-[26px] md:h-[36px]"
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
        className="successStories hidden md:block backward-arrow right-0 md:w-[36px] w-[26px] h-[26px] md:h-[36px]"
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
  };

  return (
    <>
      <div className="bg-[#00254F]  flex flex-col md:flex-row">
        <div className=" pt-12 px-8 font-Poppins md:hidden">
          <h1 className="text-[#F7F7F7] font-semibold text-[28px]">
            EU Success Stories
          </h1> 
          <p className="text-[#F7F7F7] text-left tracking-tight md:w-[363px] pt-[16px]">
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
                <div index={index} className="slide01   w-[300px] md:w-[607px] border-[10px] border-[#00254F] py-12  md:h-[450px] rounded-2xl bg-white  ">
                  <div className="img flex  justify-center md:pt-[60px]">
                    <img src={user.image} alt={user.name} className="h-24 w-24 rounded-full object-cover" />
                  </div>
                  <h1 className="text-center pt-3 text-[22px] text-[#2C2C2C] font-semibold">
                  {user.name}
                  </h1>
                  <h1 className="text-center text-sm md:text-md pt-3">{user.location} </h1>
                  <p className="px-1  hidden sm:block  text-[#333333] pt-5 md:px-4 ">
                    {user.quote}
                  </p>
                </div>
              ))
            }
          </Slider>
          
        <div className="right_side hidden md:block pt-[154px] pl-[50px] font-Poppins">
          <h1 className="text-[#F7F7F7] font-semibold text-[32px]">
            EU Success Stories
          </h1>
          <p className="text-[#F7F7F7] w-[250px] md:w-[363px] pt-[16px]">
            Our legal experts guide clients through a seamless relocation
            process, leveraging global resources and immigration expertise.
          </p>
        </div>
      </div>
    </>
  );
};

export default EuSuccessStories;
