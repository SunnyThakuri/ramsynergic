
import passportImg from "../assets/BlogUI/passport.png"
import heroImg1 from "../assets/BlogUI/BlogHeroImg1.png"
import heroImg2 from "../assets/BlogUI/BlogHeroImg2.png"
import heroImg3 from "../assets/BlogUI/BlogHeroImg3.png"
import heroImg4 from "../assets/BlogUI/BlogHeroImg4.png"
import popularImg1 from "../assets/BlogUI/popularImg1.png"
import popularImg2 from "../assets/BlogUI/popularImg2.png"
import ContactUI from '../components/HomeUI/ContactUI'
import { NavLink } from 'react-router-dom'

const Blog = () => {
  return (
    <>
      <div className="allItems px-4 md:px-10 lg:px-[166.5px] ">

        <div className="Hero_Section flex flex-col lg:flex-row gap-10">
          <div className="left-side h-auto lg:h-[544px]">
            <div className="img">
              <NavLink to='/BlogIndividual'>
                <img className='w-full h-[414px]' src={passportImg} alt="" />
                <h1 className='font-Poppins text-[20px] font-semibold mt-[16px]'>IRCC CONFIRMS CONTINUATION OF CURRENT EXPRESS ENTRY CATEGORIES IN 2024</h1>
              </NavLink>
              <div className="btn flex space-x-5 mt-[16px]">
                <button className='bg-[#A0D7FF] px-[12px] text-[14px]  py-[6px] rounded-[8px] text-white'>General</button>
                <h1 className='text-[#828282]  text-[14px] font-Poppins'>January 12, 2024</h1>
              </div>
            </div>
          </div>

          <div className="right_side font-Poppins space-y-5 h-auto lg:h-[544px] overflow-hidden">
            <div className="img1 flex space-x-6">
              <img className='w-[139px] h-[118px]' src={heroImg4} alt="" />
              <div className="text">
                <h1 className='font-semibold'>OET VS. IELTS: WHICH LANGUAGE TEST IS RIGHT FOR YOU?</h1>
                <div className="btn flex space-x-5 mt-[16px]">
                  <button className='bg-[#A0D7FF] px-5 py-2 rounded-[8px] text-white'>General</button>
                  <h1 className='text-[#828282] font-Poppins'>January 12, 2024</h1>
                </div>
              </div>
            </div>

            <div className="img2 flex space-x-6">
              <img className='w-[139px] h-[118px]' src={heroImg1} alt="" />
              <div className="text">
                <h1 className='font-semibold'>OET VS. IELTS: WHICH LANGUAGE TEST IS RIGHT FOR YOU?</h1>
                <div className="btn flex space-x-5 mt-[16px]">
                  <button className='bg-[#A0D7FF] px-5 py-2 rounded-[8px] text-white'>General</button>
                  <h1 className='text-[#828282] font-Poppins'>January 12, 2024</h1>
                </div>
              </div>
            </div>

            <div className="img3 flex space-x-6">
              <img className='w-[139px] h-[118px]' src={heroImg2} alt="" />
              <div className="text">
                <h1 className='font-semibold'>OET VS. IELTS: WHICH LANGUAGE TEST IS RIGHT FOR YOU?</h1>
                <div className="btn flex space-x-5 mt-[16px]">
                  <button className='bg-[#A0D7FF] px-5 py-2 rounded-[8px] text-white'>General</button>
                  <h1 className='text-[#828282] font-Poppins'>January 12, 2024</h1>
                </div>
              </div>
            </div>

            <div className="img4 flex space-x-6">
              <img className='w-[139px] h-[118px]' src={heroImg3} alt="" />
              <div className="text">
                <h1 className='font-semibold'>OET VS. IELTS: WHICH LANGUAGE TEST IS RIGHT FOR YOU?</h1>
                <div className="btn flex space-x-5 mt-[16px]">
                  <button className='bg-[#A0D7FF] px-5 py-2 rounded-[8px] text-white'>General</button>
                  <h1 className='text-[#828282] font-Poppins'>January 12, 2024</h1>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* --------------Popular_Section-------------------- */}

        <h1 className='text-[#828282] font-Poppins mt-[124px]'>POPULAR</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          <div className="popular1 mt-[40px] font-Poppins">
            <img className='w-full' src={popularImg1} alt="" />
            <h1 className='font-semibold mt-[16px]'>IRCC CONFIRMS CONTINUATION OF CURRENT EXPRESS ENTRY CATEGORIES IN 2024</h1>
            <div className="btn flex space-x-5 mt-[16px]">
              <button className='bg-[#A0D7FF] px-5 py-2 rounded-[8px] text-white'>General</button>
              <h1 className='text-[#828282] font-Poppins'>January 12, 2024</h1>
            </div>
          </div>

          <div className="popular2 mt-[40px] font-Poppins">
            <img className='w-full' src={popularImg2} alt="" />
            <h1 className='font-semibold mt-[16px]'>IRCC CONFIRMS CONTINUATION OF CURRENT EXPRESS ENTRY CATEGORIES IN 2024</h1>
            <div className="btn flex space-x-5 mt-[16px]">
              <button className='bg-[#A0D7FF] px-5 py-2 rounded-[8px] text-white'>General</button>
              <h1 className='text-[#828282] font-Poppins'>January 12, 2024</h1>
            </div>
          </div>

          <div className="popular3 mt-[40px] font-Poppins">
            <img className='w-full' src={popularImg1} alt="" />
            <h1 className='font-semibold mt-[16px]'>IRCC CONFIRMS CONTINUATION OF CURRENT EXPRESS ENTRY CATEGORIES IN 2024</h1>
            <div className="btn flex space-x-5 mt-[16px]">
              <button className='bg-[#A0D7FF] px-5 py-2 rounded-[8px] text-white'>General</button>
              <h1 className='text-[#828282] font-Poppins'>January 12, 2024</h1>
            </div>
          </div>

          <div className="popular4 mt-[40px] font-Poppins">
            <img className='w-full' src={popularImg2} alt="" />
            <h1 className='font-semibold mt-[16px]'>IRCC CONFIRMS CONTINUATION OF CURRENT EXPRESS ENTRY CATEGORIES IN 2024</h1>
            <div className="btn flex space-x-5 mt-[16px]">
              <button className='bg-[#A0D7FF] px-5 py-2 rounded-[8px] text-white'>General</button>
              <h1 className='text-[#828282] font-Poppins'>January 12, 2024</h1>
            </div>
          </div>
        </div>

      </div>

      <ContactUI />
    </>
  )
}
export default Blog
