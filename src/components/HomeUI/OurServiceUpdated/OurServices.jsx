import { useNavigate } from "react-router-dom"

function OurServicesUpdated() {
    const redirect= useNavigate()
  return (
    <div
    className="px-5 md:px-20 xl:px-36 mt-12"
    >
        <h2
        className="text-2xl my-12 md:text-3xl text-[#2C2C2C] md:w-80 xl:text-nowrap font-semibold"
        >Our Services</h2>
      <div
      className="grid grid-cols-2 gap-4"
      >
        <div
        className="relative h-60 md:h-80 rounded-lg shadow-md "
        onClick={()=> redirect('/services')}
        >
        <img 
        className="w-full h-full object-cover rounded-xl"
        src="/ourservices/recruitment.jpg.webp"  />
        <p
        className="absolute bottom-1 md:bottom-4 left-0 mx-1 md:left-4 lg:px-6 py-1 px-1 md:py-3 text-white bg-gradient-to-tr from-[#00264F]  to-black/30 md:text-xl lg:text-2xl tracking-tight  rounded-lg"
        >Expert Recruitment <sub
        className="text-xs md:text-sm"
        > GCC & Europe</sub> </p>
        </div>
        <div
        className="relative h-60 md:h-80 rounded-lg shadow-md"
        onClick={()=> redirect("/services")}
        >
        <img 
        className="h-full w-full absolute object-cover rounded-xl  "
        src="/ourservices/manpower-solutions-1.webp"  />
        <p
        className="absolute text-white py-1 px-2 md:px-6 md:py-3   md:text-xl lg:text-2xl  z-10 filter  bg-gradient-to-tr from-[#00264F]  to-transparent bottom-1 md:bottom-4 left-0 mx-1 md:left-4 rounded-lg "
        >Manpower Solutions</p>
        </div>
        <div
        className=" relative   rounded-lg h-60 md:h-80 shadow-md"
        onClick={()=> redirect("/services")}
        >
        <img 
        className="h-full w-full absolute object-cover rounded-xl"
        src="/ourservices/Talent-Acquisition.jpg"  />
        <p
        className="absolute bottom-1  md:bottom-4 md:left-4 left-0 mx-1 md:px-6 md:py-3 px-2 py-1 md:text-xl lg:text-2xl  text-white bg-gradient-to-tr from-[#00264F]  to-transparent rounded-lg"
        >Talent Acquisition</p>
        </div>
        <div
        className="relative h-60 md:h-80 rounded-lg shadow-md"
        onClick={()=> redirect("/services")}
        >
        <img 
        className="object-cover h-full w-full absolute rounded-xl"
        src="/ourservices/consulting.webp"  />
        <p
        className="absolute z-10 text-white bottom-1 md:bottom-4 left-0 mx-1 md:left-4 md:px-6 px-2 py-1 md:py-3 md:text-xl lg:text-2xl bg-gradient-to-tr from-[#00264F]  to-transparent rounded-lg"
        >Consulting Services</p>
        </div>
      </div>
    </div>
  )
}

export default OurServicesUpdated
