import React from 'react';
import globaloperationimg1 from "../../assets/HomeUI/globaloperation1.png";
import globaloperationimg2 from "../../assets/HomeUI/globaloperation2.png";
import globaloperationimg3 from "../../assets/HomeUI/globaloperation3.png";
import globaloperationimg4 from "../../assets/HomeUI/globaloperation4.png";
import globaloperationimg5 from "../../assets/HomeUI/globaloperation5.png";

const GlobalOperation = () => {
  return (
    <>
      <div className="global_operation mt-10  2xl:mx-[166.5px] xl:mx-[100px] lg:mx-[80px] md:mx-[50px] sm:mx-[20px] mx-[10px] ">

        <div className="heading flex flex-col md:flex-row justify-between">
          <h1 className="text-2xl md:text-3xl text-[#2C2C2C] md:w-80 font-semibold">Global Operations and Logistics</h1>

          <p className="text-[#828282] md:w-2/3 xl:w-[530px] lg:mt-0 mt-4 md:mt-0">We provide comprehensive end-to-end supply chain management, logistics, and distribution services for complex multinational
            enterprises operating worldwide.</p>
        </div>

        <div className="images grid grid-cols-1 md:grid-cols-3 gap-5 mt-6">
          <img className='md:row-span-2 w-full h-auto md:h-full' src={globaloperationimg1} alt="" />
          <img className='w-full h-auto md:h-54' src={globaloperationimg2} alt="" />
          <img className='w-full h-auto md:h-54' src={globaloperationimg3} alt="" />
          <img className='w-full h-auto md:h-54' src={globaloperationimg4} alt="" />
          <img className='w-full h-auto md:h-54' src={globaloperationimg5} alt="" />
        </div>

      </div>
    </>
  );
}

export default GlobalOperation;
