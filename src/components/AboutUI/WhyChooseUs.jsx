

function WhyChooseUs() {
  return (
    <div
    className=" mt-32 md:px-24 px-4 flex flex-col lg:flex-row items-center justify-between lg:gap-36"
    >
      <div
      className="flex flex-col md:items-center "
      >
        <h2
        className=" text-xl px-2 md:text-3xl font-semibold py-2 md:my-4"
        >WHY CHOOSE US?</h2>
        <p
        className="md:text-center text-lg px-4 tracking-tight md:text-2xl my-4 text-[#828282]"
        >
           <span
           className="md:block"
           >Transforming recruitment</span>
          <span> through innovation, integrity, and
          excellence, globally.</span>
        </p>
      </div>
      <div
      className="flex flex-col gap-4"
      >
        <div
        className=" border-2 rounded-lg flex flex-col md:flex-row md:px-4 items-center py-8 "
        >
            <div
            className="w-24 md:w-36 "
            >
                <img 
                className="w-full h-full object-cover "
                src="/aboutUs/expertise.png"  />
            </div>
            <div
            className="flex flex-col items-center "
            >
            <h2  className="text-2xl md:text-3xl my-4 ">
            Expertise
            </h2>
            <p  className="text-lg md:text-xl text-[#828282] text-center mx-8">
            Unparalleled knowledge and expertise in recruitment, delivering exceptional solutions.

            </p>
            </div>
        </div>
        <div
        className=" border-2 rounded-lg flex flex-col md:flex-row md:px-4 items-center py-8 "
        >
            <div
            className="w-24 md:w-36 "
            >
                <img 
                className="w-full h-full object-cover "
                src="/aboutUs/high-quality.png"  />
            </div>
            <div
            className="flex flex-col items-center "
            >
            <h2
            className="text-2xl md:text-3xl my-4 "
            >
            Quality
            </h2>
            <p
            className="text-lg md:text-xl text-[#828282] text-center mx-8"
            >
            Stringent standards guarantee exceptional candidates that exceed expectations.

            </p>
            </div>
        </div>
        <div
        className=" border-2 rounded-lg flex flex-col md:flex-row md:px-4 items-center py-8 "
        >
            <div
            className="w-24 md:w-36 "
            >
                <img 
                className="w-full h-full object-cover "
                src="/aboutUs/productivity.png"  />
            </div>
            <div
            className="flex flex-col items-center "
            >
            <h2
            className="text-2xl md:text-3xl my-4 "
            >
            Efficiency
            </h2>
            <p
            className="text-lg md:text-xl text-[#828282] text-center mx-8"
            >
           Optimized processes streamline operations, maximizing time and resources.
            </p>
            </div>
        </div>
      </div>
    </div>
  );
}

export default WhyChooseUs;
