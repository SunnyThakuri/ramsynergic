import React from 'react'
import consultantImg from "../../assets/AboutUI/visa_consultant.png"
import maplogo from "../../assets/AboutUI/mdi_map-marker-path.png"
import peoplelogo from "../../assets/AboutUI/fluent_people-team-20-filled.png"


const BestVisaConsultant = () => {
  return (
    <>
      <div className="all bg-[#00264F] 2xl:px-[166.5px] xl:px-[100px] lg:px-[80px] md:px-[50px] sm:px-[20px] px-[10px] md:flex justify-between">

        <div className="left_side pt-[125.5px] font-Poppins">
          <h1 className='xl:text-[32px] lg:text-[28px] text-[24px] xl:w-[457px] lg:w-[400px] md:w-[350px] text-centermd
          md:mx-0 sm:mx-[150px] mx-[20px] text-white font-semibold'>WHAT MAKE US THE BEST VISA CONSULTANT?</h1>

          <p className='text-[#828282] xl:w-[487px] lg:w-[400px] md:w-[350px] md:text-left text-center mt-[24px] md:mx-0 sm:mx-[80px]'>Our legal experts can help with relocation and setup in a new country by presenting certified program options.</p>

          <div className="sm:flex md:justify-between sm:justify-evenly pt-[46px]">
            <div className="map lg:w-[208px] md:w-[180px]">
              <div className='flex justify-center'>
                <img src={maplogo} alt="" />
              </div>
              <h1 className='text-[#F7F7F7] font-semibold text-center pt-3'>ACCURATE GUIDANCE</h1>
              <p className='text-[#CFCFCF] text-center pt-5 md:mx-0 mx-[15px]'>Skilled professionals
                are always ready
                to provide reliable services to our clients!</p>
            </div>

            <div className="people md:pt-0 pt-10 lg:w-[208px] md:w-[180px]">
              <div className='flex justify-center'>
                <img src={peoplelogo} alt="" />
              </div>
              <h1 className='text-[#F7F7F7] text-center font-semibold pt-3'>OUR PRESENCE</h1>
              <p className='text-[#CFCFCF] text-center pt-5 md:mx-0 mx-[15px]'>Branches are situated in major metro cities
                and overseas,
                always open for you!</p>
            </div>
          </div>

        </div>



        <div className="right-side py-[120px] ">
          <img className='xl:w-[460px] lg:w-[380px] md:w-[250px] w-full h-[460px]' src={consultantImg} alt="" />
        </div>

      </div>
    </>
  )
}
export default BestVisaConsultant