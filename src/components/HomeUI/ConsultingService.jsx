import React from 'react'
import consultingservice1 from "../../assets/HomeUI/consultingservices1.png"
import consultingservice2 from "../../assets/HomeUI/consultingservices2.png"

const ConsultingService = () => {
  return (
    <>
      <div className="ConsultingService mt-[150px] 2xl:mx-[166.5px] xl:mx-[100px] lg:mx-[80px] md:mx-[50px] sm:mx-[20px] mx-[10px] md:flex md:justify-between font-Poppins">

        <div className="">
          <h1 className="lg:text-[32px] md:text-[25px] text-[32px]  text-[#14213A] font-semibold md:w-[334px] text-center md:mx-0 sm:mx-[100px] mx-[10px]">Ram Synergic
            Consulting Services</h1>
          <img className='2xl:w-[625px] xl:w-[560px] lg:w-[450px] md:w-[370px] w-full 2xl:h-[405px] h-[400px] md:absolute  2xl:mt-[10px] lg:mt-[20px] mt-[50px]' src={consultingservice1} alt="" />
        </div>


        <div className=" md:w-[55%]  md:mt-0 mt-10">
          <img className='h-[329px] w-full' src={consultingservice2} alt="" />
          <h1 className=" text-[#333333] font-normal 2xl:w-[529px] xl:w-[520px] lg:w-[400px] md:w-[270px]  lg:text-[16px] text-[12px] 2xl:ml-[88px] xl:ml-[76px] lg:ml-[66px] md:ml-[42px]  mt-5">Ram Synergic Landscaping Services creates captivating outdoor spaces with expert landscaping and gardening solutions, combining artistic vision and horticultural expertise for
            sustainable beauty and client satisfaction.</h1>

          <div className="btn mt-5  2xl:ml-[88px]  lg:ml-[76px] md:ml-[50px]">
            <button className='bg-[#00264F] lg:px-[19.5px] px-[15px] lg:py-[12px] py-[8px] flex text-[#F7F7F7] rounded-[4px] font-Poppins'>Contact
              <p className='pl-3 w-[12px] h-[1px] pr-3'><i class="fa-solid fa-arrow-right"></i></p>
            </button>
          </div>
        </div>



      </div>
    </>
  )
}
export default ConsultingService