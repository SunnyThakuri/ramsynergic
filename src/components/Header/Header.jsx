import { NavLink } from "react-router-dom";
import { useRef, useState, useEffect } from "react";
import navlogo from "../../assets/Header/Global Connect Logo.png";
import navlogo2 from "../../assets/Header/headerlogo.png";
import "../../style/Header.css";

const Header = () => {
  const menuRef = useRef(null);
  const [isScrolled, setIsScrolled] = useState(false);
  const [clickedText, setClickedText] = useState('Home');

  const toggleMenu = () => menuRef.current.classList.toggle("menu__active");

  const getTextClasses = (text) => {
    const baseClass = 'cursor-pointer';
    const colorClass = clickedText === text ? 'text-[#00264F]' : 'text-[#828282]';
    const dotClass = clickedText === text ? 'text-with-dot' : '';
    return `${baseClass} ${colorClass} ${dotClass}`;
  };

  const handleClick = (text) => {
    setClickedText(text);
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      <div className={`sticky top-0 py-3 w-full md:py-0 shadow-lg bg-[#F7F7F7] z-[20000] 2xl:px-[166.5px] xl:px-[100px] lg:px-[80px] md:px-[50px] sm:px-[80px] px-[20px] flex justify-between`}>
        <div className="left_side">
          <div onClick={() => handleClick('Home')}>
            <NavLink to='/'>
              <div className="nav_logo flex ">
                <img className="sm:w-[123.5px] w-[100px] sm:h-[42px] h-[32px] md:mt-[27px] " src={navlogo} alt="Global Connect Logo" />
                {/* <img className="sm:w-[102px] w-[90px] sm:h-[46px] h-[36px] md:mt-[25px] mt-5 ml-[24px]" src={navlogo2} alt="Header Logo" /> */}
              </div>
            </NavLink>
          </div>
        </div>

        <div ref={menuRef} onClick={toggleMenu} className="Navigation  lg:relative absolute right-0 lg:w-auto w-[80%] lg:h-auto">
          <div className="right_side  text-[#828282] font-Poppins lg:mt-[33px] lg:space-x-[32px] lg:flex lg:bg-inherit bg-white h-screen lg:h-auto pb-[10px]">

            <div className="cross_mark cursor-pointer lg:hidden lg:border-none border-b-[1px] border-gray-400 pb-3 lg:pl-0 pl-5 flex justify-end pr-10 pt-5 ">
              <i className="fa-solid fa-xmark text-[20px] text-black"></i>
            </div>

            <NavLink to='/'>
              <h1 className={`lg:border-none border-b-[1px] border-gray-400 lg:pl-0 pl-5 lg:mt-auto mt-5 ${getTextClasses('Home')}`} onClick={() => handleClick('Home')}>
                Home
              </h1>
            </NavLink>

            <NavLink to='/about'>
              <h1 className={`lg:border-none border-b-[1px] border-gray-400 lg:pl-0 pl-5 lg:pt-0 pt-3 lg:pb-0 pb-3 ${getTextClasses('About')}`} onClick={() => handleClick('About')}>
                About
              </h1>
            </NavLink>

            <NavLink to='/services'>
              <h1 className={`lg:border-none border-b-[1px] border-gray-400 lg:pl-0 pl-5 lg:pt-0 pt-3 lg:pb-0 pb-3 ${getTextClasses('Services')}`} onClick={() => handleClick('Services')}>
                Services
              </h1>
            </NavLink>

            <div className="dropdown relative inline-block cursor-pointer lg:border-none border-b-[1px] border-gray-400 lg:pl-0 pl-5 lg:pt-0 pt-3 lg:pb-0 pb-3">
              <h1 className="">Countries <i className="fa-solid fa-chevron-down ml-2 text-[12px]"></i></h1>
              <div className="dropdown-content py-5 text-[12px] font-Poppins absolute bg-white shadow-lg">
                <NavLink to='/hungary'>
                  <h1 className='border-b pb-2 text-center border-b-[#E8E8E8]'>Hungary</h1>
                </NavLink>
                <NavLink to='/australia'>
                  <h1 className='border-b pt-3 pb-2 text-center border-b-[#E8E8E8]'>Australia</h1>
                </NavLink>
                <NavLink to='/canada'>
                  <h1 className='border-b pt-3 pb-2 text-center border-b-[#E8E8E8]'>Canada</h1>
                </NavLink>
                <NavLink to='/hongkong'>
                  <h1 className='border-b pt-3 pb-2 text-center border-b-[#E8E8E8]'>Hongkong</h1>
                </NavLink>
                <NavLink to='/spain'>
                  <h1 className='border-b pt-3 pb-2 text-center border-b-[#E8E8E8]'>Spain</h1>
                </NavLink>
              </div>
            </div>

            <NavLink to='/blog'>
              <h1 className={`lg:border-none border-b-[1px] border-gray-400 lg:pl-0 pl-5 lg:pt-0 pt-3 lg:pb-0 pb-3 ${getTextClasses('Blog')}`} onClick={() => handleClick('Blog')}>
                Blog
              </h1>
            </NavLink>

            <NavLink to='/contact'>
              <h1 className={`lg:border-none border-b-[1px] border-gray-400 lg:pl-0 pl-5 lg:pt-0 pt-3 lg:pb-0 pb-3 ${getTextClasses('Contact')}`} onClick={() => handleClick('Contact')}>
                Contact
              </h1>
            </NavLink>
          </div>
        </div>

        <div onClick={toggleMenu} className="menu cursor-pointer lg:hidden md:pt-[33px]">
          <i className="fa-solid fa-bars text-[25px]"></i>
        </div>
      </div>
    </>
  );
};

export default Header;
