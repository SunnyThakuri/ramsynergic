import React from 'react';
import user from "../../assets/HomeUI/opportunities.png";


const Opportunities = () => {
  return (
    <>
      <div className="all-items lg:flex lg:justify-between  2xl:mx-[166.5px] xl:mx-[100px] lg:mx-[80px] md:mx-[50px] sm:mx-[20px] mx-[10px] font-Poppins mt-[129.6px]">

        <div className="left_side lg:space-y-0 ">
          <h1 className='text-[#007BFF] font-semibold lg:text-left text-center'>Unlocking International Opportunities</h1>
          <h1 className='text-[#2C2C2C] text-[32px] font-semibold lg:w-[350px] mt-[16px] lg:text-left text-center'>Borderless Pathways to Success</h1>
          <p className='text-[#828282] xl:w-[550px] text-center lg:text-left mt-5 '>Explore international job opportunities and unlock your potential in Poland and Hungary, a vibrant destination for global success.</p>
          <div className="flex justify-center lg:justify-start">
            <ul className='list-disc mt-3 font-semibold ml-5 ' >
              <li>Easy Process</li>
              <li>Cultural Diversity</li>
              <li>Quality of Work Environment</li>
            </ul>
          </div>

          <div className="btn   flex  justify-center lg:justify-normal lg:mb-0 mb-20">
            <button className='bg-[#00264F] mt-[40px] text-[#F7F7F7] px-5 py-3 rounded-[4px] flex'>Apply Now
              <p className='w-[12px] h-[1px] mx-2'><i className="fa-solid fa-arrow-right"></i></p>
            </button>
          </div>
        </div>


        <div className="right_side ">

          <div className="relative flex items-center lg:justify-end justify-center" >
            <div className=" w-[350px] md:w-[414px] h-[350px] md:h-[414px] border-2 border-dashed  border-black rounded-full flex items-center justify-center">
              <img className='w-[300px] h-[300px] md:w-[353px] md:h-[353px]' src={user} alt="" />
              <div className="absolute animate-spin-circle" style={{ animationDelay: '0s' }}>
                <h1 className='w-6 h-6 bg-[#187FF8] rounded-full'></h1>
              </div>

              <div className="absolute  animate-spin-circle" style={{ animationDelay: '1s' }}>
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

export default Opportunities;
