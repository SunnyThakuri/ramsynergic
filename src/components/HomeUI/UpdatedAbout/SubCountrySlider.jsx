import useEmblaCarousel from "embla-carousel-react";
import AutoPlay from "embla-carousel-autoplay";
import { countrySellected,GccCountry } from "../../../config/country";

function SubCountrySlider() {
  const [emblaRef] = useEmblaCarousel({ loop: true }, [AutoPlay({stopOnInteraction:false})]);

  return (
    <div className="relative overflow-hidden mx-4 mt-12 fill-slate-400"> {/* Prevents scrolling */}
      <div className="overflow-hidden" ref={emblaRef}>
        {/* Embla track (flex container) */}
        <div className="flex"> {/* Limits width to prevent scrolling */}
          {/* first */}
         <div
         className="w-full flex-shrink-0 shadow-md flex flex-col items-center justify-center gap-4 "
         >
          <h2
          className="font-semibold text-lg md:text-2xl"
          >European Countries</h2>
         <div className=" flex items-center flex-wrap gap-3   justify-center  mx-4 ">
           
           {countrySellected.map((country)=> (
            <div
            key={country.id}
            className=" w-10 h-7 md:w-14 md:h-8 shadow-xl "
            >
              <img 
              src={country.flag}
              className="w-full h-full object-stretch"
              />
               </div>
           ))}
          </div>
         </div>
         {/* second */}
         <div
         className="w-full flex-shrink-0 flex shadow-md flex-col items-center justify-center gap-4 "
         >
          <h2
          className="font-semibold text-lg md:text-2xl"
          >Gulf Countries</h2>
         <div className=" flex items-center gap-2  justify-around mx-4 ">
           
           {GccCountry.map((country)=> (
            <div
            key={country.id}
            className=" w-10 h-7 md:w-14 md:h-8 shadow-xl "
            >
              <img 
              src={country.flag}
              className="w-full h-full object-stretch "
              />
               </div>
           ))}
          </div>
         </div>
          

        </div>
      </div>
    </div>
  );
}

export default SubCountrySlider;
