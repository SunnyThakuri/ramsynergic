import React from 'react';
import faqImg1 from '../../assets/ServiceUI/faqImg1.png';
import faqImg2 from '../../assets/ServiceUI/faqImg2.png';
import FAQItem from './FAQItem';

const Faqs = () => {
  const faqs = [
    {
      question: 'Accordion title',
      answer: 'Admission requirements vary by university and program. Generally, you will need to provide academic transcripts, proof of English proficiency, a personal statement, and references.',
    },
    {
      question: 'Accordion title',
      answer: 'Neque, faucibus fames at et rhoncus pellentesque. Scelerisque commodo nunc tellus, elit semper tempus. Tristique ac tincidunt velit netus ipsum rutrum id ut. Vel metus, condimentum ut amet, lectus neque tincidunt placerat.',
    },
    {
      question: 'Accordion title',
      answer: 'Neque, faucibus fames at et rhoncus pellentesque. Scelerisque commodo nunc tellus, elit semper tempus. Tristique ac tincidunt velit netus ipsum rutrum id ut. Vel metus, condimentum ut amet, lectus neque tincidunt placerat.',
    },
    {
      question: 'Accordion title',
      answer: 'Neque, faucibus fames at et rhoncus pellentesque. Scelerisque commodo nunc tellus, elit semper tempus. Tristique ac tincidunt velit netus ipsum rutrum id ut. Vel metus, condimentum ut amet, lectus neque tincidunt placerat.',
    },
    {
      question: 'Accordion title',
      answer: 'Neque, faucibus fames at et rhoncus pellentesque. Scelerisque commodo nunc tellus, elit semper tempus. Tristique ac tincidunt velit netus ipsum rutrum id ut. Vel metus, condimentum ut amet, lectus neque tincidunt placerat.',
    },
    {
      question: 'Accordion title',
      answer: 'Neque, faucibus fames at et rhoncus pellentesque. Scelerisque commodo nunc tellus, elit semper tempus. Tristique ac tincidunt velit netus ipsum rutrum id ut. Vel metus, condimentum ut amet, lectus neque tincidunt placerat.',
    },
    {
      question: 'Accordion title',
      answer: 'Neque, faucibus fames at et rhoncus pellentesque. Scelerisque commodo nunc tellus, elit semper tempus. Tristique ac tincidunt velit netus ipsum rutrum id ut. Vel metus, condimentum ut amet, lectus neque tincidunt placerat.',
    },
  ];

  return (
    <div className="flex flex-col lg:flex-row justify-between mx-4 lg:mx-[166px] mt-[100px] mb-[330px]">
      <div className="relative mb-8 lg:mb-0">
        <img
          className="absolute hidden lg:block mt-[200px] ml-[150px] w-[291px] h-[369px]"
          src={faqImg1}
          alt=""
        />
        <img className="w-[291px] h-[369px]" src={faqImg2} alt="" />
      </div>
      <div className="w-full lg:w-2/4 space-y-3 pl-0 lg:pl-[100px]">
        <h1 className="text-[#000000] text-[33px] font-semibold font-Poppins mb-10">
          Frequently Asked Questions
        </h1>
        {faqs.map((faq, index) => (
          <FAQItem key={index} question={faq.question} answer={faq.answer} />
        ))}
      </div>
    </div>
  );
};

export default Faqs;
