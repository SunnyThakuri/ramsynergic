// import { useState } from "react"
// import { countrySellected } from "../../config/country"
// import { Link } from "react-router-dom"


// function DropDownHeader({setMobNav}) {
//   const[euactive,setEuactive]=useState(false)
//   const[gccActive,setGccActive]= useState(false)
  
//   return (
//     <div
//     className=""
//     >
//         <div
//         className="relative group"
//         >
//             <div
//             onMouseEnter={()=> {setEuactive(!euactive)
//               setGccActive(false)
//             }}
//             onClick={()=> {setEuactive(!euactive)
//               setGccActive(false)
//             }}
//       className={`border-b mx-1 rounded-lg my-1 ${euactive?"bg-[#00254F] text-white":" hover:bg-gray-50"} `}
//       >
//         <p
//         className="text-center text-[14px] p-1 "
//         >European Country</p>
//       </div>
//       {euactive && <div
//       className=" border-1 max-h-[145px] md:max-h-[200px] overflow-y-auto scrollbar-hide border-gray-300 my-2 bg-slate-50"
//       >
//         {countrySellected.slice(0,11).map((eh)=> (
//             <Link to={`/country/${eh.name}`}
//             onClick={()=> {setMobNav((prev)=> !prev)
//               setEuactive(!euactive)
//             }}
//             key={eh.id}
//             className=" block text-[14px] text-center px-2 py-1 m-1 border-b hover:bg-blue-100"
//             >
//                 {eh.name}
//             </Link>
//         ))}
//       </div>}
//         </div>
// <div
// className="group"
// >
//   <div
//   onClick={()=>{ setGccActive(!gccActive)
//     setEuactive(false)
//   }}
//   onMouseEnter={()=> {setEuactive(!gccActive)
//     setGccActive(true)
//   }}
//   className={`border-b mx-1 rounded-lg my-1 ${gccActive?"bg-[#00254F] text-white":" hover:bg-gray-50"} `}
//       >
//         <p
//         className="p-1 text-center text-[14px]"
//         >GCC Country</p>
//       </div>
//       {gccActive&&<div

//       className="border-1 border-gray-300 my-2 "
//       >
//       {countrySellected.slice(11,).map((eh)=> (
//             <Link
//             to={`/country/${eh.name}`}
//             onClick={()=> {
//               setMobNav((prev)=> !prev)
//               setGccActive(!gccActive)
//               setEuactive(false)
//             }}
//             key={eh.id}
//             className=" block  m-1 text-center p-1 text-[13px] border-b hover:bg-blue-100"
//             >
//                {eh.name}
//             </Link>
//         ))}
//       </div>}
// </div>
      
//     </div>
//   )
// }

// export default DropDownHeader


import { useState } from "react";
import { countrySellected } from "../../config/country";
import { Link } from "react-router-dom";

function DropDownHeader({ setMobNav }) {
  const [activeDropdown, setActiveDropdown] = useState(null);

  const handleHover = (dropdown) => {
    setActiveDropdown(dropdown);
  };

  const handleMouseLeave = () => {
    setActiveDropdown(null);
  };

  return (
    <div className="flex flex-col gap-4">
      {/* European Country Dropdown */}
      <div
        className="relative group"
        onMouseEnter={() => handleHover("eu")}
        onMouseLeave={handleMouseLeave}
      >
        <div
          className={`border-b mx-1 rounded-lg my-1 ${
            activeDropdown === "eu" ? "bg-[#00254F] text-white" : "hover:bg-gray-50"
          }`}
        >
          <p className="text-center text-[14px] p-1">European Country</p>
        </div>
        {activeDropdown === "eu" && (
          <div className="absolute top-0 left-full w-[200px] max-h-[200px] overflow-y-auto scrollbar-hide border-1 border-gray-300 bg-slate-50 shadow-lg">
            {countrySellected.slice(0, 11).map((eh) => (
              <Link
                to={`/country/${eh.name}`}
                onClick={() => {
                  setMobNav((prev) => !prev);
                  setActiveDropdown(null);
                }}
                key={eh.id}
                className="block text-[14px] text-center px-2 py-1 m-1 border-b hover:bg-blue-100"
              >
                {eh.name}
              </Link>
            ))}
          </div>
        )}
      </div>

      {/* GCC Country Dropdown */}
      <div
        className="relative group"
        onMouseEnter={() => handleHover("gcc")}
        onMouseLeave={handleMouseLeave}
      >
        <div
          className={`border-b mx-1 rounded-lg my-1 ${
            activeDropdown === "gcc" ? "bg-[#00254F] text-white" : "hover:bg-gray-50"
          }`}
        >
          <p className="text-center text-[14px] p-1">GCC Country</p>
        </div>
        {activeDropdown === "gcc" && (
          <div className="absolute top-0 left-full w-[200px] max-h-[200px] overflow-y-auto scrollbar-hide border-1 border-gray-300 bg-slate-50 shadow-lg">
            {countrySellected.slice(11).map((eh) => (
              <Link
                to={`/country/${eh.name}`}
                onClick={() => {
                  setMobNav((prev) => !prev);
                  setActiveDropdown(null);
                }}
                key={eh.id}
                className="block text-[14px] text-center px-2 py-1 m-1 border-b hover:bg-blue-100"
              >
                {eh.name}
              </Link>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

export default DropDownHeader;