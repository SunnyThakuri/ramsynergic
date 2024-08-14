import ContactUI from "../components/HomeUI/ContactUI";

const TermsAndCondition = () => {
  return (
    <>
      <div className="all pt-[134px] mx-4 sm:mx-8 md:mx-16 lg:mx-28 xl:mx-44 font-Poppins">
        <div className="headings">
          <h1 className="text-[#484747]">
            General terms and conditions for hiring Nepalese manpower and can be negotiated reasonably and mutually between the employer and the deploying agency as per the labour act of the concerning countries and based on the number and the categories of manpower deployed.
            Our Service Charge: We collect only US$ 250 per worker as a service charge. This service charge is including all local expenses like: labour clearance, local medical, local insurance, orientation etc. This service charge is payable by employer or candidate. There are NO hidden costs.
            Cost of Joining Ticket: Joining ticket or cost of same should provide by employer.
          </h1>
        </div>

        <div className="salary">
          <h1 className="text-[#14213A] text-[22px] font-semibold mt-[30px]">Salary:</h1>
          <p className="text-[#484747] mt-[16px]">The salaries vary from country to country, profession to profession or even from employer. However, the salary can be negotiated with the receiving countries as per their respective government regulations.There are minimum salary ranges, authorized by Government of Nepal, we can provide lists of authorized salary for Nepalese workers upon your request.</p>
        </div>

        <div className="period">
          <h1 className="text-[#14213A] text-[22px] font-semibold mt-[30px]">Period of Employment:</h1>
          <p className="text-[#484747] mt-[16px]">Two years minimum (renewable on mutual consent of both parties)</p>
        </div>

        <div className="time">
          <h1 className="text-[#14213A] text-[22px] font-semibold mt-[30px]">Working Hours:</h1>
          <p className="text-[#484747] mt-[16px]">8 hours daily/6 days week.</p>
        </div>

        <div className="Probationary">
          <h1 className="text-[#14213A] text-[22px] font-semibold mt-[30px]">Probationary Period:</h1>
          <p className="text-[#484747] mt-[16px]">Three months or 90 days from date of arrival in the country on hire.</p>
        </div>

        <div className="Overtime">
          <h1 className="text-[#14213A] text-[22px] font-semibold mt-[30px]">Overtime:</h1>
          <p className="text-[#484747] mt-[16px]">As per the rule of the company of hiring.</p>
        </div>

        <div className="Accommodation">
          <h1 className="text-[#14213A] text-[22px] font-semibold mt-[30px]">Accommodation:</h1>
          <p className="text-[#484747] mt-[16px]">To be provided by the employer to the employee free of charge.</p>
        </div>

        <div className="Food">
          <h1 className="text-[#14213A] text-[22px] font-semibold mt-[30px]">Food:</h1>
          <p className="text-[#484747] mt-[16px]">Food or food allowance should provide by employer.</p>
        </div>

        <div className="LocalTransportation">
          <h1 className="text-[#14213A] text-[22px] font-semibold mt-[30px]">Local Transportation:</h1>
          <p className="text-[#484747] mt-[16px]">To be provided by the employer free of cost.</p>
        </div>

        <div className="AnnualVacation">
          <h1 className="text-[#14213A] text-[22px] font-semibold mt-[30px]">Annual Vacation:</h1>
          <p className="text-[#484747] mt-[16px]">Minimum 21 days per year.</p>
        </div>

        <div className="MedicalInsurance">
          <h1 className="text-[#14213A] text-[22px] font-semibold mt-[30px]">Medical Insurance:</h1>
          <p className="text-[#484747] mt-[16px]">Should provide by employer.</p>
        </div>

        <div className="AirPassage">
          <h1 className="text-[#14213A] text-[22px] font-semibold mt-[30px]">Air Passage:</h1>
          <p className="text-[#484747] mt-[16px]">Free economy class air ticket upon completion of contract.</p>
        </div>

        <div className="OtherBenefitsAndInsurance">
          <h1 className="text-[#14213A] text-[22px] font-semibold mt-[30px]">Other Benefits and Insurance:</h1>
          <p className="text-[#484747] mt-[16px]">Will be in accordance with the labour laws of the country of hiring.</p>
        </div>

        <div className="Repatriation">
          <h1 className="text-[#14213A] text-[22px] font-semibold mt-[30px]">Repatriation:</h1>
          <p className="text-[#484747] mt-[16px]">If any workers, supplied by us, found medically and/or professionally UNFIT and/or refuse to work for personal reasons within probation period, we repatriate such workers and such repatriation will be fully borne by us.</p>
        </div>
      </div>

      <ContactUI />
    </>
  );
};

export default TermsAndCondition;
