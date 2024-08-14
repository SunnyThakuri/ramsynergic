import React from 'react'
import zerozerofour from "../../assets/ServiceUI/004.png"
import consultingServicesImg1 from "../../assets/ServiceUI/consultingServiceimg1.png"
import consultingServicesImg2 from "../../assets/ServiceUI/consultingServiceimg2.png"

const ConsultingServices = () => {
  return (
    <>
      <div className="bg-[#00264F] mt-[124px] md:flex justify-between 2xl:px-[166.5px] xl:px-[100px] lg:px-[80px] md:px-[50px] sm:px-[20px] px-[10px] ">

        <div className="left_side">
          <div className="heading flex pt-[127px] space-x-2">
            <img className='w-[10px] h-[20px] mt-2' src={zerozerofour} alt="002" />
            <h1 className='text-white text-[22px] font-semibold'>Consulting Services</h1>
          </div>
          <p className=' text-[#F7F7F7] mt-[12px] ml-[22px] 2xl:w-[570px] lg:w-[470px] md:w-[350px]'>Our expert consulting services optimize business performance and drive growth. We leverage deep industry knowledge and data-driven insights to develop customized solutions.</p>

          <ul className='text-white mt-[12px] list-disc ml-[40px]'>
            <li>Business process improvement</li>
            <li>Operations optimization</li>
            <li>Digital transformation strategy</li>
            <li>Change management planning</li>
            <li>Organizational restructuring</li>
            <li>Growth strategy development</li>
            <li>Talent management advisory</li>
            <li>Mergers and acquisitions support</li>
            <li>Risk mitigation and compliance</li>
            <li>Customer experience enhancement</li>
          </ul>
        </div>

        <div className="right_side pt-[120px] pb-[150px]">
          <img className='absolute mt-[160px] xl:right-[300px] lg:right-[200px] md:right-[130px] sm:right-[280px] right-[120px]' src={consultingServicesImg1} alt="" />
          <div className="flex md:justify-normal justify-center">
            <img src={consultingServicesImg2} alt="" />
          </div>
        </div>

      </div>
    </>
  )
}
export default ConsultingServices