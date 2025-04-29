import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "../../style/SuccessStories.css";
import useEmblaCarousel from "embla-carousel-react";
import AutoScroll from "embla-carousel-auto-scroll";
import "../../style/SuccessStories.css";

const success = [
    "/success/eu1.jpg",
    "/success/eu1.jpg",
    "/success/eu1.jpg",
    "/success/eu1.jpg",
]

const EuSuccessStories = () => {

  const [emblaRef] = useEmblaCarousel(
      {
        loop: true,
        align: "center",
        containScroll: false, // important for loop mode
      },
      [
        AutoScroll({
          speed: 2,
          interval: 0,
          stopOnInteraction: false,
        }),
      ]
    );

  function SampleNextArrow(props) {
    const { onClick } = props;
    return (
      <div
        className="successStories hidden md:block forward-arrow  left-12 md:w-[36px] w-[26px] h-[26px] md:h-[36px]"
        onClick={onClick}
      >
        <p className="rotate-180 relative top-1.5 right-3.5 sm:text-[12px] text-[10px] text-white  ">
          <i className="fa-solid fa-play rotate-180"></i>
        </p>
      </div>
    );
  }

  function SamplePrevArrow(props) {
    const { onClick } = props;
    return (
      <div
        className="successStories hidden md:block backward-arrow left-0 md:w-[36px] w-[26px] h-[26px] md:h-[36px]"
        onClick={onClick}
      >
        <p className="text-[#00254F] relative top-2.5 left-3.5 sm:text-[12px] text-[10px] ">
          <i className="fa-solid fa-play rotate-180"></i>
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
    nextArrow: <SamplePrevArrow />,
    prevArrow: <SampleNextArrow />,
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

  // return (
  //   <>
  //     <div className=" bg-[#00254F]  py-8 md:px-16 md:gap-16 flex flex-col md:flex-row">
  //       <div className=" pt-12 px-8 font-Poppins md:hidden ">
  //           <h1 className="text-[#F7F7F7] font-semibold text-[28px]">
  //               EU Success Stories
  //           </h1> 
  //           <p className="text-[#F7F7F7] text-left tracking-tight md:w-[363px] pt-[16px]">
  //               Our legal experts guide clients through a seamless relocation
  //               process, leveraging global resources and immigration expertise.
  //           </p>
  //       </div>  
  //       <div className="right_side text-[#F7F7F7]  hidden md:block pt-[154px] pl-[50px] font-Poppins">
  //         <h1 className=" font-semibold text-[32px]">
  //           EU Success Stories
  //         </h1>
  //         <p className=" w-[250px] md:w-[363px] pt-[16px]">
  //           Our legal experts guide clients through a seamless relocation
  //           process, leveraging global resources and immigration expertise.
  //         </p>
  //       </div>
  //       <Slider
  //           {...settings}
  //           className="md:w-[60%]  gap-5 overflow-hidden pt-12 md:pt-[87px] rounded-[20px] md:pb-[127px] md:mr-[20px]"
  //         >
  //           {
  //             success.map((user,index) =>(
  //               <div key={index} className="w-[300px] md:w-[400px] border-[10px] border-[#00254F]  md:h-[560px] rounded-2xl ">
  //                 <div className="h-full w-full rounded-2xl">
  //                       <img src={user} alt={user} className="h-full w-full object-cover rounded-2xl" />
  //                   </div>
  //               </div>
  //             ))
  //           }
  //         </Slider>
          
  //     </div>
  //   </>
  // );

  return(
    <div className="bg-[#00254F] md:py-16 py-8 md:px-16 flex flex-col-reverse md:flex-row items-center">
      {/* Carousel */}
      <div className="embla overflow-hidden max-w-full" ref={emblaRef}>
        <div className="embla__container flex">
          {success.map((item, index) => (
            <div
              key={index}
              className=" min-w-full md:min-w-[500px] h-[350px] my-4 md:h-[500px] flex-shrink-0 px-4"
            >
              <img
                src={item}
                alt={`Success story ${index}`}
                className="w-full h-full object-cover rounded-xl"
              />
            </div>
          ))}
        </div>
      </div>

      {/* Text Section */}
      <div className="text-white md:pt-[154px] pt-12 md:pl-[50px] px-6 text-center md:text-left font-Poppins">
        <h1 className="font-semibold text-[32px]">Europe Success Stories</h1>
        <p className="w-full md:w-[363px] text-center md:text-left pt-[16px]">
          Our legal experts guide clients through a seamless relocation process,
          leveraging global resources and immigration expertise.
        </p>
      </div>
    </div>
  )
};

export default EuSuccessStories;
