
import passportImg from "../assets/BlogUI/passport.png"
import heroImg1 from "../assets/BlogUI/BlogHeroImg1.png"
import heroImg2 from "../assets/BlogUI/BlogHeroImg2.png"
import heroImg3 from "../assets/BlogUI/BlogHeroImg3.png"
import heroImg4 from "../assets/BlogUI/BlogHeroImg4.png"
import popularImg1 from "../assets/BlogUI/popularImg1.png"
import popularImg2 from "../assets/BlogUI/popularImg2.png"
import ContactUI from '../components/HomeUI/ContactUI'
import { NavLink } from 'react-router-dom'
import { Blogs } from "../config/blog"

const Blog = () => {
  return (
    <>
      <div className="allItems px-4 md:px-10 lg:px-[166.5px] pt-8 ">

        <div className="Hero_Section flex flex-col lg:flex-row gap-10">
          <div className="left-side h-auto lg:h-[544px]">
            <div className="img">
              <NavLink to='/BlogIndividual'>
                <div className="w-full md:h-[450px]">
                  <img className='w-full h-full object-cover rounded-xl' src={passportImg} alt="" />
                </div>
                <h1 className='font-Poppins text-[20px] font-semibold mt-[16px]'>IRCC CONFIRMS CONTINUATION OF CURRENT EXPRESS ENTRY CATEGORIES IN 2024</h1>
              </NavLink>
              <div className="btn flex space-x-5 items-center mt-[16px]">
                <button className='bg-blue-900 px-[16px] text-[14px]  py-[8px] rounded-[8px] text-white'>General</button>
                <h1 className='text-[#828282]  text-[14px] font-Poppins'>January 12, 2024</h1>
              </div>
            </div>
          </div>
          <div className="right_side font-Poppins space-y-5 h-auto lg:h-[544px] overflow-hidden">
          {
            Blogs.slice(1).map((blog,index)=>(
                <div key={index} className="img1 flex space-x-6">
                  <img className='w-[139px] h-[118px]' src={heroImg4} alt="" />
                  <div className="text flex flex-col justify-between pb-4">
                    <h1 className='font-semibold'>{blog.title}</h1>
                    <div className="btn items-center flex space-x-5 ">
                      <button className='bg-blue-900 px-5 py-2 rounded-[8px] text-white'>General</button>
                      <h1 className='text-[#828282] font-Poppins'>{blog.date}</h1>
                    </div>
                  </div>
                </div>
            ))
          }
          </div>

        </div>

        {/* --------------Popular_Section-------------------- */}

        <h1 className='text-[#828282] font-Poppins  mt-[124px]'>POPULAR</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {
            Blogs.slice(1).map((blog,index) =>(
              <div key={index} className="popular1 mt-[40px] font-Poppins">
                <img className='w-full' src={popularImg1} alt="" />
                <h1 className='font-semibold mt-[16px] uppercase '>{blog.title}</h1>
                <div className="btn flex space-x-5 items-center mt-[16px]">
                  <button className='bg-blue-900 px-5 py-2 rounded-[8px] text-white'>General</button>
                  <h1 className='text-[#828282] font-Poppins'>{blog.date}</h1>
                </div>
              </div>
            ))
          }
        </div>

      </div>

      <ContactUI />
    </>
  )
}
export default Blog
