import React from 'react'
import footerlogo1 from "../../assets/Header/footerlogo1.png"
import facbook from "../../assets/HomeUI/facebook.png"
import google from "../../assets/HomeUI/google.png"
import tiktok from "../../assets/HomeUI/tiktok.png"
import instagram from "../../assets/HomeUI/insta.png"
import { NavLink } from 'react-router-dom'

const Footer = () => {
  return (
    <>
      <div className="all_items bg-[#00264F] mt-[100px] 2xl:px-[166.5px] xl:px-[100px] lg:px-[80px] md:px-[50px] sm:px-[50px] px-[20px]">


        <div className="items md:flex md:justify-between grid sm:grid-cols-3  pt-[40px] gap-10">

          <div className="logo  sm:col-span-2 ">
            <div className="images flex sm:justify-normal  space-x-5">
              <img
                className='sm:w-full w-[100px]' src={footerlogo1} alt="" />
             
            </div>
            <h1 className='text--[#9B9B9B] text-[14px] sm:w-[225px] text-[#9B9B9B] pt-[32px] sm:text-left text-center'>Global Connect Consulting Services in Masah Allbdha Documents Clearing Services in UAE</h1>
          </div>

          <div className="useufl_links hidden sm:block text-white">
            <h1 className='font-semibold'>USEFUL LINKS</h1>
            <ul className='list-outside list-disc pl-5'>
              <li className='text-[#007BFF] pt-[12px] '>
                <NavLink to='/'><span className='text-[#CFCFCF]'>Home</span></NavLink>
              </li>
              <li className='text-[#007BFF]'>
                <NavLink to='/about'><span className='text-[#CFCFCF]'>About</span></NavLink>
              </li>

              <li className='text-[#007BFF]'>
                <NavLink to='/services'><span className='text-[#CFCFCF]'>Services</span></NavLink>
              </li>
              <li className='text-[#007BFF]'>
                <NavLink to='/blog'><span className='text-[#CFCFCF]'>Blog</span></NavLink>
              </li>
              <li className='text-[#007BFF]'>
                <NavLink to='/contact'><span className='text-[#CFCFCF]'>Contact</span></NavLink>
              </li>
            </ul>
          </div>

          <div className="countries hidden sm:block  text-white md:pt-0 pt-[20px] sm:col-span-2">
            <h1 className='font-semibold'>COUNTRIES</h1>
            <ul className='list-outside list-disc pl-5 pt-[12px]'>
              <li className='text-[#007BFF]'>
                <span className='text-[#CFCFCF]'>Hungary</span>
              </li>
              <li className='text-[#007BFF]'>
                <span className='text-[#CFCFCF]'>Slovakia </span>
              </li>
              <li className='text-[#007BFF]'>
                <span className='text-[#CFCFCF]'>Croatia</span>
              </li>
              <li className='text-[#007BFF]'>
                <span className='text-[#CFCFCF]'>Bulgaria</span>
              </li>
              <li className='text-[#007BFF]'>
                <span className='text-[#CFCFCF]'>Albania</span>
              </li>
              <li className='text-[#007BFF]'>
                <span className='text-[#CFCFCF]'>Romania </span>
              </li>
              <li className='text-[#007BFF]'>
                <span className='text-[#CFCFCF]'>Norway</span>
              </li>
              <li className='text-[#007BFF]'>
                <span className='text-[#CFCFCF]'>GCC</span>
              </li>
            </ul>
          </div>




          {/* ------------------for respnsive part ---------------- */}
          <div className="sm:hidden flex justify-between">
            <div className="useufl_links text-white ">
              <h1 className='font-semibold'>USEFUL LINKS</h1>
              <ul className='list-outside list-disc pl-5'>
                <li className='text-[#007BFF] pt-[12px] '>
                  <NavLink to='/'><span className='text-[#CFCFCF]'>Home</span></NavLink>
                </li>
                <li className='text-[#007BFF]'>
                  <NavLink to='/about'><span className='text-[#CFCFCF]'>About</span></NavLink>
                </li>

                <li className='text-[#007BFF]'>
                  <NavLink to='/services'><span className='text-[#CFCFCF]'>Services</span></NavLink>
                </li>
                <li className='text-[#007BFF]'>
                  <NavLink to='/blog'><span className='text-[#CFCFCF]'>Blog</span></NavLink>
                </li>
                <li className='text-[#007BFF]'>
                  <NavLink to='/contact'><span className='text-[#CFCFCF]'>Contact</span></NavLink>
                </li>
              </ul>
            </div>

            <div className="countries  text-white">
              <h1 className='font-semibold'>COUNTRIES</h1>
              <ul className='list-outside list-disc pl-5 pt-[12px]'>
                <li className='text-[#007BFF]'>
                  <span className='text-[#CFCFCF]'>Hongkong</span>
                </li>
                <li className='text-[#007BFF]'>
                  <span className='text-[#CFCFCF]'>Slovakia </span>
                </li>
                <li className='text-[#007BFF]'>
                  <span className='text-[#CFCFCF]'>Croatia</span>
                </li>
                <li className='text-[#007BFF]'>
                  <span className='text-[#CFCFCF]'>Spain</span>
                </li>
                <li className='text-[#007BFF]'>
                  <span className='text-[#CFCFCF]'>Lithuania</span>
                </li>
                <li className='text-[#007BFF]'>
                  <span className='text-[#CFCFCF]'>Australia </span>
                </li>
                <li className='text-[#007BFF]'>
                  <span className='text-[#CFCFCF]'>Canada</span>
                </li>
                <li className='text-[#007BFF]'>
                  <span className='text-[#CFCFCF]'>GCC</span>
                </li>
              </ul>
            </div>
          </div>
          {/* --------------------------------------------------- */}

          <div className="social_links flex space-x-5 ">
            <div className="fb">
              <img src={facbook} alt="" />
            </div>
            <div className="fb">
              <img src={google} alt="" />
            </div>
            <div className="fb">
              <img src={tiktok} alt="" />
            </div>
            <div className="fb">
              <img src={instagram} alt="" />
            </div>
          </div>

        </div>


        <div className="copyright flex justify-between pb-[40px] pt-[20px] border-t-[1px] border-t-[#FFFFFF] text-[#FFFFFF] mt-[40px]">
          <div className="copyright_text">
            <h1>© 2023 Global Connect | All Rights Reserved.</h1>
          </div>

          <div className="flex space-x-5">
            <NavLink to='/privacyPolicy'><h1>Privacy Policy</h1></NavLink>
            <NavLink to='/termsAndCondition'><h1>Terms & Conditions</h1></NavLink>
          </div>
        </div>
      </div>

    </>
  )
}
export default Footer