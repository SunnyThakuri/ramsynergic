import React from 'react'
import zerozerosix from "../../assets/ServiceUI/006.png"
import innovative1 from "../../assets/ServiceUI/InnovativeImg1.png"
import innovative2 from "../../assets/ServiceUI/InnovativeImg2.png"

const Innovative = () => {
  return (
    <>
      <div className="bg-[#00264F] mt-[124px] md:flex justify-between 2xl:px-[166.5px] xl:px-[100px] lg:px-[80px] md:px-[50px] sm:px-[20px] px-[10px] ">

        <div className="left_side">
          <div className="heading flex pt-[163px] space-x-2">
            <img className='w-[10px] h-[20px] mt-2' src={zerozerosix} alt="002" />
            <h1 className='text-white text-[22px] font-semibold'>Innovative Technology Solutions</h1>
          </div>
          <p className=' text-[#F7F7F7] mt-[12px] ml-[22px] 2xl:w-[570px] lg:w-[470px] md:w-[350px]'>We provide cutting-edge technology solutions to streamline operations and enhance efficiency. Our experts leverage the latest tools and platforms to develop tailored solutions.</p>

          <ul className='text-white mt-[12px] list-disc ml-[40px]'>
            <li>Enterprise software implementation</li>
            <li>IT infrastructure modernization</li>
            <li>Automation and process optimization</li>
            <li>Data analytics and business intelligence</li>
            <li>Cloud migration and management</li>
            <li>Cybersecurity and risk management</li>
            <li>Digital transformation strategy</li>
          </ul>
        </div>

        <div className="right_side pt-[120px] pb-[150px]">

          <img className='absolute mt-[160px] xl:right-[300px] lg:right-[200px] md:right-[130px] sm:right-[280px] right-[120px]' src={innovative1} alt="" />
          <div className="flex md:justify-normal justify-center">
            <img src={innovative2} alt="" />
          </div>
        </div>

      </div>
    </>
  )
}
export default Innovative