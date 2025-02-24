
import TalentAcquisitionImg1 from "../../assets/ServiceUI/TalentAcquisitionImg1.png"
import TalentAcquisitionImg2 from "../../assets/ServiceUI/TalentAcquisitionImg2.png"
import zerozerofive from "../../assets/ServiceUI/005.png"

const TalentAcquisition = () => {
  return (
    <>
      <div className="all md:flex justify-between 2xl:mx-[166.5px] xl:mx-[100px] lg:mx-[80px] md:mx-[50px] sm:mx-[20px] mx-[10px]  md:pt-[202px] pt-[120px]">

        <div className="left_side hidden md:block">
          <img className='absolute mt-[170px] lg:w-[205px] w-[150px] h-[215px]' src={TalentAcquisitionImg1} alt="" />
          <img className='lg:w-[237px] w-[200px] h-[340px] ml-[80px]' src={TalentAcquisitionImg2} alt="" />

        </div>

        <div className="right_side">
          <div className="flex md:justify-normal  space-x-2 ">
            <img className='w-[10px] h-[20px] mt-2' src={zerozerofive} alt="" />
            <h1 className='text-[#000000] font-semibold text-[22px]'>Talent Acquisition</h1>
          </div>

          <h1 className='text-[#333333] xl:w-[550px] lg:w-[400px] md:w-[320px] mt-[12px] md:ml-[25px] sm:mx-0 mx-[10px]'>We expertly match top candidates with leading employers, ensuring the best fit. Our talent acquisition services leverage data-driven insights and
            industry expertise.</h1>

          <ul className='list-disc xl:w-[433px] lg:w-[400px] md:w-[300px] mt-5 sm:ml-12 ml-8'>
            <li>Sourcing qualified candidates from vast talent networks</li>
            <li>Rigorous skills assessment and behavioral-based interviews</li>
            <li>Reference and background checks for quality assurance</li>
            <li>Job offer negotiations and compensation benchmarking</li>
            <li>Onboarding coordination and 90-day check-ins</li>
            <li>Ongoing talent advisory and performance management</li>
            <li>Employer branding and employee value proposition (EVP) development</li>
            <li>Diversity, equity and inclusion hiring strategies</li>
            <li>Talent pipeline building and succession planning</li>
          </ul>
        </div>

        <div className="left_side md:hidden mt-10">
          <img className='absolute  left-[120px] mt-[170px] h-[215px]' src={TalentAcquisitionImg1} alt="" />

          <div className=" flex  justify-center">
            <img className='h-[340px]' src={TalentAcquisitionImg2} alt="" /></div>
        </div>
      </div>
    </>
  )
}
export default TalentAcquisition