import { useEffect, useState } from "react";


function ServiceHeader() {
  const [readMore,SetReadMore]= useState(false)
  useEffect(()=> {
    setTimeout(()=> {
      SetReadMore(false)
    },10000)
  })
  return (
    <div className="  space-y-12 mt-12 px-4 md:px-12">
      <div
      className="flex flex-col md:flex-row gap-12 "
      >
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
       className="text-lg leading-7 pl-4" 
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
       className=" hidden lg:block text-lg leading-7 pl-4" 
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
