/* import globaloperationimg1 from "../../assets/HomeUI/globaloperation1.png";
import globaloperationimg2 from "../../assets/HomeUI/globaloperation2.png";
import globaloperationimg3 from "../../assets/HomeUI/globaloperation3.png";
import globaloperationimg4 from "../../assets/HomeUI/globaloperation4.png";
import globaloperationimg5 from "../../assets/HomeUI/globaloperation5.png"; */
/* import hungaryImage from "../../assets/HomeUI/hungary_tourism.jpg";
import maltaImage from "../../assets/HomeUI/malta.webp";
import croatiaImage from "../../assets/HomeUI/Croatia.avif";
import bulgeriaImage from "../../assets/HomeUI/bulgeria.jpg";
import AlbaniaImage from "../../assets/HomeUI/Albania.jpg";
import RomaniaImage from "../../assets/HomeUI/Romania.jpg";
import SerbiaImage from "../../assets/HomeUI/Serbia.avif"; */

import CarouselCountry from './UpdatedAbout/CarouselCountry';

const GlobalOperation = () => {
  return (
    <>
      <div>
        {/* <div className="global_operation mt-10  2xl:mx-[166.5px] xl:mx-[100px] lg:mx-[80px] md:mx-[50px] sm:mx-[20px] mx-[10px] ">

<div className="heading flex flex-col md:flex-row justify-between">
  <h1 className="text-2xl md:text-3xl text-[#2C2C2C] md:w-80 font-semibold">Global Operations and Logistics</h1>

  <p className="text-[#828282] md:w-2/3 xl:w-[530px] lg:mt-0 mt-4 md:mt-0">We provide comprehensive end-to-end supply chain management, logistics, and distribution services for complex multinational
    enterprises operating worldwide.</p>
</div>

<div className="images grid grid-cols-1 md:grid-cols-3 gap-5 mt-6">
  <img className='md:row-span-2 w-full h-auto md:h-full' src={globaloperationimg1} alt="" />
  <img className='w-full h-auto md:h-54' src={globaloperationimg2} alt="" />
  <img className='w-full h-auto md:h-54' src={globaloperationimg3} alt="" />
  <img className='w-full h-auto md:h-54' src={globaloperationimg4} alt="" />
  <img className='w-full h-auto md:h-54' src={globaloperationimg5} alt="" />
</div>

</div> */}

        {/* new  */}
        <div className="global_operation mt-10  2xl:mx-[166.5px] xl:mx-[100px] lg:mx-[80px] md:mx-[50px] sm:mx-[20px] mx-[10px] ">
          <div className="heading flex flex-col md:flex-row gap-8 justify-between">
            <h1 className="text-2xl md:text-3xl text-[#2C2C2C] md:w-80 font-semibold">
              Global Operations and Logistics
            </h1>

            <p className="text-[#828282] text-justify text-wrap md:w-2/3 xl:w-[530px] lg:mt-0 mt-4 md:mt-0">
              We provide comprehensive end-to-end supply chain management,
              logistics, and distribution services for complex multinational
              enterprises operating worldwide.
            </p>
          </div>
          <div
          className='mt-12'
          >
          <CarouselCountry/>
          </div>
         
        </div>
      </div>
    </>
  );
};

export default GlobalOperation;
/* <div className="images grid grid-cols-1 md:grid-cols-4 gap-5 mt-6">
            
              <Link className=" md:row-span-2" to="/country/hungary">
              <div className="relative w-full h-full ">
              <img
                className="relative rounded-3xl shadow-lg w-full h-full md:h-54 "
                src={hungaryImage}
                alt=""
              />
              <p className="absolute z-50 text-3xl md:text-xl md:bottom-2 md:left-5  text-bold text-white bottom-4 left-8">
                Hungary
              </p>
            </div>
              </Link>
          
            <Link to="/country/malta" className="relative">
              <img
                className="relative rounded-3xl shadow-lg w-full h-auto md:h-54 "
                src={maltaImage}
                alt=""
              />
              <p className="absolute z-50 text-3xl md:text-xl md:bottom-2 md:left-5  text-bold text-white bottom-4 left-8">
                Malta
              </p>
            </Link>
            <Link to="/country/croatia" className="relative">
              <img
                className="relative rounded-3xl shadow-lg w-full h-auto md:h-54 "
                src={croatiaImage}
                alt=""
              />
              <p className="absolute z-50 text-3xl md:text-xl md:bottom-2 md:left-5  text-bold text-white bottom-4 left-8">
                Croatia
              </p>
            </Link>
            <Link to="/country/bulgeria" className="relative">
              <img
                className="relative rounded-3xl shadow-lg w-full h-auto md:h-54 "
                src={bulgeriaImage}
                alt=""
              />
              <p className="absolute z-50 text-3xl md:text-xl md:bottom-2 md:left-5  text-bold text-white bottom-4 left-8">
                Bulgeria
              </p>
            </Link>
            <Link to="/country/albania" className="relative">
              <img
                className="relative rounded-3xl shadow-lg w-full h-full md:h-54 "
                src={AlbaniaImage}
                alt=""
              />
              <p className="absolute z-50 text-3xl md:text-xl md:bottom-2 md:left-5  text-bold text-white bottom-4 left-8">
                Albania
              </p>
            </Link>
            <Link to="/country/serbia" className="relative">
              <img
                className="relative rounded-3xl shadow-lg w-full h-auto md:h-54 "
                src={SerbiaImage}
                alt=""
              />
              <p className="absolute z-50 text-3xl md:text-xl md:bottom-2 md:left-5  text-bold text-white bottom-4 left-8">
                Serbia
              </p>
            </Link>
            <Link to="/country/romania" className="relative">
              <img
                className="relative rounded-3xl shadow-lg w-full h-auto md:h-54 "
                src={RomaniaImage}
                alt=""
              />
              <p className="absolute z-50 text-3xl md:text-xl md:bottom-2 md:left-5  text-bold text-white bottom-4 left-8">
                Romania
              </p>
            </Link>
          </div> */