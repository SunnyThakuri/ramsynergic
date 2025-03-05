import { Link } from "react-router-dom";
import faqImg1 from "../../assets/ServiceUI/faqImg1.png";
import faqImg2 from "../../assets/ServiceUI/faqImg2.png";
import FAQItem from "./FAQItem";

const Faqs = () => {
  const faqs = [
    {
      question: "What are the visa services you provide?",
      answer: "We specialize in work visa, student visa and visit visa.",
    },
    {
      question: "What are the countries available for work permit?",
      answer: (
        <>
          <>
            <span>
              <span>
                {" "}
                We have various countries available for work permits, including
              </span>
              <span>
                {" "}
                <Link
                  to="/country/Hungary"
                  className="text-red-300 underline px-1  "
                >
                  Hungary
                </Link>
              </span>
              <span>
                {" "}
                <Link
                  to="/country/Croatia"
                  className="text-red-300 underline px-1 "
                >
                  Croatia
                </Link>
                ,
              </span>
              <span>
                {" "}
                <Link
                  to="/country/Romania"
                  className="text-red-300 underline px-1 "
                >
                  Romania
                </Link>
                ,
              </span>
              <span>
                {" "}
                <Link
                  to="/country/Albania"
                  className="text-red-300 underline px-1 "
                >
                  Albania
                </Link>
                ,
              </span>
              <span>
                {" "}
                <Link
                  to="/country/Malta"
                  className="text-red-300 underline px-1 "
                >
                  Malta
                </Link>
                ,{" "}
              </span>
              <span>
                {" "}
                <Link
                  to="/country/France"
                  className="text-red-300 underline px-1 "
                >
                  France
                </Link>
                ,{" "}
              </span>
              <span>
                {" "}
                <Link
                  to="/country/Norway"
                  className="text-red-300 underline px-1 "
                >
                  Norway
                </Link>
                ,{" "}
              </span>
              <span>
                {" "}
                <Link
                  to="/country/Denmark"
                  className="text-red-300 underline px-1 "
                >
                  Denmark
                </Link>
                ,
              </span>
              <span>
                {" "}
                <Link
                  to="/country/Slovakia"
                  className="text-red-300 underline px-1 pr-2 "
                >
                  Slovakia.
                </Link>
              </span>
            </span>

            <span>
              <span className="">
                {" "}
                We also offer work opportunities in **GCC countries**, including
              </span>
              <span>
                <Link
                  to="/country/uae"
                  className="text-blue-500 underline px-1 "
                >
                  UAE
                </Link>
                ,{" "}
              </span>
              <span>
                <Link
                  to="/country/qatar"
                  className="text-blue-500 underline px-1 "
                >
                  Qatar
                </Link>
                ,{" "}
              </span>
              <span>
                <Link
                  to="/country/bahrain"
                  className="text-blue-500 underline px-1 "
                >
                  Bahrain
                </Link>
                ,{" "}
              </span>
              <span>
                <Link
                  to="/country/saudi-arabia"
                  className="text-blue-500 underline px-1 "
                >
                  Saudi Arabia
                </Link>
                ,
              </span>
              <span>
                <Link
                  to="/country/kuwait"
                  className="text-blue-500 underline px-1 "
                >
                  Kuwait
                </Link>
                .
              </span>
            </span>

            <span>
              For the latest updates, you can contact us directly or check{" "}
              <span>
                <Link to="/contact" className="text-blue-500 underline">
                  here{" "}
                </Link>
              </span>{" "}
              for vacancies.
            </span>
          </>
        </>
      ),
    },
    {
      question: "What are the documents required?",
      answer: (
        <>
          <span>
            The documents required depend on the type of visa you are applying
            for. However, for most visa services we offer, you will need to
            provide your CV, passport, and residence card, along with any
            additional documents specific to your visa category. <br /> To check
            the detailed requirements for your chosen country, select from the
            list below:
          </span>
          <span>
            <span> <br /> European Countries:</span>
            <span>
              {" "}
              <Link
                to="/country/Hungary"
                className="text-red-300 underline px-1  "
              >
                Hungary
              </Link>
            </span>
            <span>
              {" "}
              <Link
                to="/country/Croatia"
                className="text-red-300 underline px-1 "
              >
                Croatia
              </Link>
              ,
            </span>
            <span>
              {" "}
              <Link
                to="/country/Romania"
                className="text-red-300 underline px-1 "
              >
                Romania
              </Link>
              ,
            </span>
            <span>
              {" "}
              <Link
                to="/country/Albania"
                className="text-red-300 underline px-1 "
              >
                Albania
              </Link>
              ,
            </span>
            <span>
              {" "}
              <Link
                to="/country/Malta"
                className="text-red-300 underline px-1 "
              >
                Malta
              </Link>
              ,{" "}
            </span>
            <span>
              {" "}
              <Link
                to="/country/France"
                className="text-red-300 underline px-1 "
              >
                France
              </Link>
              ,{" "}
            </span>
            <span>
              {" "}
              <Link
                to="/country/Norway"
                className="text-red-300 underline px-1 "
              >
                Norway
              </Link>
              ,{" "}
            </span>
            <span>
              {" "}
              <Link
                to="/country/Denmark"
                className="text-red-300 underline px-1 "
              >
                Denmark
              </Link>
              ,
            </span>
            <span>
              {" "}
              <Link
                to="/country/Slovakia"
                className="text-red-300 underline px-1 pr-2 "
              >
                Slovakia.
              </Link>
            </span>
          </span>

          <span>
            <span className=""> <br /> GCC Countries:</span>
            <span>
              <Link to="/country/uae" className="text-blue-500 underline px-1 ">
                UAE
              </Link>
              ,{" "}
            </span>
            <span>
              <Link
                to="/country/qatar"
                className="text-blue-500 underline px-1 "
              >
                Qatar
              </Link>
              ,{" "}
            </span>
            <span>
              <Link
                to="/country/bahrain"
                className="text-blue-500 underline px-1 "
              >
                Bahrain
              </Link>
              ,{" "}
            </span>
            <span>
              <Link
                to="/country/saudi-arabia"
                className="text-blue-500 underline px-1 "
              >
                Saudi Arabia
              </Link>
              ,
            </span>
            <span>
              <Link
                to="/country/kuwait"
                className="text-blue-500 underline px-1 "
              >
                Kuwait
              </Link>
              .
            </span>
          </span>
        </>
      ),
    },
    {
      question: "Is there Link refund policy?",
      answer:
        " Yes, of course we give you the refund also. Depends on the program you have applied for.",
    },
  ];

  return (
    <div className="flex flex-col lg:flex-row justify-between mx-4 lg:mx-[166px] mt-[100px] mb-[150px]">
      <div className="w-full lg:w-2/4 space-y-3 pl-0 lg:pl-[100px]">
        <h1 className="text-[#000000] text-[33px] font-semibold font-Poppins mb-10">
          Frequently Asked Questions
        </h1>
        {faqs.map((faq, index) => (
          <FAQItem key={index} question={faq.question} answer={faq.answer} />
        ))}
      </div>
      <div className="relative mb-8 lg:mb-0 mt-12 md:mt-0 flex items-center justify-center">
        <img
          className="absolute hidden lg:block mt-[200px] ml-[150px] w-[291px] h-[369px]"
          src={faqImg1}
          alt=""
        />
        <img className="w-[291px] h-[369px]  " src={faqImg2} alt="" />
      </div>
    </div>
  );
};

export default Faqs;
