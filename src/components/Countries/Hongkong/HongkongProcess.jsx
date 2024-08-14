import React from 'react'
import arrowHead from "../../../assets/HungaryUI/arrow_head.png"
import cvImg from "../../../assets/HungaryUI/CV.png"
import interviewImg from "../../../assets/HungaryUI/interview.png"
import documentImg from "../../../assets/HungaryUI/DocumentImg.png"
import workpermitImg from "../../../assets/HungaryUI/workPermitImg.png"
import deplyomentImg from "../../../assets/HungaryUI/dployemntImg.png"
import vfsImg from "../../../assets/HungaryUI/vfs.png"
import zerozeroone from "../../../assets/HungaryUI/001.png"
import zerozerotwo from "../../../assets/HungaryUI/002.png"
import zerozerothree from "../../../assets/HungaryUI/003.png"
import zerozerofour from "../../../assets/HungaryUI/004.png"
import zerozerofive from "../../../assets/HungaryUI/005.png"
import zerozerosix from "../../../assets/HungaryUI/006.png"
import ContactUI from '../../HomeUI/ContactUI'
import arrow1 from "../../../assets/HungaryUI/arrow1.png"
import arrow2 from "../../../assets/HungaryUI/arrow2.png"
import arrow3 from "../../../assets/HungaryUI/arrow3.png"
import arrow4 from "../../../assets/HungaryUI/arrow4.png"



const HongkongProcess = () => {
  return (
    <>
      <div className="">

        <h1 className='text-center text-[#00264F] font-Poppins text-[32px] mt-[124px] font-semibold'>Process Details</h1>

        {/* --------------CV_DETAILS--------------- */}

        <div className="cv_seletion  md:flex justify-between mt-[56px] 2xl:mx-[166.5px] xl:mx-[100px] lg:mx-[80px] md:mx-[50px] sm:mx-[20px] mx-[10px]">

          <div className="left_side font-Poppins  bg-white shadow-lg xl:w-[591px] lg:w-[420px] md:w-[400px] rounded-[8px] pb-5">
            <img className='ml-[29px]' src={zerozeroone} alt="" />
            <h1 className='text-[22px] text-[#000000] text-center font-semibold font-Poppins '>C.V Selection</h1>

            <div className="flex space-x-2 mx-[29px] mt-[16px]">
              <img className='w-[15px] h-[15px] mt-1' src={arrowHead} alt="" />
              <h1><b>Preparation:</b> The candidate prepares a professional CV tailored to the job market and the specific position
                they are applying for.
              </h1>
            </div>
            <div className="flex space-x-2 mx-[29px] mt-[16px]">
              <img className='w-[15px] h-[15px] mt-1' src={arrowHead} alt="" />
              <h1><b>Application:</b> The candidate applies for job openings abroad through various recruitment agencies,
                or directly to employers.</h1>
            </div>

            <div className="flex space-x-2 mx-[29px] mt-[16px] mb-[26px]">
              <img className='w-[15px] h-[15px] mt-1' src={arrowHead} alt="" />
              <h1><b>Selection:</b> Employers or recruiters review submitted CVs and shortlist candidates based on qualifications, experience, and suitability for the position</h1>
            </div>
          </div>

          <div className="arrow hidden md:block">
            <img className='absolute 2xl:-ml-[90px] xl:-ml-[28px] lg:-ml-[54px] -ml-[15px] xl:mt-[280px] lg:mt-[380px] mt-[410px]' src={arrow1} alt="" />
          </div>

          <div className="right_side flex flex-col justify-center md:mt-0 mt-5">
            <img className='xl:w-[428px] lg:w-[328px] md:w-[228px] h-[269px]' src={cvImg} alt="" />
          </div>
        </div>


        {/* --------------INTERVIEW--------------- */}

        <div className="interview   md:flex justify-between mt-[56px] 2xl:mx-[166.5px] xl:mx-[100px] lg:mx-[80px] md:mx-[50px] sm:mx-[20px] mx-[10px]">

          <div className="hidden md:block">
            <div className="right_side flex flex-col justify-center  ">
              <img className='xl:w-[428px] lg:w-[328px] md:w-[228px] h-[269px]' src={interviewImg} alt="" />
            </div>
          </div>


          <div className="left_side font-Poppins  bg-white shadow-lg xl:w-[591px] lg:w-[420px] md:w-[400px] rounded-[8px] pb-5">

            <img className='ml-[29px]' src={zerozerotwo} alt="" />
            <h1 className='text-[22px] text-[#000000]  text-center font-semibold font-Poppins '>INTERVIEW</h1>

            <div className="flex space-x-2 mx-[29px] mt-[16px]">
              <img className='w-[15px] h-[15px] mt-1' src={arrowHead} alt="" />
              <h1><b>Invitation:</b>Shortlisted candidates receive an invitation for an interview.

              </h1>
            </div>
            <div className="flex space-x-2 mx-[29px] mt-[16px]">
              <img className='w-[15px] h-[15px] mt-1' src={arrowHead} alt="" />
              <h1><b>Types of Interviews: </b>The interview can be conducted
                via phone, video call, or in-person, depending on the employer’s location and preferences. </h1>
            </div>

            <div className="flex space-x-2 mx-[29px] mt-[16px] mb-[26px]">
              <img className='w-[15px] h-[15px] mt-1' src={arrowHead} alt="" />
              <h1><b>Evaluation:</b> During the interview, the employer assesses the candidate’s skills, experience, and fit for the role.
                This may involve multiple rounds of interviews
                and assessments. </h1>
            </div>
          </div>

          <div className="md:hidden mt-10">
            <div className="right_side flex flex-col justify-center  ">
              <img className='xl:w-[428px] lg:w-[328px] md:w-[228px] h-[269px]' src={interviewImg} alt="" />
            </div>
          </div>
        </div>

        {/* --------------------Documents Submission----------- */}
        <div className="Documents Submission md:flex justify-between mt-[56px] 2xl:mx-[166.5px] xl:mx-[100px] lg:mx-[80px] md:mx-[50px] sm:mx-[20px] mx-[10px]">

          <div className="left_side font-Poppins  bg-white shadow-lg xl:w-[591px] lg:w-[420px] md:w-[400px] rounded-[8px] pb-5">
            <img className='ml-[29px]' src={zerozerothree} alt="" />
            <h1 className='text-[22px] text-[#000000] text-center font-semibold font-Poppins '>Documents Submission</h1>

            <div className="flex space-x-2 mx-[29px] mt-[16px]">
              <img className='w-[15px] h-[15px] mt-1' src={arrowHead} alt="" />
              <h1><b>Required Documents:</b> After a successful interview, the candidate is asked to submit various documents, which may include
              </h1>
            </div>
            <div className="">
              <ul className='mx-[52px]'>
                <li>-Passport copies</li>
                <li>-Academic and professional qualifications</li>
                <li>-Proof of work experience</li>
                <li>-References and recommendation letters </li>
                <li>-Medical examination results (if required) </li>
                <li>-Police clearance certificate</li>
              </ul>
            </div>


            <div className="flex space-x-2 mx-[29px] mt-[16px] mb-[26px]">
              <img className='w-[15px] h-[15px] mt-1' src={arrowHead} alt="" />
              <h1><b>Verification:</b> Employers and relevant authorities verify
                the submitted documents to ensure authenticity and compliance with local regulations.</h1>
            </div>
          </div>

          <div className="arrow hidden md:block ">
            <img className='absolute 2xl:-ml-[90px] xl:-ml-[26px] lg:-ml-[58px] -ml-[20px] -mt-[50px]' src={arrow2} alt="" />
          </div>

          <div className="right_side flex flex-col justify-center md:mt-0 mt-10">
            <img className='xl:w-[428px] lg:w-[328px] md:w-[228px] h-[269px]' src={documentImg} alt="" />
          </div>
        </div>


        {/* --------------Work Permit--------------- */}

        <div className="md:flex justify-between mt-[56px] 2xl:mx-[166.5px] xl:mx-[100px] lg:mx-[80px] md:mx-[50px] sm:mx-[20px] mx-[10px]">

          <div className="right_side hidden md:block">
            <img className='xl:w-[428px] lg:w-[328px] md:w-[228px] h-[269px]' src={workpermitImg} alt="" />
          </div>

          <div className="arrow ">
            <img className='absolute 2xl:-ml-[20px] lg:-ml-[54px]  -ml-[100px] -mt-[50px]' src={arrow3} alt="" />
          </div>

          <div className="left_side font-Poppins  bg-white shadow-lg xl:w-[591px] lg:w-[420px] md:w-[400px] rounded-[8px] pb-5">
            <img className='ml-[29px]' src={zerozerofour} alt="" />
            <h1 className='text-[22px] text-[#000000] text-center font-semibold font-Poppins '>Work Permit</h1>

            <div className="flex space-x-2 mx-[29px] mt-[16px]">
              <img className='w-[15px] h-[15px] mt-1' src={arrowHead} alt="" />
              <h1><b>Application:</b> The employer or the candidate (depending on the country’s process) submits an application for a work permit to the relevant immigration authorities.
              </h1>
            </div>
            <div className="flex space-x-2 mx-[29px] mt-[16px]">
              <img className='w-[15px] h-[15px] mt-1' src={arrowHead} alt="" />
              <h1><b>Approval:</b> The authorities review the application, which may include verifying job offer details, assessing labor market needs, and ensuring that the candidate meets all legal requirements.  </h1>
            </div>

            <div className="flex space-x-2 mx-[29px] mt-[16px] mb-[26px]">
              <img className='w-[15px] h-[15px] mt-1' src={arrowHead} alt="" />
              <h1><b>Issuance:</b> Once approved, the work permit is issued, allowing the candidate to legally work in the
                host country.</h1>
            </div>
          </div>
          <div className="right_side md:hidden mt-10">
            <img className='xl:w-[428px] lg:w-[328px] md:w-[228px] h-[269px]' src={workpermitImg} alt="" />
          </div>
        </div>

        {/* --------------VFS/Embassy Submission--------------- */}

        <div className="md:flex justify-between mt-[56px] 2xl:mx-[166.5px] xl:mx-[100px] lg:mx-[80px] md:mx-[50px] sm:mx-[20px] mx-[10px]">

          <div className="left_side font-Poppins  bg-white shadow-lg xl:w-[591px] lg:w-[420px] md:w-[400px] rounded-[8px] pb-5">
            <img className='ml-[29px]' src={zerozerofive} alt="" />
            <h1 className='text-[22px] text-[#000000] text-center font-semibold font-Poppins '>VFS/Embassy Submission</h1>

            <div className="flex space-x-2 mx-[29px] mt-[16px]">
              <img className='w-[15px] h-[15px] mt-1' src={arrowHead} alt="" />
              <h1><b>Appointment Booking</b>: The candidate schedules an appointment with the Visa Facilitation Services (VFS) center or directly with the embassy/consulate of the host country.
              </h1>
            </div>

            <div className="flex space-x-2 mx-[29px] mt-[16px]">
              <img className='w-[15px] h-[15px] mt-1' src={arrowHead} alt="" />
              <h1><b>Document Submission:</b> The candidate submits all required documents, including the approved work
                permit, passport, visa application form, photographs,
                and any additional documents specified
                by the embassy or consulate.</h1>
            </div>

            <div className="flex space-x-2 mx-[29px] mt-[16px] mb-[26px]">
              <img className='w-[15px] h-[15px] mt-1' src={arrowHead} alt="" />
              <h1><b>Biometrics and Interview:</b> The candidate may be required to provide biometrics (fingerprints and photograph) and attend an interview at the VFS center or embassy/consulate. </h1>
            </div>

            <div className="flex space-x-2 mx-[29px] mt-[16px] mb-[26px]">
              <img className='w-[15px] h-[15px] mt-1' src={arrowHead} alt="" />
              <h1><b>Visa Processing:</b> The visa application is processed, which may involve additional background checks and verification by the host country’s authorities. </h1>
            </div>
          </div>
          <div className="arrow hidden md:block">
            <img className='absolute 2xl:-ml-[90px] xl:-ml-[30px] lg:-ml-[50px] -ml-[12px] -mt-[50px]' src={arrow4} alt="" />
          </div>

          <div className="right_side flex flex-col justify-center md:mt-0 mt-10">
            <img className='xl:w-[428px] lg:w-[328px] md:w-[228px] h-[269px]' src={vfsImg} alt="" />
          </div>


        </div>


        {/* --------------DEPLOYMENT--------------- */}

        <div className="md:flex justify-between mt-[56px] 2xl:mx-[166.5px] xl:mx-[100px] lg:mx-[80px] md:mx-[50px] sm:mx-[20px] mx-[10px]">
          4
          <div className="hidden md:block">
            <div className="right_side flex flex-col justify-center">
              <img className='xl:w-[428px] lg:w-[328px] md:w-[228px] h-[269px]' src={deplyomentImg} alt="" />
            </div>
          </div>

          <div className="arrow ">
            <img className='absolute 2xl:-ml-[30px] xl:-ml-[80px] lg:-ml-[52px] -ml-[100px] 2xl:mt-0 -mt-[52px]  ' src={arrow3} alt="" />
          </div>

          <div className="left_side font-Poppins  bg-white shadow-lg xl:w-[591px] lg:w-[420px] md:w-[400px] rounded-[8px] pb-5">
            <img className='ml-[29px]' src={zerozerosix} alt="" />
            <h1 className='text-[22px] text-[#000000]  text-center font-semibold font-Poppins '>Deployment</h1>

            <div className="flex space-x-2 mx-[29px] mt-[16px]">
              <img className='w-[15px] h-[15px] mt-1' src={arrowHead} alt="" />
              <h1><b>Visa Issuance:</b> Once the visa is approved, the candidate receives their passport with the visa stamped in it.
              </h1>
            </div>
            <div className="flex space-x-2 mx-[29px] mt-[16px]">
              <img className='w-[15px] h-[15px] mt-1' src={arrowHead} alt="" />
              <h1><b>Travel Arrangements:</b> The candidate makes travel arrangements, including booking flights and accommodation in the host country.</h1>
            </div>

            <div className="flex space-x-2 mx-[29px] mt-[16px] mb-[26px]">
              <img className='w-[15px] h-[15px] mt-1' src={arrowHead} alt="" />
              <h1><b>Pre-departure Preparations:</b> The candidate completes any necessary pre-departure preparations, such as obtaining travel insurance, attending orientation sessions (if provided by the employer), and finalizing personal arrangements.</h1>
            </div>

            <div className="flex space-x-2 mx-[29px] mt-[16px] mb-[26px]">
              <img className='w-[15px] h-[15px] mt-1' src={arrowHead} alt="" />
              <h1><b>Arrival and Commencement:</b> Upon arrival in the host country, the candidate may need to undergo additional immigration procedures. They then report to the employer and commence their employment
                as per the agreed terms.</h1>
            </div>
          </div>
          <div className="md:hidden mt-10">
            <div className="right_side flex flex-col justify-center">
              <img className='xl:w-[428px] lg:w-[328px] md:w-[228px] h-[269px]' src={deplyomentImg} alt="" />
            </div>
          </div>
        </div>


        <div className="bg-[#00264F] 2xl:mx-[315.5px] xl:mx-[215px] lg:mx-[115px] md:mx-[50px] sm:mx-[20px] mx-[10px] py-[20px] px-[20px] rounded-[8px] mt-[16px]">
          <h1 className='text-[#F7F7F7] text-center'>This structured process ensures that the candidate meets all legal and regulatory requirements for working abroad while also providing the employer with the necessary documentation
            to support the employment. </h1>
        </div>

        <ContactUI />
      </div>
    </>
  )
}
export default HongkongProcess