import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown, faChevronUp } from '@fortawesome/free-solid-svg-icons';

const FAQItem = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border-[1px] rounded-[10px] space-y-5 border-[#DAE0E6]">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex justify-between items-center w-full pt-3 px-3 focus:outline-none text-[#272D37] font-semibold"
      >
        <span className="text-left">{question}</span>
        <span>
          <FontAwesomeIcon icon={isOpen ? faChevronUp : faChevronDown} />
        </span>
      </button>
      <div
        className={`overflow-hidden transition-all duration-700 ease-in text-[#5F6D7E] ${isOpen ? 'max-h-screen px-[16px] pb-[12px]' : 'max-h-0'
          }`}
      >
        {isOpen && <div className="text-left">{answer}</div>}
      </div>
    </div>
  );
};

export default FAQItem;
