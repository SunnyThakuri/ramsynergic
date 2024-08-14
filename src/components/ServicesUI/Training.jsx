import React from 'react'
import zerozerotwo from "../../assets/ServiceUI/002.png"
import training1 from "../../assets/ServiceUI/Training1.png"
import training2 from "../../assets/ServiceUI/Training2.png"

const Training = () => {
  return (
    <>
      <div className="bg-[#00264F] mt-[124px] md:flex justify-between 2xl:px-[166.5px] xl:px-[100px] lg:px-[80px] md:px-[50px] sm:px-[20px] px-[10px] pb-[124px]">

        <div className="left_side">
          <div className="heading flex md:justify-normal justify-center pt-[163px] space-x-2">
            <img className='w-[10px] h-[20px] mt-2' src={zerozerotwo} alt="002" />
            <h1 className='text-white text-[22px] font-semibold'>Training & Development Programs</h1>
          </div>
          <p className=' text-[#F7F7F7] mt-[12px] ml-[22px] 2xl:w-[653px] xl:w-[600px] lg:w-[480px] md:w-[390px]'>Our training programs, designed by experts, empower employees with enhanced skills. The blended curriculum covers technical, leadership, and soft skills.</p>

          <ul className='text-white mt-[12px] list-disc ml-[40px] xl:w-auto lg:w-[400px] md:w-[320px]'>
            <li>Tailored curriculum developed by industry experts</li>
            <li>Blend of instructor-led sessions, interactive workshops, and self-paced e-learning</li>
            <li>Technical skills training across in-demand technologies and software</li>
            <li>Leadership development programs to cultivate high-potential talent</li>
            <li>Soft skills workshops focused on communication, problem-solving, and critical thinking</li>
            <li>Continuing education credits and certification opportunities</li>
          </ul>
        </div>

        <div className="right_side pt-[120px] ">
          <div className="flex md:justify-normal justify-center">
            <img className='absolute sm:mt-[160px] mt-[190px] 2xl:right-[300px] xl:right-[220px] lg:right-[180px] right-[150px] sm:right-[300px]' src={training1} alt="" />
          </div>
          <div className="flex md:justify-normal justify-center">
            <img src={training2} alt="" />
          </div>
        </div>

      </div>
    </>
  )
}
export default Training