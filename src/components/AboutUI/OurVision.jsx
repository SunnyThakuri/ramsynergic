

function OurVision() {
  return (
    <div  className="bg-[#00254F]  py-8 md:py-16 px-4 lg:px-44">
      <div className="mx-auto max-w-[1440px]">
        <h1 className="text-white text-[24px] lg:text-[32px] font-semibold">
          OUR VISION
        </h1>

        <div className="flex  flex-col gap-8 mt-8">
        <div className="flex flex-col md:flex-row md:gap-12  gap-4">
          <p className="text-white max-w-1/2 md:text-lg w-full md:w-1/2 text-justify ">
            {`Our vision is to become the employers' preferred recruitment agency
            of choice, distinguished by the quality and extent of our services.
            We strive to provide ethical and professional solutions that
            positively impact clients, candidates, society, and the nation. By
            fostering strong relationships and delivering exceptional results,
            we aim to be the trusted partner for businesses seeking top talent.
            Our commitment to excellence and customer satisfaction drives us to
            continuously innovate and improve, ensuring a seamless and efficient
            recruitment process for all stakeholders.`}
          </p>
        
          <div
            className="max-w-1/2  w-full md:w-1/2 max-h-[320px] lg:max-h-[300px]"
            >
                <img
                className="w-full h-full object-cover object-center rounded-lg"
                src="/aboutUs/vison.jpg" />
            </div>
        </div>
        <div className="">
        <div className="  w-full flex flex-col md:flex-row md:gap-12 gap-4 justify-between">
            <div className="max-w-1/2 w-full md:w-1/2 max-h-[330px] hidden md:block lg:max-h-[300px]">
                <img
                className="w-full h-full rounded-lg object-top  object-cover"
                src="/aboutUs/vison2.avif" />
            </div>
          <p className="max-w-1/2 md:text-lg w-full md:w-1/2 text-justify text-white">
            {`To become the employers' preferred Recruitment Agency of choice
            based on the extent and quality of our service. We also endeavor to
            provide exceptional recruitment solutions that meet the diverse
            needs of our clients, foster a culture of excellence, and contribute
            to the overall growth and development of the industry.`}
          </p>
            <div className="max-w-1/2   h-fit md:hidden lg:max-h-[200px]">
                <img
                className="w-full max-h-[330px] rounded-lg  object-cover object-top"
                src="/aboutUs/vison2.avif" />
            </div>
        </div>
        </div>
        </div>
      </div>
    </div>
  );
}

export default OurVision;
