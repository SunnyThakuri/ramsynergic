import React from 'react'
import userImg from "../../assets/HomeUI/empoweruserImg.png"


const ContactUI = () => {
  return (
    <>
      <div className="all bg-gradient-to-r from-[#0D697D] to-[#1B92AD] ... 2xl:mx-[166.5px] xl:mx-[100px] lg:mx-[80px] sm:mx-[20px] mt-[100px] sm:rounded-[12px] ">

        <div className="items flex md:justify-around justify-between xl:px-[80px] lg:px-[40px] md:px-[20px]">

          <div className="img">
            <img className='h-full' src={userImg} alt="" />
          </div>

          <div className="text pt-[69px] sm:pr-0 pr-5" >
            <h1 className='xl:text-[32px] lg:text-[22px] sm:text-[18px] text-white font-semibold'>Empowering Your Workforce,
            </h1>
            <h1 className='xl:text-[32px] lg:text-[22px] text-[18px]  text-white font-semibold -mt-[7px]'> Enriching Your Success</h1>

            <p className='xl:w-[500px] lg:w-[450px] sm:w-[300px] w-[220px] text-[12px] pt-5 text-[#CFCFCF]'>Empowering industries with tailored talent solutions, we bridge expertise to your needs,
              ensuring seamless integration of skilled manpower for your company's success</p>

            <div className="btn py-16 md:hidden">
              <button className='text-white border-[1px] border-[#F7F7F7] rounded-[8px] px-3 py-2 flex'>Contact Us
                <p className='w-[12px] h-[1px] mr-3 ml-3'><i class="fa-solid fa-arrow-right"></i></p>
              </button>
            </div>
          </div>

          <div className="btn py-[113px] hidden md:block">
            <button className='text-white border-[1px] border-[#F7F7F7] rounded-[8px] px-3 py-2 flex'>Contact Us
              <p className='w-[12px] h-[1px] mr-3 ml-3'><i class="fa-solid fa-arrow-right"></i></p>
            </button>
          </div>
        </div>



      </div>
    </>
  )
}
export default ContactUI