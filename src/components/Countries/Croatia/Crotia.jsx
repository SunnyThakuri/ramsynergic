import React from 'react'
import HeroImg from "../../../assets/HungaryUI/HeroImg.png"
import subheadingImg from "../../../assets/HungaryUI/subheadingImg.png"
import subheadingImg2 from "../../../assets/HungaryUI/subheadingImg2.png"
import CroatiaProcess from './CroatiaProcess'


const Croatia = ({country}) => {
  return (
    <>
      <div className="all">
        <div className="img  2xl:mx-[91px] xl:mx-[95px] lg:mx-[70px] md:mx-[50px] mx-[10px]">

          <div className="absolute xl:pt-[104px] lg:pt-[80px] sm:pt-[50px] pt-[20px] xl:ml-[85px] lg:ml-[60px] sm:ml-[40px] ml-[20px]">
            <h1 className='text-white  lg:text-[32px] sm:text-[22px]  text-[16px] font-Poppins font-semibold ' >{country}</h1>
            <div className=" flex">
              <h1 className='font-Poppins text-white text-[14px] font-semibold'>Home </h1>
              <h1 className='text-gray-400 font-Poppins sm:text-[16px] text-[12px]'> / Countries</h1>
              <h1 className='text-gray-400 font-Poppins sm:text-[16px] text-[12px] capitalize'> / {country}</h1>
            </div>
          </div>
          <img className='w-full' src={HeroImg} alt="" />
        </div>
        {/* -------------------subHeaing--------- */}
        <div className="subintro md:flex md:justify-between 2xl:mx-[166.5px] xl:mx-[100px] lg:mx-[80px] md:mx-[50px] sm:mx-[20px] mx-[10px] mt-[50px]">

          <div className="left_side lg:mt-[42px] xl:w-[663px] lg:w-[500px] md:w-[400px]">

            <h1 className='text-justify'>{country}'s diverse and thriving economy offers a wide range of job opportunities across various sectors, including manufacturing, information technology, finance, healthcare, and tourism.</h1>

            <h1 className='mt-[30px] sm:pr-10'>The country's manufacturing and IT sectors are particular areas of strength, attracting numerous global companies and creating a wealth of openings
              for skilled and talented workers.</h1>

            <h1 className='mt-[30px] text-justify sm:pr-10'>
              Beyond the robust manufacturing and tech industries, {country} also boasts
              a highly developed financial services sector, with the capital city of Budapest serving as a prominent regional financial center that hosts the headquarters
              of many multinational banks and financial institutions.</h1>

            <h1 className='mt-[30px] sm:pr-10'>This provides ample employment prospects for those with expertise in fields
              like banking, investment, and wealth management.</h1>
          </div>

          <div className="right_side md:mt-0 mt-16">
            <img className='lg:w-[205px] w-[155px] h-[277px] absolute mt-[170px] xl:right-[280px] lg:right-[200px] md:right-[150px] sm:right-[330px] right-[160px]' src={subheadingImg2} alt="" />
            <div className="flex md:justify-normal justify-center">
              <img className='lg:w-[237px] md:w-[200px] h-[391px] ' src={subheadingImg} alt="" />
            </div>
          </div>
        </div>


        {/* ----------------Process_Details--------------- */}
        <CroatiaProcess />
      </div>
    </>
  )
}
export default Croatia