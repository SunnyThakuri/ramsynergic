import React from 'react'
import passport from "../../assets/BlogUI/passport.png"
import introductionImg from "../../assets/BlogUI/Introduction.png"
import aipoweredImg from "../../assets/BlogUI/AI Powered.png"
import collaborateImg from "../../assets/BlogUI/Collaborate.png"
import ContactUI from '../HomeUI/ContactUI'
import Recomendation from '../blog/recommendation'
import { Blogs } from '../../config/blog'
import {useParams} from "react-router-dom"
import { Blog1 } from '../blog/content/blog1'
import { Blog2 } from '../blog/content/blog2'
import { Blog3 } from '../blog/content/blog3'

const BlogIndividual = () => {

  const id = parseInt(useParams().id, 10);
  console.log(id)

  let output;

  switch (id) {
    case 0:
      output = <Blog1/>
      break;
    case 1:
      output = <Blog1/>
      break;
    case 2:
      output = <Blog1/>
      break;
    case 3: 
      output =<Blog2/>
      break;
    case 4:
      output = <Blog3/>;
      break;
    default:
      output = <p>No matching content found for the provided ID.</p>;
      break;
  }


  return (
    <>
      <div className="all pt-8  md:px-[200px] mx-4 font-Poppins">
        <div className="heading_text md:w-[785px]">
          <h1 className="text-[32px] text-[#000000] font-semibold ">{Blogs[id].title}</h1>
          <div className="btn flex space-x-5 items-center mt-[16px]">
            <button className='bg-[#A0D7FF] px-5 py-2 rounded-[8px] text-white'>General</button>
            <h1 className='text-[#828282] font-Poppins'>{Blogs[id].date}</h1>
          </div>  
        </div>

        <div className="w-full md:h-[500px] mt-[32px]">
          <img className='w-full h-full object-cover rounded-xl ' src={Blogs[id].image || passport} alt="" />
        </div>

        {/* Content 1 */}
        {/* <div className='space-y-4 py-8 '>
          {Blogs[id].content1.map((content,index) =>(
            <div >
              <p className='font-bold text-lg'> {content.topic}</p>
              <p>{content.paragraph}</p>
            </div>
          ))}
        </div> */}
        
        {output}

        {/* -------------you may also like--------------- */}
        
      <Recomendation/>
      </div>
      <ContactUI />
    </>
  )
}
export default BlogIndividual