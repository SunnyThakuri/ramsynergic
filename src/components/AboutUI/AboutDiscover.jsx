import discoveuserimg from "../../assets/HomeUI/discoverUserImg.png";

const AboutDiscover = () => {
  return (
    <>
      <div className="dicover 2xl:px-[166.5px] xl:px-[100px] lg:px-[80px] md:px-[50px] sm:px-[20px] px-[10px] mt-[124px] bg-[#00254F] font-Poppins">
        <h1 className=" md:text-[20px] text-white  md:font-semibold md:text-center xl:px-[260px] lg:px-[150px] md:px-[50px] sm:px-[20px] pt-14  md:pt-[120px]">
          With our strong global network, we connect skilled professionals with
          top employers worldwide, ensuring reliable job placements and a smooth
          recruitment process.
        </h1>

        <div className="main pt-16 pb-[100px] lg:flex lg:justify-between ">
          <div className="left-side flex   justify-center">
            <div className="btn absolute 2xl:left-[415px] xl:left-[350px] lg:left-[300px] md:left-[210px] sm:left-[150px] left-[30px]">
              <button className="bg-gradient-to-r from-[#4F8DD4] to-[#0053B1] w-[135px] h-[64px] rounded-[8px] text-[12px] text-[#F7F7F7]">
                Grab your right opportunity now!
              </button>
            </div>

            <div className="btn absolute 2xl:left-[415px] xl:left-[350px] lg:left-[300px] md:left-[470px] sm:left-[350px] left-[150px] sm:mt-[230px] mt-[280px]">
              <button className="bg-gradient-to-r from-[#973BF4] to-[#5F0FB0] text-[12px] text-white xl:w-[203px] lg:w-[195px] w-[203px] h-[64px] rounded-[8px]">
                We provides various services according to your needs.
              </button>
            </div>

            <div className="image">
              <img
                className="xl:w-[316px] w-[300px] xl:h-[374px] h-[350px] "
                src={discoveuserimg}
                alt=""
              />
            </div>
          </div>

          <div className="flex items-center justify-center  ">
            <div className="2xl:w-[700px] grid md:grid-cols-3 gap-16 md:gap-24  md:justify-between lg:gap-1 items-center xl:w-[600px] lg:w-[500px] w-full lg:mt-0 mt-[80px]">
              <div className="logo1and2 flex md:flex-col gap-16 md:gap-52 lg:gap-64 justify-between px-6  ">
                <div className=" ">
                  <div className=" flex items-center justify-center">
                    <img
                      className="items-center w-16 bg-green-700 rounded-2xl "
                      src="/aboutUs/quality-assurance.png"
                      alt=""
                    />
                  </div>

                  <h1 className="text-white mt-3 md:text-sm lg:text-md text-center ">
                    Quality <br />
                    Assurance
                  </h1>
                </div>

                {/* third */}
                <div className="  ">
                  <div className="image flex justify-center">
                    <img
                      className="items-center w-16 bg-white rounded-2xl p-2  "
                      src="/aboutUs/running.png"
                      alt=""
                    />
                  </div>
                  <h1 className="text-white mt-3 md:text-sm lg:text-md  text-center ">
                    Swift <br /> Deployment
                  </h1>
                </div>
              </div>
              <div className="flex flex-col items-center justify-center">
                <div className="image flex justify-center">
                  <img
                    className="items-center w-16 bg-[#FFD700] rounded-2xl p-1 "
                    src="/aboutUs/90-days.png"
                    alt=""
                  />
                </div>
                <h1 className="text-white mt-3 text-center md:text-sm lg:text-md w-[200px]">
                  90-Day Medical and Performance Guarantee with Replacement
                </h1>
              </div>

              <div className=" flex md:flex-col gap-16 md:gap-52 lg:gap-64 justify-between  ">
                {/* second */}

                <div className=" flex flex-col items-center  shadow-lg   md:text-sm ">
                  <div className="image flex  items-center justify-center">
                    <img
                      className="items-center w-16 bg-white text-white object-cover rounded-2xl p-1"
                      src="/aboutUs/visa.jpg"
                      alt=""
                    />
                  </div>
                  <h1 className="text-white mt-3 text-center w-[150px] ">
                    No Dropouts After Visa Issuance
                  </h1>
                </div>
                <div className="">
                  <div className="image flex justify-center">
                    <img
                      className="items-center w-16 bg-white rounded-2xl p-2"
                      src="/aboutUs/cost.png"
                      alt=""
                    />
                  </div>
                  <h1 className="text-white mt-3 md:text-sm lg:text-md  text-center">
                    Transparent Pricing
                  </h1>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default AboutDiscover;
/* import discoveuserimg from "../../assets/HomeUI/discoverUserImg.png";
import visalogo from "../../assets/HomeUI/visaservices.png";
import screeninglogo from "../../assets/HomeUI/screeningprocess.png";
import expertiselogo from "../../assets/HomeUI/expertise.png";
import speedylogo from "../../assets/HomeUI/speedy.png";
import verticalLine from "../../assets/HomeUI/verticalline.png";
import horizontalLine from "../../assets/HomeUI/horizontalline.png";
const AboutDiscover = () => {
  return (
    <>
      <div className="dicover 2xl:px-[166.5px] xl:px-[100px] lg:px-[80px] md:px-[50px] sm:px-[20px] px-[10px] mt-[124px] bg-[#00254F] font-Poppins">
        <h1 className="sm:text-[32px] text-[20px] text-white  font-semibold text-center 2xl:px-[335px] xl:px-[260px] lg:px-[150px] md:px-[50px] sm:px-[20px]  pt-[120px]">
          Discover what Global Connect brings to your Team / Company.
        </h1>

        <div className="main pt-16 pb-[100px] lg:flex lg:justify-between">
          <div className="left-side flex justify-center">
            <div className="btn absolute 2xl:left-[415px] xl:left-[350px] lg:left-[300px] md:left-[210px] sm:left-[150px] left-[30px]">
              <button className="bg-gradient-to-r from-[#4F8DD4] to-[#0053B1] w-[135px] h-[64px] rounded-[8px] text-[12px] text-[#F7F7F7]">
                Grab your right opportunity now!
              </button>
            </div>

            <div className="btn absolute 2xl:left-[415px] xl:left-[350px] lg:left-[300px] md:left-[470px] sm:left-[350px] left-[150px] sm:mt-[230px] mt-[280px]">
              <button className="bg-gradient-to-r from-[#973BF4] to-[#5F0FB0] text-[12px] text-white xl:w-[203px] lg:w-[195px] w-[203px] h-[64px] rounded-[8px]">
                We provides various services according to your needs.
              </button>
            </div>

            <div className="image">
              <img
                className="xl:w-[316px] w-[300px] xl:h-[374px] h-[350px] "
                src={discoveuserimg}
                alt=""
              />
            </div>
          </div>

          <div className="right_side flex justify-center">
            <img
              className="absolute h-[334px]  2xl:right-[450px] xl:right-[370px] lg:right-[300px]  md:right-[350px] sm:right-[310px] right-[185px] lg:mt-0 mt-[70px]"
              src={verticalLine}
              alt=""
            />
            <img
              className="absolute xl:mt-[150px] lg:mt-[170px] mt-[250px] 2xl:w-[768px] xl:w-[668px] w-[560px] 2xl:right-[90px] xl:right-[70px] lg:right-[20px] md:right-[80px] sm:right-[50px] right-[10px]"
              src={horizontalLine}
              alt=""
            />

            <div className="2xl:w-[700px] xl:w-[600px] lg:w-[500px] w-full lg:mt-0 mt-[80px]">
              <div className="logo1and2 flex justify-between   ">
                <div className="logo1  md:w-[323px] sm:w-[250px] w-[130px] md:h-[114px] h-[120px] ">
                  <div className="image flex justify-center">
                    <img className="items-center " src={visalogo} alt="" />
                  </div>
                  <h1 className="text-white mt-3 text-center md:px-[100px] sm:px-[80px] ">
                    Expertise in Visa Services
                  </h1>
                </div>

                <div className="logo2 sm:w-[209px] w-[150px] h-[114px]">
                  <div className="image flex justify-center">
                    <img className="items-center " src={screeninglogo} alt="" />
                  </div>
                  <h1 className="text-white mt-3 text-center ">
                    Efficient Screening Processes
                  </h1>
                </div>
              </div>

              <div className="logo2and3   flex justify-between  mt-[100px]">
                <div className="logo3  md:w-[323px] sm:w-[250px] w-[140px] md:h-[114px] h-[120px]">
                  <div className="image flex justify-center">
                    <img className="items-center " src={expertiselogo} alt="" />
                  </div>
                  <h1 className="text-white mt-3  text-center md:px-[80px] sm:px-[30px]">
                    Industry-Specific Expertise
                  </h1>
                </div>

                <div className="logo4 sm:w-[209px] w-[150px] h-[114px]">
                  <div className="image flex justify-center">
                    <img className="items-center " src={speedylogo} alt="" />
                  </div>
                  <h1 className="text-white mt-3 text-center sm:px-[50px]">
                    Speedy Recruitment
                  </h1>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default AboutDiscover;
 */
