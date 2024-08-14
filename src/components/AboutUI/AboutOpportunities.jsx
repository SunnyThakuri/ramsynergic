import React from 'react';
import user from "../../assets/HomeUI/opportunities.png";

const AboutOpportunities = () => {
  return (
    <>
      <div className="all-items bg-[#00254F] lg:flex lg:justify-between  2xl:px-[166.5px] xl:px-[100px] lg:px-[80px] md:px-[50px] sm:px-[20px] px-[10px] font-Poppins pt-[129.6px] mt-[124px]">

        <div className="left_side ">
          <h1 className='text-[#007BFF] font-semibold lg:text-left text-center'>Unlocking International Opportunities</h1>
          <h1 className='text-[#F7F7F7] text-[32px] font-semibold lg:w-[350px] mt-[16px] lg:text-left text-center'>Borderless Pathways to Success</h1>
          <p className='text-[#F7F7F7]  xl:w-[550px] text-center lg:text-left mt-5'>Explore international job opportunities and unlock your potential in Poland and Hungary, a vibrant destination for global success.</p>
          <div className="flex justify-center text-[#F7F7F7] lg:justify-start">
            <ul className='list-disc mt-3 font-semibold ml-5 ' >
              <li>Easy Process</li>
              <li>Cultural Diversity</li>
              <li>Quality of Work Environment</li>
            </ul>
          </div>

          <div className="btn mt-7  flex  justify-center lg:justify-normal lg:mb-0 mb-20">
            <button className=' border-2 mt-[40px] border-[#F7F7F7] text-[#F7F7F7] px-5 py-3 rounded-[4px] flex'>Apply Now
              <p className='w-[12px] h-[1px] mx-2'><i class="fa-solid fa-arrow-right"></i></p>
            </button>
          </div>
        </div>


        <div className="right_side pb-[100px] ">

          <div className="relative flex items-center lg:justify-end justify-center" >
            <div className="w-[414px] h-[414px] border-2 border-dashed  border-[#919294] rounded-full flex items-center justify-center">
              <img className='w-[353px] h-[353px]' src={user} alt="" />
              <div className="absolute animate-spin-circle" style={{ animationDelay: '0s' }}>
                <h1 className='w-6 h-6 bg-[#187FF8] rounded-full'></h1>
              </div>

              <div className="absolute animate-spin-circle" style={{ animationDelay: '1s' }}>
                <h1 className='w-6 h-6 bg-[#4BD7A4] rounded-full'></h1>
              </div>

              <div className="absolute animate-spin-circle" style={{ animationDelay: '2s' }}>
                <h1 className='w-6 h-6 bg-[#FF6363] rounded-full'></h1>
              </div>

            </div>
          </div>
        </div>
      </div >
    </>
  );
};

export default AboutOpportunities;
