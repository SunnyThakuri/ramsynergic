// import { NavLink, useLocation } from "react-router-dom";
// import {  useState, useEffect, useCallback } from "react";
// import navlogo from "../../assets/Header/Global Connect Logo.png";
// import "../../style/Header.css";
// import DropDownHeader from "./DropDownHeader";

// const Header = () => {
//   const[mobNav,setMobNav]= useState(false)
//   const [isVisible, setIsVisible] = useState(true);
//   const[lastScrollY,setLastScrollY]=useState(0)
//   const [clickedText, setClickedText] = useState("Home");
//   const [active,setActive]=useState(false)
//   const getTextClasses = (text) => {
//     const baseClass = "cursor-pointer";
//     const colorClass =
//       clickedText === text ? "text-[#00264F]" : "text-[#828282]";
//     const dotClass = clickedText === text ? "text-with-dot" : "";
//     return `${baseClass} ${colorClass} ${dotClass}`;
//   };
//   const {pathname}= useLocation()
//   const path=pathname.slice(1)
//   console.log("search param-header",path.charAt(0).toUpperCase()+path.slice(1))
//   const handleClick = (text) => {
//     setClickedText(text);
//   };
//   useEffect(()=> {
//     setClickedText(path.charAt(0).toUpperCase()+path.slice(1))
//   },[path])
  
//   useEffect(()=> {
//     if(!mobNav){
//       setActive(false)
//     }
//   },[mobNav])
// const handleScroll=useCallback(()=> {
//   if(!mobNav){
//     const currentScrollY=window.scrollY
//   if(currentScrollY > 50 && currentScrollY > lastScrollY ){
//     setIsVisible(false)
//   }else{
//     setIsVisible(true)
//   }
//   setLastScrollY(currentScrollY)
//   }
// },[lastScrollY,mobNav])
//   useEffect(()=>{
   
//     window.addEventListener("scroll",handleScroll)
//     return ()=> window.removeEventListener("scroll",handleScroll)
//   },[handleScroll])
//   return (
//     <>
//       <div className={`fixed items-center  top-0 left-0 py-3 md:py-4  w-full shadow-lg bg-[#F7F7F7] z-[20000] 2xl:px-[166.5px] xl:px-[100px] lg:px-[80px] md:px-[50px] sm:px-[80px] px-[20px] flex justify-between transition-transform duration-300 ${isVisible?"translate-y-0":"-translate-y-full"}`}>

        
//         <div className="left_side  ">
//           <div onClick={() => handleClick("Home")}>
//             <NavLink to="/home">
//               <div className="nav_logo flex ">
//                 <img className="sm:w-[123.5px] w-[100px] sm:h-[42px] h-[32px]  " src={navlogo} alt="Global Connect Logo" />
//                 {/* <img className="sm:w-[102px] w-[90px] sm:h-[46px] h-[36px] md:mt-[25px] mt-5 ml-[24px]" src={navlogo2} alt="Header Logo" /> */}
//               </div>
//             </NavLink>
//           </div>
//         </div>

//         <div>
//           <div className={`  top-0 md:relative absolute right-0  md:w-auto    md:h-auto`}>
//             <div className={`right_side   text-[#828282] font-Poppins  md:space-x-[32px] md:flex md:opacity-100 md:w-full md:bg-inherit bg-white h-screen md:h-auto  transition-all delay-100 duration-700 overflow-x-hidden md:overflow-visible ease-in-out transition-discrete ${mobNav?" w-[250px]  md:w-[400px]  opacity-100  ":"w-0 opacity-0"}`}>
//               <div
              
//               className="cross_mark cursor-pointer md:hidden md:border-none border-b-[1px] border-gray-400 pb-3 md:pl-0 pl-5 flex justify-end pr-6 md:pr-20 pt-4  ">
//                 <i
//                 onClick={()=> setMobNav(!mobNav)}
//                 className="fa-solid fa-xmark text-[20px] text-black"></i>
//               </div>

//               <NavLink to="/">
//                 <h1
//                   className={`md:border-none border-b-[1px] hover:scale-110 hover:text-[#00254F] border-gray-400 md:pl-0 pl-5 md:mt-auto mt-5 ${getTextClasses(
//                     "Home"
//                   )}`}
//                   onClick={() => {handleClick("Home")

//                     setMobNav(!mobNav)
//                   }}
//                 >
//                   Home
//                 </h1>
//               </NavLink>

//               <NavLink to="/about">
//                 <h1
//                   className={`md:border-none border-b-[1px] hover:scale-110 hover:text-[#00254F] border-gray-400 md:pl-0 pl-5 md:pt-0 pt-3 md:pb-0 pb-3 ${getTextClasses(
//                     "About"
//                   )}`}
//                   onClick={() =>{ handleClick("About")
//                     setMobNav(!mobNav)
//                   }}
//                 >
//                   About
//                 </h1>
//               </NavLink>

//               <NavLink to="/services">
//                 <h1
//                   className={`md:border-none border-b-[1px] hover:scale-110 hover:text-[#00254F] border-gray-400 md:pl-0 pl-5 md:pt-0 pt-3 md:pb-0 pb-3 ${getTextClasses(
//                     "Services"
//                   )}`}
//                   onClick={() => {handleClick("Services")
//                     setMobNav(!mobNav)
//                   }}
//                 >
//                   Services
//                 </h1>
//               </NavLink>

//               <div  className="dropdown relative inline-block cursor-pointer md:border-none border-b-[1px] border-gray-400 md:pl-0 pl-5 md:pt-0 pt-6 md:pb-0 pb-3">
//                 <h1
//                   className="group"
//                   onMouseEnter={()=>setActive(true)}
//                   // onMouseLeave={()=>setActive(!active)}
//                 >
//                   Countries
//                   <i className="fa-solid fa-chevron-down ml-2 text-[12px]"></i>
//                 </h1>
//                 {active && (
//                   <div className={`dropdown-content transition-all duration-700 ease-in text-[12px] font-Poppins absolute shadow-md bg-white rounded-xl py-4 `}
//                   >
//                     <DropDownHeader mobNav={mobNav} setMobNav={setMobNav} />
//                   </div>
//                 )}
//               </div>


//               <NavLink to="/blog"
//               onClick={()=> setMobNav(!mobNav)}
//               >
//                 <h1
//                   className={`md:border-none border-b-[1px] hover:scale-110 hover:text-[#00254F] border-gray-400 md:pl-0 pl-5 md:pt-0 pt-3 md:pb-0 pb-3 ${getTextClasses(
//                     "Blog"
//                   )}`}
//                   onClick={() => handleClick("Blog")}
//                 >
//                   Blog
//                 </h1>
//               </NavLink>

//               <NavLink to="/faq"
//               onClick={()=> setMobNav(!mobNav)}
//               >
//                 <h1
//                   className={`md:border-none border-b-[1px] hover:scale-110 hover:text-[#00254F] border-gray-400 md:pl-0 pl-5 md:pt-0 pt-3 md:pb-0 pb-3 ${getTextClasses(
//                     "FAQ"
//                   )}`}
//                   onClick={() => handleClick("FAQ")}
//                 >
//                   FAQ
//                 </h1>
//               </NavLink>

//               <NavLink to="/contact"
//               onClick={()=> setMobNav(!mobNav)}
//               >
//                 <h1
//                   className={`md:border-none border-b-[1px] hover:scale-110 hover:text-[#00254F] border-gray-400 md:pl-0 pl-5 md:pt-0 pt-3 md:pb-0 pb-3 ${getTextClasses(
//                     "Contact"
//                   )}`}
//                   onClick={() => handleClick("Contact")}
//                 >
//                   Contact
//                 </h1>
//               </NavLink>
//             </div>
//           </div>

//           <div
//             onClick={()=> setMobNav(!mobNav)}
//             className="menu  right-2 cursor-pointer self-center md:hidden md:pt-[33px] "
//           >
//             <i className="fa-solid  fa-bars text-[25px]"></i>
//           </div>
//         </div>

//       </div>
//     </>
//   );
// };

// export default Header;
import { NavLink } from "react-router-dom";
import { useState, useEffect, useCallback } from "react";
import navlogo from "../../assets/Header/Global Connect Logo.png";
import DropDownHeader from "./DropDownHeader";



const Navbar = () => {
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [mobNav, setMobNav] = useState(false);
  const [active,setActive]=useState(false)
  const [dropdownActive, setDropdownActive] = useState(false);

  const handleScroll = useCallback(() => {
    const currentScrollY = window.scrollY;
    if (currentScrollY > 50 && currentScrollY > lastScrollY) {
      setIsVisible(false);
    } else {
      setIsVisible(true);
    }
    setLastScrollY(currentScrollY);
  }, [lastScrollY]);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [handleScroll]);

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 bg-gray-100 shadow-lg transition-transform duration-300 ${
        isVisible ? "translate-y-0" : "-translate-y-full"
      }`}
    >
      <div className="flex justify-between items-center px-5 sm:px-20 py-4">
        {/* Logo */}
        <div className=""> 
          <NavLink to="/">
            <img
              src={navlogo}
              alt="Logo"
              className="w-[120px] h-auto"
            />
          </NavLink>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-8">
          <NavLink
            to="/"
            className={({ isActive }) =>
              isActive
                ? "text-blue-900 border-b-2 border-blue-900 pb-1"
                : "text-gray-500 hover:text-blue-900"
            }
          >
            Home
          </NavLink>
          <NavLink
            to="/about"
            className={({ isActive }) =>
              isActive
                ? "text-blue-900 border-b-2 border-blue-900 pb-1"
                : "text-gray-500 hover:text-blue-900"
            }
          >
            About
          </NavLink>
          <NavLink
            to="/services"
            className={({ isActive }) =>
              isActive
                ? "text-blue-900 border-b-2 border-blue-900 pb-1"
                : "text-gray-500 hover:text-blue-900"
            }
          >
            Services
          </NavLink>

          {/* Dropdown */}
            <div
            onMouseEnter={() => setActive(true)}
            className="relative group cursor-pointer"
            onMouseLeave={() => setActive(false)}>
              <h1
                className="flex group items-center text-gray-500 hover:text-blue-900"
                onMouseEnter={() => setActive(true)}
              >
                Countries
                <i className="ml-2 group fa-solid fa-chevron-down text-sm"></i>
              </h1>
              {active && (
                <div className="absolute shadow-md bg-white rounded-xl py-4">
                  <DropDownHeader setMobNav={setMobNav} />
                </div>
              )}
            </div>

          <NavLink
            to="/blog"
            className={({ isActive }) =>
              isActive
                ? "text-blue-900 border-b-2 border-blue-900 pb-1"
                : "text-gray-500 hover:text-blue-900"
            }
          >
            Blog
          </NavLink>
          <NavLink
            to="/faq"
            className={({ isActive }) =>
              isActive
                ? "text-blue-900 border-b-2 border-blue-900 pb-1"
                : "text-gray-500 hover:text-blue-900"
            }
          >
            FAQ
          </NavLink>
          <NavLink
            to="/contact"
            className={({ isActive }) =>
              isActive
                ? "text-blue-900 border-b-2 border-blue-900 pb-1"
                : "text-gray-500 hover:text-blue-900"
            }
          >
            Contact
          </NavLink>
        </div>

        {/* Mobile Menu Toggle */}
        <div
          className="md:hidden cursor-pointer"
          onClick={() => setMobNav(!mobNav)}
        >
          <i className="fa-solid fa-bars text-2xl text-gray-500"></i>
        </div>
      </div>

      {/* Mobile Navigation */}
      {mobNav && (
        <div
          className={`fixed top-0 right-0 h-screen w-[250px] bg-white shadow-lg z-[10000] transition-transform  ${
            mobNav ? "translate-x-0" : "translate-x-full"
          }`}
        >
          {/* Close Button */}
          <div className="flex justify-end px-6 py-5">
            <button
              onClick={() => setMobNav(false)}
              className="text-gray-500 hover:text-blue-900"
            >
              <i className="fa-solid text-2xl fa-xmark "></i>
            </button>
          </div>

          {/* Links */}
          <div className="px-5 space-y-4">
            <NavLink
              to="/"
              className="block text-gray-500 hover:text-blue-900"
              onClick={() => setMobNav(false)}
            >
              Home
            </NavLink>
            <NavLink
              to="/about"
              className="block text-gray-500 hover:text-blue-900"
              onClick={() => setMobNav(false)}
            >
              About
            </NavLink>
            <NavLink
              to="/services"
              className="block text-gray-500 hover:text-blue-900"
              onClick={() => setMobNav(false)}
            >
              Services
            </NavLink>
            <NavLink
              to="/blog"
              className="block text-gray-500 hover:text-blue-900"
              onClick={() => setMobNav(false)}
            >
              Blog
            </NavLink>

            {/* Dropdown for Countries */}
              <div className="block text-gray-500">
                <span
                  className="flex justify-between items-center hover:text-blue-900 cursor-pointer"
                  onClick={() => setActive((prev) => !prev)}
                >
                  Countries
                  <i
                    className={`ml-2 fa-solid fa-chevron-${active ? "up" : "down"} text-sm`}
                  ></i>
                </span>
                {active && (
                  <div className="pl-4 mt-2 space-y-2">
                    {/* Pass setMobNav to DropDownHeader */}
                    <DropDownHeader setMobNav={setMobNav} />
                  </div>
                )}
              </div>

            <NavLink
              to="/contact"
              className="block text-gray-500 hover:text-blue-900"
              onClick={() => setMobNav(false)}
            >
              Contact
            </NavLink>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;