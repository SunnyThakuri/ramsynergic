import { useCallback, useEffect, useState } from "react";

/* import service1 from "../../assets/HomeUI/serviceslider1.png";
import service2 from "../../assets/HomeUI/serviceslider2.png";
import service3 from "../../assets/HomeUI/serviceslider3.png";
import service4 from "../../assets/HomeUI/serviceslider4.png";
import slideright from "../../assets/HomeUI/slideright.png";
import slideleft from "../../assets/HomeUI/slideleft.png"; */
import "../../style/OurServicesSlider.css";
import { useNavigate } from "react-router-dom";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import { serviceArr } from "../../config/service";
const OurServices = () => {
  const [alignMode, setAlignMode] = useState("start");
  const[scrollE,setScrollE]=useState(false)
  const [activeIndex,setActiveIndex]=useState(0)
  const [emblaRef, emblaApi] = useEmblaCarousel(
    {
      dragFree: true,
      loop: true,
      slidesToShow: 1,
      slidesToScroll: 1,
      align: alignMode,
    },
    [Autoplay({ delay: 3000 ,stopOnInteraction:!scrollE?true:false})]
  );
const onSelect=useCallback(()=> {
  if(!emblaApi) return
  setActiveIndex(emblaApi.selectedScrollSnap())
},[emblaApi])
useEffect(()=> {
  if(!emblaApi )return
  emblaApi.on("select",onSelect)
  onSelect()
  return ()=> {
    emblaApi.off("select",onSelect)
  }
},[onSelect,emblaApi])
console.log("embla-actiive",activeIndex)
  useEffect(() => {
    const handleResize = () => {
      setAlignMode(window.innerWidth < 480 ? "center" : "start");
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);
useEffect(()=> {
  setTimeout(()=> {
    setScrollE(true)
  },500)
},[scrollE])
  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev();
  }, [emblaApi]);
  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext();
  }, [emblaApi]);
  const redirect = useNavigate();

  return (
    <>
      <div className="bg-[#00254F]  mt-32 pb-24 2xl:px-[166.5px] xl:px-[100px] lg:px-[80px] md:px-[50px] sm:px-[20px] px-[10px]">
        <div className="">
          <div className="heading pt-24 border-b-2 border-b-[#B2AFAF]  flex flex-col justify-between">
            <h1 className="text-[#F7F7F7] text-2xl md:text-3xl font-semibold">
              Sectors And Industries Served
            </h1>
            <div
            className="
            flex gap-2 w-full  justify-end items-center pt-20 pb-4 md:pb-5
            "
            >
              <div className="bg-[#00254F] border border-white p-5 w-7 h-7 rounded-full flex items-center justify-center rotate-180"
              onClick={scrollNext}
              >
                <p className="text-white sm:text-[12px] text-[12px] ">
                  <i className="fa-solid fa-play"></i>
                </p>
              </div>
              <div className="bg-white p-5 w-7 h-7 flex items-center justify-center rounded-full"
              onClick={scrollPrev}
              >
                <p className="text-[#00254F] sm:text-[12px] text-[12px] ">
                  <i className="fa-solid fa-play"></i>
                </p>
              </div>
              
            </div>
          </div>
        </div>
        <div className="relative w-full overflow-hidden mt-12">
          <div ref={emblaRef} className="overflow-hidden">
            <div className="flex ">
              {serviceArr.map((item, index) => (
                <div
                  key={index}
                  className="w-[290px] min-h-[300px] flex-shrink-0 ml-4 cursor-pointer"
                  onClick={() => redirect("/services")}
                >
                  <div className="w-[290px] h-[300px]">
                    <img
                      className={`w-full h-full object-cover hover:scale-105 transition-transform duration-150 ease-in-out delay-700  ${activeIndex==index?"scale-105 md:scale-100 opacity-100":" opacity-50 md:opacity-100"}  `}
                      src={item.img}
                    />
                  </div>
                  <h2 className="text-[#F7F7F7] text-xl font-medium mt-4">
                    {item.title}
                  </h2>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="btn flex justify-end mt-8 md:mt-6">
          <button className="text-white text-sm md:text-base border-[1.5px] border-white rounded-lg flex px-5 py-2"
          onClick={() => redirect("/services")}
          >
            Read More{" "}
            <p className="ml-3">
              <i className="fa-solid fa-arrow-right"></i>
            </p>
          </button>
        </div>
      </div>
    </>
  );
};

export default OurServices;
