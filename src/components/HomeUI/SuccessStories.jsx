// import React from "react";
// import Slider from "react-slick";
// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";
// import "../../style/SuccessStories.css";
// import Autoplay from "embla-carousel-autoplay";
// import useEmblaCarousel from "embla-carousel-react";
// import AutoScroll from "embla-carousel-auto-scroll";

// const success = [
//   "/success/uae1.jpg",
//   "/success/uae2.jpg",
//   "/success/uae3.jpg",
//   "/success/uae4.jpg",
//   "/success/eu2.jpg"

// ]

// const CustomSlider = () => {
  
// const [emblaRef] = useEmblaCarousel(
//     {
//       loop: true, 
//       align: "center", 
//       dragFree: true, 
//       containScroll: "trimSnaps", 

//     },
//     [
//       AutoScroll({
//         speed: 1.5, // Adjust speed (higher value = faster scrolling)
//         interval: 0, // Ensures seamless movement without stopping
//         stopOnInteraction: false, // Prevents stopping when interacted with
//       }),
//     ]
//   );

//   return(
//     <div className="md:py-16 py-8 md:px-16 justify-between  flex flex-col-reverse md:flex-row">
//       {/* leftside */}
//       <div className="overflow-hidden embla " ref={emblaRef}>
//         <div className="embla__container flex gap-8  self-center mx-3 md:pl-4">
//           {
//             success.map((item,index)=>(
//               <div key={index} className="embla__slide">
//                 <div className="w-full h-[350px] md:w-[400px] md:h-[450px]">
//                   <img
//                     src={item}
//                     alt={item}
//                     className="w-full h-full object-cover rounded-xl"/>
//                 </div>
//               </div>
//             ))
//           }
//         </div>
//       </div>

//       {/* Rightside */}
//       <div className="text-[#00254F] pt-[154px] pl-[50px] font-Poppins">
//           <h1 className=" font-semibold text-[32px]">
//             GCC & Other Success Stories
//           </h1>
//           <p className=" w-[250px] md:w-[363px] pt-[16px]">
//             Our legal experts guide clients through a seamless relocation
//             process, leveraging global resources and immigration expertise.
//           </p>
//         </div>
//     </div>
//   )
// };

// export default CustomSlider;
////////////////////////////////////////////////////////////////////////////////////////////

// import React from "react";
// import useEmblaCarousel from "embla-carousel-react";
// import AutoScroll from "embla-carousel-auto-scroll";
// import "../../style/SuccessStories.css";

// const success = [
//   "/success/uae1.jpg",
//   "/success/uae2.jpg",
//   "/success/uae3.jpg",
//   "/success/uae4.jpg",
//   "/success/eu2.jpg",
// ];

// const CustomSlider = () => {
//   const [emblaRef] = useEmblaCarousel(
//     {
//       loop: true, // Infinite scrolling enabled
//       align: "center", // Centers slides properly
//       containScroll: "keepSnaps", // Prevents overlapping at boundaries
//       dragFree: false, // Ensures predictable behavior
//     },
//     [
//       AutoScroll({
//         speed: 3, // Smooth continuous movement
//         interval: 0, // No stopping between slides
//         stopOnInteraction: false, // Keeps scrolling even when user interacts
//       }),
//     ]
//   );

//   return (
//     <div className="md:py-16 py-8 md:px-16 flex flex-col-reverse md:flex-row">
//       {/* Left Side (Carousel) */}
//       <div className="overflow-hidden embla" ref={emblaRef}>
//         <div className="embla__container flex gap-8">
//           {success.map((item, index) => (
//             <div
//               key={index}
//               className="embla__slide flex-[0_0_80%] md:flex-[0_0_45%]  h-[500px]" 
//             >
//               <img
//                 src={item}
//                 alt={`Success story ${index}`}
//                 className="w-full h-full object-cover rounded-xl"
//               />
//             </div>
//           ))}
//         </div>
//       </div>

//       {/* Right Side */}
//       <div className="text-[#00254F] pt-[154px] pl-[50px] font-Poppins">
//         <h1 className="font-semibold text-[32px]">GCC & Other Success Stories</h1>
//         <p className="w-[250px] md:w-[363px] pt-[16px]">
//           Our legal experts guide clients through a seamless relocation process,
//           leveraging global resources and immigration expertise.
//         </p>
//       </div>
//     </div>
//   );
// };

// export default CustomSlider;

import React from "react";
import useEmblaCarousel from "embla-carousel-react";
import AutoScroll from "embla-carousel-auto-scroll";
import "../../style/SuccessStories.css";

const success = [
  "/success/uae1.jpg",
  "/success/uae2.jpg",
  "/success/uae3.jpg",
  "/success/uae4.jpg",
  "/success/eu2.jpg",
];

const CustomSlider = () => {
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

  return (
    <div className="md:py-16 py-8 md:px-16 flex flex-col-reverse md:flex-row items-center">
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
      <div className="text-[#00254F] md:pt-[154px] pt-12 md:pl-[50px] px-6 text-center md:text-left font-Poppins">
        <h1 className="font-semibold text-[32px]">GCC & Other Success Stories</h1>
        <p className="w-full md:w-[363px] text-center  pt-[16px]">
          Our legal experts guide clients through a seamless relocation process,
          leveraging global resources and immigration expertise.
        </p>
      </div>
    </div>
  );
};

export default CustomSlider;

