import React from 'react';
import aboutusimg1 from "../../assets/HomeUI/aboutus1.png";
import aboutusimg2 from "../../assets/HomeUI/aboutus2.png";
import aboutusimg3 from "../../assets/HomeUI/aboutus3.png";

const AboutUs = () => {
  return (
    <div className="about mt-12 lg:mt-[124px]  2xl:mx-[166.5px] xl:mx-[100px] lg:mx-[80px] md:mx-[50px] sm:mx-[20px] mx-[10px] font-Poppins">
      <div className="flex items-center space-x-2">
        <h1 className='text-[#828282] ml-10 lg:ml-0'>About Us </h1>
        <div className="bg-[#ADADAD] w-14 md:w-24 h-[1px] mt-2"></div>
      </div>

      <div className="lg:flex lg:justify-between mt-[22px]">
        <div className="lg:text-left text-center">
          <h1 className='text-[#2C2C2C] 2xl:text-[32px] xl:text-[29px] lg:text-[25px] text-[29px] font-semibold '>The Foreign Jobs </h1>
          <h1 className='text-[#2C2C2C]  2xl:text-[32px]  xl:text-[29px] lg:text-[25px] text-[29px] font-semibold lg:w-[300px] -mt-3'>the Better Way</h1>
        </div>
        <div className="lg:ml-[100px]">
          <h1 className='text-[#2C2C2C] 2xl:text-[22px] xl:text-[20px] text-[16px] font-semibold lg:text-right text-center
          sm:mr-0 mr-[10px] sm:ml-0 ml-[10px] lg:mt-0 mt-3'>Specialized Recruiting Agency in UAE and Hongkong</h1>
          <p className='text-[#828282] text-[12px] 2xl:w-[574px] xl:w-[515px] lg:w-[415px] lg:mr-0 sm:mr-[100px] mr-[50px] lg:ml-0 sm:ml-[100px] ml-[50px] lg:text-left text-center mt-2 lg:mt-0' >We are a specialized recruitment agency that sources and provides top-tier foreign talent to UAE and hongkong companies.</p>
        </div>
      </div>

      <div className="images grid grid-cols-1 md:grid-cols-3 gap-5 mt-8 md:mt-10">
        <img className='w-full' src={aboutusimg1} alt="" />
        <img className='w-full' src={aboutusimg2} alt="" />
        <img className='w-full' src={aboutusimg3} alt="" />
      </div>

      <div className="btn flex justify-end mt-6 md:mt-8">
        <button className='text-[#00264F] text-sm md:text-base border-[1.5px] border-[#00264F] rounded-[4px] flex px-4 py-2'>
          Read More
          <span className='ml-2'><i className="fas fa-arrow-right"></i></span>
        </button>
      </div>
    </div>
  );
};

export default AboutUs;
