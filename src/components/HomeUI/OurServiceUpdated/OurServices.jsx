import { useNavigate } from "react-router-dom"

// function OurServicesUpdated() {
//     const redirect= useNavigate()
//   return (
//     <div className="px-5 md:px-20 xl:px-36 mt-12" >
//         <h2 className="text-2xl my-12 md:text-2xl text-[#2C2C2C] md:w-96 xl:text-nowrap font-semibold" >Our Services</h2>
//       <div className="grid grid-cols-2 gap-4" >
//         <div className="relative h-60 md:h-96 rounded-lg shadow-md " onClick={()=> redirect('/services')} >
//         <img   
//           className="w-full h-full object-cover rounded-xl  brightness-75" 
//           src="/ourservices/recruitment.jpg.webp"/>
//         <p className="absolute bottom-1 md:bottom-2  left-0 mx-1 md:left-0 lg:px-6 py-1 px-1 md:py-3 text-white  md:text-xl lg:text-2xl tracking-tight  rounded-lg" >Expert Recruitment <sub className="text-xs md:text-sm" > GCC & Europe</sub> </p>
//         </div>
//         <div className="relative h-60 md:h-96 rounded-lg shadow-md" onClick={()=> redirect("/services")} >
//         <img 
//           className="h-full w-full absolute object-cover rounded-xl brightness-75  "
//           src="/ourservices/manpower-solutions-1.webp"/>
//         <p className="absolute text-white py-1 px-2 md:px-6 md:py-3   md:text-xl lg:text-2xl  z-10 filter  bottom-1 md:bottom-2 left-0 mx-1 md:left-0 rounded-lg " >Manpower Solutions</p>
//         </div>
//         <div className=" relative   rounded-lg h-60 md:h-96 shadow-md" onClick={()=> redirect("/services")} >
//         <img  
//           className="h-full w-full absolute object-cover rounded-xl brightness-75" 
//           src="/ourservices/Talent-Acquisition.jpg"  />
//         <p className="absolute bottom-1  md:bottom-2 md:left-0 left-0 mx-1 md:px-6 md:py-3 px-2 py-1 md:text-xl lg:text-2xl  text-white rounded-lg">Talent Acquisition</p>
//         </div>
//         <div className="relative h-60 md:h-96 rounded-lg shadow-md" onClick={()=> redirect("/services")} >
//         <img  
//           className="object-cover h-full w-full absolute rounded-xl brightness-75" 
//           src="/HomeUI/consultant1.jpg"  />
//         <p className="absolute z-10 text-white bottom-1 md:bottom-2 left-0 mx-1 md:left-0 md:px-6 px-2 py-1 md:py-3 md:text-xl lg:text-2xl rounded-lg" >Consulting Services</p>
//         </div>
//       </div>
//     </div>
//   )
// }

const OurServicesUpdated = () =>{
  return(
    <div className="md:px-[150px] px-4 md:py-24">
      <p className="text-3xl font-semibold  text-center">OUR SERVICES</p>
      <p>random</p>
      <div className="flex gap-6">
        {/* Card1 */}
        <div className="space-y-6 p-4 shadow-md md:h-[400px]"> 
          <div className="h-12 w-12">
            <img src="https://bestvisionhr.ae/wp-content/uploads/2023/11/management.png" 
                  alt="" 
                  className="w-full h-full object-cover"/>
          </div>
          <p className="text-2xl font-meduim">EXPERT RECRUITMENT in GCC & Europe</p>
          <p>We connect top talent with leading employers through our specialized recruitment services.</p>
        </div>
        {/* Card1 */}
        <div className="space-y-6 p-4 shadow-md md:h-[400px]"> 
          <div className="h-12 w-12">
            <img src="https://bestvisionhr.ae/wp-content/uploads/2023/11/management.png" 
                  alt="" 
                  className="w-full h-full object-cover"/>
          </div>
          <p className="text-2xl font-meduim">EXPERT RECRUITMENT in GCC & Europe</p>
          <p>We connect top talent with leading employers through our specialized recruitment services.</p>
        </div>
        {/* Card1 */}
        <div className="space-y-6 p-4 shadow-md md:h-[400px]"> 
          <div className="h-12 w-12">
            <img src="https://bestvisionhr.ae/wp-content/uploads/2023/11/management.png" 
                  alt="" 
                  className="w-full h-full object-cover"/>
          </div>
          <p className="text-2xl font-meduim">EXPERT RECRUITMENT in GCC & Europe</p>
          <p>We connect top talent with leading employers through our specialized recruitment services.</p>
        </div>
        {/* Card1 */}
        <div className="space-y-6 p-4 shadow-md md:h-[400px]"> 
          <div className="h-12 w-12">
            <img src="https://bestvisionhr.ae/wp-content/uploads/2023/11/management.png" 
                  alt="" 
                  className="w-full h-full object-cover"/>
          </div>
          <p className="text-2xl font-meduim">EXPERT RECRUITMENT in GCC & Europe</p>
          <p>We connect top talent with leading employers through our specialized recruitment services.</p>
        </div>
        
        
      </div>
    </div>
  )
}

export default OurServicesUpdated
