import React from 'react'
import albeaimg from "../../assets/AboutUI/albea.png"
import cordisimg from "../../assets/AboutUI/cordis.png"
import auroraimg from "../../assets/AboutUI/aurora.png"
import sheinimg from "../../assets/AboutUI/shein.png"
import imileimg from "../../assets/AboutUI/imile.png"
import efbecimg from "../../assets/AboutUI/efbec.png"
import arisitimg from "../../assets/AboutUI/arisit.png"
import xailientimg from "../../assets/AboutUI/xailient.png"
import newscorpimg from "../../assets/AboutUI/newscorp.png"
import aboutimg1 from "../../assets/AboutUI/aboutimg1.png"
import aboutimg2 from "../../assets/AboutUI/aboutimg2.png"

const ClientsandAbout = () => {
  return (
    <>
      <div className="bg-[#F7F7F7]">
        <div className="clients_section pt-[40px]">
          <h1 className="text-center text-[#2D2D2D] text-[30px] font-semibold font-Poppins">Our Valuable Clients</h1>

          <div className="clients_logo pt-[80px] grid xl:grid-cols-5 md:grid-cols-3  grid-cols-2 gap-5 2xl:mx-[166.5px] xl:mx-[100px] lg:mx-[80px] md:mx-[50px] sm:mx-[80px] mx-[10px]">

            <div className="albea_logo sm:w-[212px] w-[150px] h-[80px]">
              <img className=' bg-white py-[23px] sm:px-[57px] px-[47px] rounded-[5px] shadow-lg' src={albeaimg} alt="" />
            </div>

            <div className="cordis_logo sm:w-[212px] w-[150px] h-[80px]">
              <img className=' bg-white 2xl:py-[7px] sm:py-[9px] py-[13px] sm:px-[59px] px-[47px] rounded-[5px] shadow-lg' src={cordisimg} alt="" />
            </div>

            <div className="aurora_logo sm:w-[212px] w-[150px] h-[80px]">
              <img className=' bg-white   2xl:py-[10px] py-[8px]  sm:px-[74px] px-[44px]  rounded-[5px] shadow-lg' src={auroraimg} alt="" />
            </div>

            <div className="shein_logo sm:w-[212px] w-[150px] h-[80px]">
              <img className=' bg-white   2xl:py-[30px] py-[25px] sm:px-[64px] px-[44px] rounded-[5px] shadow-lg' src={sheinimg} alt="" />
            </div>

            <div className="imile_logo sm:w-[212px] w-[150px] h-[80px] ">
              <img className=' bg-white  2xl:py-[17px] sm:py-[18px] py-[20px] sm:px-[64px] px-[54px] rounded-[5px] shadow-lg' src={imileimg} alt="" />
            </div>


            <div className="ebfec_logo xl:hidden xl:col-start-1/2 sm:w-[212px] w-[150px] h-[80px]">
              <img className=' bg-white   sm:py-[19px] py-[16px] sm:px-[60px] px-[40px] rounded-[5px] shadow-lg' src={efbecimg} alt="" />
            </div>


            <div className="artist_logo xl:hidden sm:w-[212px] w-[150px] h-[80px]">
              <img className=' bg-white py-[20px]  sm:px-[62px] px-[52px] rounded-[5px] shadow-lg' src={arisitimg} alt="" />
            </div>

            <div className="xailient_logo xl:hidden sm:w-[212px] w-[150px] h-[80px]">
              <img className=' bg-white 2xl:py-[29px] py-[24px] sm:px-[59px] px-[49px] rounded-[5px] shadow-lg' src={xailientimg} alt="" />
            </div>


            <div className="newscorp_logo xl:hidden sm:ml-[130px] ml-[86px] md:ml-0 w-[212px] h-[80px]">
              <img className=' bg-white  sm:py-[19px] py-[10px] sm:px-[53px] px-[43px] rounded-[5px] shadow-lg' src={newscorpimg} alt="" />
            </div>

          </div>

          <div className="hidden xl:block">
            <div className="grid grid-cols-4  gap-5 xl:px-[290.5px] px-[150px] pt-5">
              <div className="ebfec_logo xl:col-start-1/2 w-[212px] h-[80px]">
                <img className=' bg-white   py-[19px] px-[60px] rounded-[5px] shadow-lg' src={efbecimg} alt="" />
              </div>
              <div className="artist_logo w-[212px] h-[80px]">
                <img className=' bg-white  py-[20px] px-[62px] rounded-[5px] shadow-lg' src={arisitimg} alt="" />
              </div>

              <div className="xailient_logo w-[212px] h-[80px]">
                <img className=' bg-white 2xl:py-[29px] py-[24px] px-[59px] rounded-[5px] shadow-lg' src={xailientimg} alt="" />
              </div>


              <div className="newscorp_logo w-[212px] h-[80px]">
                <img className=' bg-white  py-[19px] px-[53px] rounded-[5px] shadow-lg' src={newscorpimg} alt="" />
              </div>
            </div>
          </div>
        </div>


        {/* ---------------About-Ram Synergic--------------- */}
        <div className="about_ram-synergic lg:flex lg:justify-between 2xl:px-[166.5px] xl:px-[100px] lg:px-[80px] md:px-[50px] sm:px-[20px] px-[10px] pt-[124px] pb-[124px] ">

          <div className="left_side hidden lg:block">
            <img className='absolute 2xl:w-[220px] xl:w-[181px] w-[200px] 2xl:h-[280px] xl:h-[240px] h-[300px] 2xl:ml-[180px] ml-[130px] 2xl:mt-[160px] mt-[145px]' src={aboutimg2} alt="" />

            <img className='2xl:w-[322px] xl:w-[282px] w-[220px] 2xl:h-[409px] xl:h-[349px] h-[400px] rounded-[8px]' src={aboutimg1} alt="" />
          </div>

          <div className="right-side xl:pr-[50px] lg:pt-[60px] font-Poppins">
            <h1 className='text-[#000000] text-[32px] font-semibold text-center lg:text-left'>Ram Synergic</h1>
            <p className='text-[#333333] 2xl:w-[600px] xl:w-[550px]  lg:w-[430px] pt-[16px] text-center lg:text-left lg:mx-0 sm:mx-[50px] mx-[10px]'>At Ram Synergic, we’re not just another consultancy    and immigration firm.
              We’re your passport to possibility, with a strong presence in the heart of
              Dubai and a track record of transforming thousands of lives.</p>
            <p className='text-[#333333] xl:w-[550px] lg:w-[430px] mt-10 lg:text-left text-center lg:mx-0 sm:mx-[50px] mx-[10px]'>Our extensive network extends across various nations. We specialize in crafting solutions for aspirants seeking second citizenship or residencies in coveted locales. Your journey to a brighter tomorrow begins here, where freedom meets
              a world of new opportunities!</p>
          </div>

          <div className="left_side lg:hidden mt-16 flex sm:justify-center">
            <img className='absolute sm:mt-[180px] mt-[140px] sm:ml-[200px] ml-[150px] sm:w-[250px] w-[150px] sm:h-[350px] h-[250px]' src={aboutimg2} alt="" />

            <img className='sm:w-[350px] w-[200px] sm:h-[450px] h-[350px] sm:ml-0 ml-[50px] rounded-[8px]' src={aboutimg1} alt="" />
          </div>
        </div>


      </div >
    </>
  )
}
export default ClientsandAbout