import faqImg1 from "../../assets/ServiceUI/faqImg1.png";
import faqImg2 from "../../assets/ServiceUI/faqImg2.png";
import FAQItem from "./FAQItem";

const Faqs = () => {
  const faqs = [
    {
      question: "What are the visa services you provide?",
      answer:
        "Admission requirements vary by university and progra We specialize in work visa, student visa and visit visa.",
    },
    {
      question: "What are the countries available for work permit?",
      answer:(
        <>
        We have various countries available for work permit including Hungary, Croatia, Romania, Albania, Malta, France, Norway, Denmark, Slovakia. For latest updates you can contact us directly or also check here for vacancies 
        <a href="/country/hungary"
        className="text-red-300 underline px-2"
        >More info.</a>
        </>
      )
    },
    {
      question: "What are the documents required?",
      answer:(
        <>
         It depends on which visa you are going to apply for. But for almost all kinds of visa services that we provide, you need to send us your cv, passport & residence card. And other documents as per the visa category which you can check from here
         <a href="/country/hungary"
        className="text-red-300 underline px-2"
        >More info</a>
        </>
      )
         },
    {
      question: "Is there a refund policy?",
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
