
import immigrationImg from "../../assets/AboutUI/immigration.png";
function MidAbout() {
  return (
    <div
    className="all  2xl:mx-[166.5px] xl:mx-[100px] lg:mx-[80px] md:mx-[50px] sm:mx-[20px] mx-[10px] my-10 lg:my-[166px] flex flex-col-reverse lg:flex-row justify-between"
    >
      <div
      className="left-side"
      >
        <div className="BUSINESS mt-8 lg:mt-10">
                  <h1 className="text-[18px] lg:text-[20px]">EUROPE WORK VISA</h1>
                  <div className="mt-3 bg-[#D9D9D9] w-full lg:w-[472px] h-[12px] rounded-[50px]">
                    <p className="bg-[#00264F] rounded-[50px] w-full h-[12px]"></p>
                  </div>
                </div>
        
                <div className="mt-4">
                  <h1 className="text-[18px] lg:text-[20px]">GCC VISA (FROM ASIAN COUNTRIES)</h1>
                  <div className="mt-3 bg-[#D9D9D9] w-full lg:w-[472px] h-[12px] rounded-[50px]">
                    <p className="bg-[#00264F] rounded-[50px] w-[80%] h-[12px]"></p>
                  </div>
                </div>
        
                <div className="mt-4">
                  <h1 className="text-[18px] lg:text-[20px]">STUDENT VISA</h1>
                  <div className="mt-3 bg-[#D9D9D9] w-full lg:w-[472px] h-[12px] rounded-[50px]">
                    <p className="bg-[#00264F] rounded-[50px] w-[65%] h-[12px]"></p>
                  </div>
                </div>
                <div className="mt-4">
                  <h1 className="text-[18px] lg:text-[20px]">VISIT VISA</h1>
                  <div className="mt-3 bg-[#D9D9D9] w-full lg:w-[472px] h-[12px] rounded-[50px]">
                    <p className="bg-[#00264F] rounded-[50px] w-[50%] h-[12px]"></p>
                  </div>
                </div>
      </div>
      <div className="right_side  mt-10 lg:mt-0">
        <img
          className="w-full lg:w-[465px] h-[300px] md:h-[500px]"
          src={immigrationImg}
          alt="Immigration"
        />
      </div>
    </div>
  )
}

export default MidAbout
