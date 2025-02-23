
import expertImg1 from "../../assets/ServiceUI/expert1.png";
import expertImg2 from "../../assets/ServiceUI/expert2.png";
import zerozerothree from "../../assets/ServiceUI/001.png";

const ExpertRecuritment = () => {
  return (
    <>
      <div className="all md:flex justify-between 2xl:mx-[166.5px] xl:mx-[100px] lg:mx-[80px] md:mx-[50px] sm:mx-[20px] mx-[10px]  md:pt-[202px] pt-[120px]">
        <div className="left_side hidden md:block">
          <img
            className="absolute mt-[170px] lg:w-[205px] w-[150px] h-[215px]"
            src={expertImg2}
            alt=""
          />
          <img
            className="lg:w-[237px] w-[200px] h-[340px] ml-[80px]"
            src={expertImg1}
            alt=""
          />
        </div>

        <div className="right_side">
          <div className="flex md:justify-normal justify-center space-x-2  ">
            <img
              className="w-[10px] h-[20px] mt-2"
              src={zerozerothree}
              alt=""
            />
            <h1 className="text-[#000000] font-semibold text-[22px]">
              EXPERT RECRUITMENT in EUROPE
            </h1>
          </div>

          <h1 className="text-[#333333] xl:w-[550px] lg:w-[400px] md:w-[320px] mt-[12px] md:ml-[25px] sm:mx-0 mx-[10px]">
            We connect top talent with leading employers through our specialized
            recruitment services.
          </h1>

          <ul className="list-disc xl:w-[433px] lg:w-[400px] md:w-[300px] mt-5 sm:ml-12 ml-8">
            <li>Extensive candidate database across European markets
            </li>
            <li>Expertise in navigating EU labor laws and work permits</li>
            <li>Industry-specific recruitment for highly skilled professionals
            </li>
            <li>Multilingual hiring support for diverse European businesses
            </li>
            <li>Employer branding and talent attraction strategies for competitive hiring</li>
            <li>Comprehensive assessment and selection process to ensure top-tier talent
            </li>
            
          </ul>
        </div>
        <div className="left_side md:hidden mt-10">
          <div className="">
            <img
              className="absolute  left-[120px] mt-[170px] h-[215px]"
              src={expertImg2}
              alt=""
            />
          </div>
          <div className=" flex  justify-center">
            <img className=" h-[340px] " src={expertImg1} alt="" />
          </div>
        </div>
      </div>
    </>
  );
};
export default ExpertRecuritment;
/* import React from "react";
import expertImg1 from "../../assets/ServiceUI/expert1.png";
import expertImg2 from "../../assets/ServiceUI/expert2.png";
import zerozerothree from "../../assets/ServiceUI/003.png";

const ExpertRecuritment = () => {
  return (
    <>
      <div className="all md:flex justify-between 2xl:mx-[166.5px] xl:mx-[100px] lg:mx-[80px] md:mx-[50px] sm:mx-[20px] mx-[10px]  md:pt-[202px] pt-[120px]">
        <div className="left_side hidden md:block">
          <img
            className="absolute mt-[170px] lg:w-[205px] w-[150px] h-[215px]"
            src={expertImg2}
            alt=""
          />
          <img
            className="lg:w-[237px] w-[200px] h-[340px] ml-[80px]"
            src={expertImg1}
            alt=""
          />
        </div>

        <div className="right_side">
          <div className="flex md:justify-normal justify-center space-x-2  ">
            <img
              className="w-[10px] h-[20px] mt-2"
              src={zerozerothree}
              alt=""
            />
            <h1 className="text-[#000000] font-semibold text-[22px]">
              Expert Recruitment
            </h1>
          </div>

          <h1 className="text-[#333333] xl:w-[550px] lg:w-[400px] md:w-[320px] mt-[12px] md:ml-[25px] sm:mx-0 mx-[10px]">
            Our training programs empower professionals with enhanced skills and
            knowledge. The curriculum, designed by industry experts, blends
            hands-on instruction, interactive workshops, and self-paced
            e-learning.
          </h1>

          <ul className="list-disc xl:w-[433px] lg:w-[400px] md:w-[300px] mt-5 sm:ml-12 ml-8">
            <li>Continuing education credits</li>
            <li>Personalized learning plans</li>
            <li>Post-training coaching and assessments</li>
            <li>Peer collaboration platforms</li>
            <li>Dedicated program coordinators</li>
            <li>Certification opportunities</li>
            <li>Technical skills development across latest technologies</li>
            <li>Leadership development workshops</li>
            <li>
              Soft skills training in areas like communication, problem-solving
            </li>
          </ul>
        </div>
        <div className="left_side md:hidden mt-10">
          <div className="">
            <img
              className="absolute  left-[120px] mt-[170px] h-[215px]"
              src={expertImg2}
              alt=""
            />
          </div>
          <div className=" flex  justify-center">
            <img className=" h-[340px] " src={expertImg1} alt="" />
          </div>
        </div>
      </div>
    </>
  );
};
export default ExpertRecuritment;
 */
