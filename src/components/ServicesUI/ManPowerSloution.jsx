import React from 'react'
import manpowersolutionImg1 from "../../assets/ServiceUI/ManpowerSolution1.png"
import manpowersolutionImg2 from "../../assets/ServiceUI/ManpowerSolution2.png"
import number from "../../assets/ServiceUI/001.png"

const ManPowerSloution = () => {
  return (
    <>
      <div className="all md:flex justify-between 2xl:mx-[166.5px] xl:mx-[100px] lg:mx-[80px] md:mx-[50px] sm:mx-[20px] mx-[10px]  md:pt-[202px] pt-[120px]">
        <div className="left_side hidden md:block">
          <img className='absolute mt-[170px] lg:w-[205px] w-[150px] h-[215px]' src={manpowersolutionImg1} alt="" />
          <img className='lg:w-[237px] w-[200px] h-[340px] ml-[80px]' src={manpowersolutionImg2} alt="" />
        </div>

        <div className="right_side">
          <div className="flex md:justify-normal justify-center space-x-2 ">
            <img className='w-[10px] h-[20px] mt-2' src={number} alt="" />
            <h1 className='text-[#000000] font-semibold text-[22px]'>Manpower Solutions</h1>
          </div>

          <h1 className='text-[#333333] xl:w-[550px] lg:w-[400px] md:w-[320px] mt-[12px] md:ml-[25px] sm:mx-0 mx-[10px]'>We specialize in delivering customized workforce solutions tailored to meet
            the specific needs of our clients, aiming to streamline operations,
            drive efficiency, and maximize productivity across various facets
            of the organization.</h1>

          <ul className='list-disc xl:w-[433px] lg:w-[400px] md:w-[300px] mt-5 sm:ml-12 ml-8'>
            <li>Flexible, scalable staffing models to adapt to business needs</li>
            <li>Comprehensive training & development programs to upskill employees</li>
            <li>Robust performance management systems for continuous improvement</li>
            <li>Seamless integration with existing HR systems</li>
          </ul>
        </div>


        <div className="responsive_imgaes md:hidden mt-10 ">
          <div className="">
            <img className='absolute left-[120px] mt-[170px] h-[215px]' src={manpowersolutionImg1} alt="" /></div>
          <div className=" flex  justify-center">
            <img className=' h-[340px] ' src={manpowersolutionImg2} alt="" />
          </div>
        </div>
      </div>
    </>
  )
}
export default ManPowerSloution