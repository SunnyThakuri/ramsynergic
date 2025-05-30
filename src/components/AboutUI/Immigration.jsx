
const Immigration = () => {
  return (
    <div className="all  2xl:mx-[166.5px] xl:mx-[100px] lg:mx-[80px] md:mx-[50px] sm:mx-[20px] mx-[10px] my-10 lg:my-[166px] flex flex-col lg:flex-row justify-between">
      <div className="left-side">
        <div className="flex flex-col-reverse gap-4 md:flex-row justify-between">
          <div>
            <h1 className="text-[#000000] text-[24px] lg:text-[36px] font-semibold">
              About Us
            </h1>
            <h1 className="text-[#007BFF] text-[24px] lg:text-sm font-semibold">
              WHAT WE DO
            </h1>

            <p className="text-[#828282] w-full lg:w-[487px] mt-5">
              At the heart of our operations, we excel in delivering bespoke
              manpower solutions that cater to the unique requirements of our
              clients, whether for short-term assignments or long-term projects.
              Acknowledging that employees are the lifeblood of any organization, we
              prioritize the delivery of reliable and trusted manpower services
              across various sectors. We facilitate the supply of qualified
              candidates across multiple sectors in different countries, leveraging
              our expertise to provide exclusive manpower solutions in the UAE,
              Nepal, India, Europe, and numerous organizations worldwide.
            </p>
          </div>
        <div>
         <img
         src="/aboutUs/Workforce.jpg"
         alt=""
         className="w-full h-full object-cover"/>
        </div>
        </div>


        <h1 className="text-[#000000]  text-[24px] lg:text-[32px] font-semibold mt-4 lg:mt-8">
          OUR MISSION
        </h1>
        <p className="text-[#828282] w-full lg:w-[487px]  mt-5">
          Our core mission is to revolutionizing the human resource landscaping
          and connecting the talents with opportunities on a global Scale. Our
          mission encompasses several pillars as follows:
        </p>
        <div className="flex flex-col items-center justify-between gap-4 md:gap-8  mt-8">
          <div className="flex flex-col md:flex-row gap-6 w-full h-full  justify-between">
            <div className="w-full">
              <div className="space-y-3 w-full h-full shadow-lg px-4 py-4 rounded-lg">
                <h2 className="font-semibold md:text-xl">
                  Deliver Exceptional Services
                </h2>
                <p className="text-gray-400 text-justify ">
                  We offer a comprehensive range of professional manpower
                  supply, training, and company representation services to
                  ensure complete client and partner satisfaction.
                </p>
              </div>
            </div>
            <div className="w-full ">
              <div className=" space-y-3 w-full h-full shadow-lg px-4 py-4 rounded-lg">
                <h2 className="font-semibold md:text-xl">
                  {" "}
                  Efficient Recruitment
                </h2>
                <p className="text-gray-500 text-justify ">
                  We streamline the recruitment process by systematically and
                  efficiently shortlisting applicants, reducing delays and
                  ensuring timely deployment.
                </p>
              </div>
            </div>
          </div>
          <div className="flex flex-col md:flex-row gap-6  justify-between ">
            <div className="w-full">
              <div className="space-y-3 w-full h-full shadow-lg px-4 py-4 rounded-lg">
                <h2 className="font-semibold md:text-xl">
                  Legal Employment Opportunities
                </h2>
                <p className="text-gray-500 text-justify ">
                  We provide legal employment opportunities to professional,
                  skilled, semi-skilled, or unskilled workers, connecting them
                  with reputable employers.
                </p>
              </div>
            </div>
            <div className="w-full">
              <div className="space-y-1 shadow-lg w-full h-full  rounded-lg px-4 py-4">
                <h2 className="font-semibold md:text-xl">
                  Building Strong Relationships
                </h2>
                <p className="text-gray-500 text-justify  ">
                  We foster healthy and trustworthy relationships between
                  employers and employees, promoting a positive and productive
                  work environment.
                </p>
              </div>
            </div>
          </div>
        </div>
         
        
        {/* last */}
      </div>

      
    </div>
  );
};
export default Immigration;
/* import immigrationImg from "../../assets/AboutUI/immigration.png";

const Immigration = () => {
  return (
    <div className="all  2xl:mx-[166.5px] xl:mx-[100px] lg:mx-[80px] md:mx-[50px] sm:mx-[20px] mx-[10px] my-10 lg:my-[166px] flex flex-col lg:flex-row justify-between">
      <div className="left-side">
        <h1 className="text-[#000000] text-[24px] lg:text-[32px] font-semibold">
          IMMIGRATION SERVICES
        </h1>
        <h1 className="text-[#000000] text-[24px] lg:text-[32px] font-semibold -mt-2 lg:-mt-3">
          FROM EXPERIENCED AGENTS
        </h1>
        <p className="text-[#828282] w-full lg:w-[487px] mt-5">
          The Migrant Group aims to consistently provide professional and honest
          advice to our clients while maintaining client confidentiality. We
          skillfully guide applicants for their immigration process to any
          country they aspire to settle.
        </p>

        <div className="BUSINESS mt-8 lg:mt-10">
          <h1 className="text-[18px] lg:text-[20px]">BUSINESS VISIT VISA</h1>
          <div className="mt-3 bg-[#D9D9D9] w-full lg:w-[472px] h-[12px] rounded-[50px]">
            <p className="bg-[#00264F] rounded-[50px] w-[85%] h-[12px]"></p>
          </div>
        </div>

        <div className="mt-4">
          <h1 className="text-[18px] lg:text-[20px]">STUDY & WORK VISA</h1>
          <div className="mt-3 bg-[#D9D9D9] w-full lg:w-[472px] h-[12px] rounded-[50px]">
            <p className="bg-[#00264F] rounded-[50px] w-[75%] h-[12px]"></p>
          </div>
        </div>

        <div className="mt-4">
          <h1 className="text-[18px] lg:text-[20px]">IMMIGRATION CONSULTANT</h1>
          <div className="mt-3 bg-[#D9D9D9] w-full lg:w-[472px] h-[12px] rounded-[50px]">
            <p className="bg-[#00264F] rounded-[50px] w-[93%] h-[12px]"></p>
          </div>
        </div>
      </div>

      <div className="right_side mt-10 lg:mt-0">
        <img
          className="w-full lg:w-[465px] h-auto lg:h-[500px]"
          src={immigrationImg}
          alt="Immigration"
        />
      </div>
    </div>
  );
};
export default Immigration;
 */
