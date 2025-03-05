import { useEffect, useState } from "react";
import useEmblaCarousel from "embla-carousel-react"
import AutoPlay from "embla-carousel-autoplay"
function ServiceHeader() {
  const [readMore,SetReadMore]= useState(false)
  useEffect(()=> {
    setTimeout(()=> {
      SetReadMore(false)
    },10000)
  })
  const [emblaRef]=useEmblaCarousel({
    loop:true,
    slidesToScroll:1,
    dragFree:true
  },[AutoPlay()])
  return (
    <div className="  space-y-12 mt-12 px-4 md:px-12">
      <div
      className="relative flex flex-col md:flex-row gap-12 "
      >
      {/* <div className="max-w-screen relative hidden md:block  w-full h-[400px] ">
        <img
          src="/ourservices/globalConnect.jpg"
          className="w-full h-full object-cover rounded-xl brightness-75"
        />
      </div>
      <div
      className="w-full px-12  absolute text-white top-4  "
      >
        <h2
        className="text-6xl my-12  tracking-tight  font-semibold leading-7"
        >Our Services</h2>
        <div
        className="relative w-full overflow-hidden"
        >
          <div
          className="overflow-hidden"
          ref={emblaRef}
          >
            <div
            className="flex "
            >
               <h3
        className="text-xl my-4 flex-shrink-0 w-fit overflow-hidden "
        >
          At Global Connect, we specialize in providing tailored solutions to
          help our clients unlock the full potential of their human capital,
          drive organizational excellence, and achieve sustainable growth.
        </h3>
        <p
       className="text-lg leading-7 pl-4 flex-shrink-0 w-fit overflow-hidden" 
        >
          Our unique approach, global networks, industry expertise, transparent
          recruitment process, affordable charges, and commitment to continuous
          improvement set us apart from others. By understanding each client's
          unique needs and embracing innovation, we strive to deliver
          comprehensive and tailored solutions that leave a lasting impact.
        <br /><br />
          Our expertise in human capital optimization enables us to help clients
          maximize employee potential, enhance organizational effectiveness,
          achieve sustainable growth, foster a culture of innovation, and
          deliver exceptional service.
        </p>

            </div>
          </div>
        </div>
       
      </div> */}
      <div className="max-w-1/4 hidden md:block  w-full h-full ">
        <img
          src="/ourservices/globalConnect.jpg"
          className="w-full h-full object-cover rounded-xl"
        />
      </div>
       <div
      className="w-full   "
      >
        <h2
        className="text-4xl tracking-tight my-2 font-semibold leading-7"
        >Our Services</h2>
        <h3
        className="text-xl my-4 leading-7"
        >
          At Global Connect, we specialize in providing tailored solutions to
          help our clients unlock the full potential of their human capital,
          drive organizational excellence, and achieve sustainable growth.
        </h3>
        <div className="max-w-1/4 md:hidden  w-full h-full my-2 ">
        <img
          src="/ourservices/globalConnect.jpg"
          className="w-full h-full object-cover rounded-xl"
        />
      </div>
        {!readMore && <div
        className="w-full block lg:hidden"
        >
        <p
        className=" text-right text-sm cursor-pointer"
        onClick={()=> SetReadMore(true)}
        >... Read More</p>
        </div>}
       {readMore && <p
       className="text-lg leading-7 " 
        >
          Our unique approach, global networks, industry expertise, transparent
          recruitment process, affordable charges, and commitment to continuous
          improvement set us apart from others. By understanding each client's
          unique needs and embracing innovation, we strive to deliver
          comprehensive and tailored solutions that leave a lasting impact.
        <br /><br />
          Our expertise in human capital optimization enables us to help clients
          maximize employee potential, enhance organizational effectiveness,
          achieve sustainable growth, foster a culture of innovation, and
          deliver exceptional service.
        </p>}
        <p
       className=" hidden lg:block text-lg leading-7 " 
        >
          Our unique approach, global networks, industry expertise, transparent
          recruitment process, affordable charges, and commitment to continuous
          improvement set us apart from others. By understanding each client's
          unique needs and embracing innovation, we strive to deliver
          comprehensive and tailored solutions that leave a lasting impact.
        <br /><br />
          Our expertise in human capital optimization enables us to help clients
          maximize employee potential, enhance organizational effectiveness,
          achieve sustainable growth, foster a culture of innovation, and
          deliver exceptional service.
        </p>
        {readMore && <div
        className="w-full block lg:hidden"
        >
        <p
        className=" text-right text-sm cursor-pointer"
        onClick={()=> SetReadMore(false)}
        >... See less</p>
        </div>}
      </div>
      </div>
      
    </div>
  );
}

export default ServiceHeader;
