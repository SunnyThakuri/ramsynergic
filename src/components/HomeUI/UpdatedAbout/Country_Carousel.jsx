import { useEffect, useState } from "react";
import AutoPlay from "embla-carousel-autoplay";
import useEmblaCarousel from "embla-carousel-react";
import { useNavigate } from "react-router-dom";
import { countrySellected } from "../../../config/country";
import EUflag from "/flags/EU-flag.jpg";
import GCCflag from "/flags/gcc-flag.webp";

const EmblaCarousel = () => {
  const redirect = useNavigate();
  const [move, setMove] = useState(false);

  const [emblaRef] = useEmblaCarousel(
    {
      dragFree: true,
      loop: true,
      slidesToScroll: 1, // Scrolls one by one for better UX
      align: "start", // Ensures proper alignment
    },
    [AutoPlay({ stopOnInteraction: move ? true : false, delay: 3000 })]
  );

  useEffect(() => {
    if (move) {
      const timeout = setTimeout(() => {
        setMove(false);
      }, 500);
      return () => clearTimeout(timeout);
    }
  }, [move]);

  return (
    <div>
      <section className="relative  w-full overflow-hidden">
        <div className="overflow-hidden" ref={emblaRef}>
          <div className="flex gap-4 self-center mx-3 md:pl-4">
            {countrySellected.map((eh) => (
              <div
                key={eh.id}
                onClick={() => setMove(true)}
                className="w-fit flex-shrink-0 overflow-hidden "
              >
                <div className="relative ">
                  <img
                    className="relative rounded-xl w-[335px] h-56 md:h-72 md:min-w-96 max-w-lg shadow-lg object-cover"
                    src={eh.url}
                    alt={eh.name}
                  />
                  <p className="absolute backdrop-blur-sm w-fit px-4 py-1 z-5 text-lg rounded-lg md:text-xl tracking-tight font-semibold text-white bottom-2 left-2">
                    {eh.name}
                  </p>
                  <p
                    onClick={() => redirect(`/country/${eh.name}`)}
                    className="absolute md:text-lg  w-fit px-6 py-1.5 z-5 cursor-pointer hover:bg-blue-900  bg-[#00264F] rounded-lg tracking-tight text-bold text-white bottom-2 right-2"
                  >
                    View Details
                  </p>

                  {/* Flag Display */}
                  <div
                    className={`absolute top-4 right-2 md:right-5 ${
                      eh.schengen ? "scale-75 right-1 top-2 brightness-100" : ""
                    } md:scale-100 md:top-4 md:right-6 flex gap-1`}
                  >
                    <img
                      src={eh.flag}
                      alt={`${eh.name} flag`}
                      className="w-14 h-8 md:w-16 md:h-9 brightness-90 object-cover shadow-lg z-5 bg-transparent"
                    />
                    {eh?.schengen && (
                      <img
                        src={EUflag}
                        alt="EU flag"
                        className="w-14 h-8 md:w-16 md:h-9 brightness-90 object-cover shadow-lg z-5 bg-transparent"
                      />
                    )}
                    {eh?.tag && (
                      <img
                        src={GCCflag}
                        alt="EU flag"
                        className="w-14 h-8 md:w-16 md:h-9 brightness-90 object-cover shadow-lg z-5 bg-transparent"
                      />
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default EmblaCarousel;
