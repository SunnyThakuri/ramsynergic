
import { Link } from 'react-router-dom'
import hungaryImage from "/HomeUI/hungary_tourism.jpg";
import maltaImage from "/HomeUI/malta.webp";
import croatiaImage from "/HomeUI/Croatia.avif";
import bulgeriaImage from "/HomeUI/bulgeria.jpg";
import AlbaniaImage from "/HomeUI/Albania.jpg";
import RomaniaImage from "/HomeUI/Romania.jpg";
import SerbiaImage from "/HomeUI/Serbia.avif";
function SectorAndInd() {
  return (
    <div>
      <div className="images grid grid-cols-1 md:grid-cols-4 gap-5 mt-6">
            
            <Link className=" md:row-span-2" to="/country/hungary">
            <div className="relative w-full h-full ">
            <img
              className="relative rounded-3xl shadow-lg w-full h-full md:h-54 "
              src={hungaryImage}
              alt=""
            />
            <p className="absolute z-50 text-3xl md:text-xl md:bottom-2 md:left-5  text-bold text-white bottom-4 left-8">
              Hositality
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
                Security
            </p>
          </Link>
          <Link to="/country/croatia" className="relative">
            <img
              className="relative rounded-3xl shadow-lg w-full h-auto md:h-54 "
              src={croatiaImage}
              alt=""
            />
            <p className="absolute z-50 text-3xl md:text-xl md:bottom-2 md:left-5  text-bold text-white bottom-4 left-8">
              Driving
            </p>
          </Link>
          <Link to="/country/bulgeria" className="relative">
            <img
              className="relative rounded-3xl shadow-lg w-full h-auto md:h-54 "
              src={bulgeriaImage}
              alt=""
            />
            <p className="absolute z-50 text-3xl md:text-xl md:bottom-2 md:left-5  text-bold text-white bottom-4 left-8">
              Warehouse
            </p>
          </Link>
          <Link to="/country/albania" className="relative">
            <img
              className="relative rounded-3xl shadow-lg w-full h-full md:h-54 "
              src={AlbaniaImage}
              alt=""
            />
            <p className="absolute z-50 text-3xl md:text-xl md:bottom-2 md:left-5  text-bold text-white bottom-4 left-8">
              Factories & industries
            </p>
          </Link>
          <Link to="/country/serbia" className="relative">
            <img
              className="relative rounded-3xl shadow-lg w-full h-auto md:h-54 "
              src={SerbiaImage}
              alt=""
            />
            <p className="absolute z-50 text-3xl md:text-xl md:bottom-2 md:left-5  text-bold text-white bottom-4 left-8">
              Telecommunication
            </p>
          </Link>
          <Link to="/country/romania" className="relative">
            <img
              className="relative rounded-3xl shadow-lg w-full h-auto md:h-54 "
              src={RomaniaImage}
              alt=""
            />
            <p className="absolute z-50 text-3xl md:text-xl md:bottom-2 md:left-5  text-bold text-white bottom-4 left-8">
              Construction
            </p>
          </Link>
          <Link to="/country/romania" className="relative">
            <img
              className="relative rounded-3xl shadow-lg w-full h-auto md:h-54 "
              src={RomaniaImage}
              alt=""
            />
            <p className="absolute z-50 text-3xl md:text-xl md:bottom-2 md:left-5  text-bold text-white bottom-4 left-8">
              Finance
            </p>
          </Link>
        </div>
    </div>
  )
}

export default SectorAndInd
