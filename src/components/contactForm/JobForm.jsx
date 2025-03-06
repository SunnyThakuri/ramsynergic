

function JobForm({handleChange,values}) {
  return (
    <div>
      <div
      className="flex flex-col gap-4"
      >
      <div
      className="flex flex-col gap-4 font-semibold text-[#333]"
      >
        <label
        className="font-semibold text-[#333]"
        htmlFor="jobDestination">Destination Country</label>
        <select name="jobDestination" id="jobDestination"
        onChange={handleChange}
        value={values.jobDestination}
        className="p-2 rounded-md focus:outline-none border border-gray-300 focus:ring-2 focus:ring-blue-400"
        >

            <option className="text-xs md:text-lg" value="" disabled selected>select destination</option>
            <option className="text-xs md:text-lg" value="UK">UK</option>
            <option className="text-xs md:text-lg" value="Australia">Australia</option>
            <option className="text-xs md:text-lg" value="Canada">Canada</option>
            <option className="text-xs md:text-lg" value="Malta">Malta</option>
        </select>
       
      </div>
      <div
      className="flex flex-col gap-4"
      >
        <label
        className="font-semibold text-[#333]"
        htmlFor="jobProfession">Latest Profession</label>
        <input
        name="jobProfession"
        onChange={handleChange}
        value={values.jobProfession}
         className="p-2 rounded-md focus:outline-none border border-gray-300 focus:ring-2 focus:ring-blue-400"
        type="text" />
      </div>
      <div
      className="flex flex-col gap-4"
      >
        <label
        className="font-semibold text-[#333]"
        htmlFor="jobVisaStatus">Visa Status</label>
        <input
        name="jobVisaStatus"
        onChange={handleChange}
        value={values.jobVisaStatus}
         className="p-2 rounded-md focus:outline-none border border-gray-300 focus:ring-2 focus:ring-blue-400"
        type="text" />
      </div>
      <div>

      </div>
      </div>
    </div>
  )
}

export default JobForm
