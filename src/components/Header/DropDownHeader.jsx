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
    <div className="flex flex-col gap-1">
      {/* European Country Dropdown */}
      <div
        className="relative group"
        onMouseEnter={() => handleHover("eu")}
        onMouseLeave={handleMouseLeave}
      >
        <div
          className={`border-b mx-1 rounded-md my-1 ${
            activeDropdown === "eu" ? "bg-[#00254F] text-white" : "hover:bg-gray-50"
          }`}
        >
          <p className="text-center text-[14px] p-1">European Country</p>
        </div>
        {activeDropdown === "eu" && (
          <div className="absolute rounded-md  top-0 right-full md:left-full w-[150px] md:w-[200px] max-h-[200px] overflow-y-auto scrollbar-hide border-1 border-gray-300 bg-slate-50 shadow-lg">
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
          className={`border-b mx-1 w-[150px] rounded-lg my-1 ${
            activeDropdown === "gcc" ? "bg-[#00254F] text-white" : "hover:bg-gray-50"
          }`}
        >
          <p className="text-center text-[14px] p-1">GCC Country</p>
        </div>
        {activeDropdown === "gcc" && (
          <div className="absolute  rounded-md py-1 top-0 right-full md:left-full w-[150px] overflow-y-auto scrollbar-hide border-1 border-gray-300 bg-slate-50 shadow-lg">
            {countrySellected.slice(11).map((eh) => (
              <Link
                to={`/country/${eh.name}`}
                onClick={() => {
                  setMobNav((prev) => !prev);
                  setActiveDropdown(null);
                }}
                key={eh.id}
                className="block text-[14px]  text-center px-2 py-1 m-1 border-b hover:bg-blue-100"
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

