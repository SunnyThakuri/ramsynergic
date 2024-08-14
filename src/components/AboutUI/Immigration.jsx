import immigrationImg from "../../assets/AboutUI/immigration.png"

const Immigration = () => {
  return (
    <div className="all  2xl:mx-[166.5px] xl:mx-[100px] lg:mx-[80px] md:mx-[50px] sm:mx-[20px] mx-[10px] my-10 lg:my-[166px] flex flex-col lg:flex-row justify-between">
      <div className="left-side">
        <h1 className="text-[#000000] text-[24px] lg:text-[32px] font-semibold">IMMIGRATION SERVICES</h1>
        <h1 className="text-[#000000] text-[24px] lg:text-[32px] font-semibold -mt-2 lg:-mt-3">FROM EXPERIENCED AGENTS</h1>
        <p className="text-[#828282] w-full lg:w-[487px] mt-5">The Migrant Group aims to consistently provide professional and honest advice to our clients while maintaining client confidentiality. We skillfully guide applicants for their immigration process to any country they aspire to settle.</p>

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
        <img className="w-full lg:w-[465px] h-auto lg:h-[500px]" src={immigrationImg} alt="Immigration" />
      </div>
    </div>
  )
}
export default Immigration
