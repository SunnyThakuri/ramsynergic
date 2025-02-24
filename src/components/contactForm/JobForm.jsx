

function JobForm() {
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
        htmlFor="destination">Destination Country</label>
        <select name="destination" id="destination"
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
        htmlFor="profession">Latest Profession</label>
        <input
         className="p-2 rounded-md focus:outline-none border border-gray-300 focus:ring-2 focus:ring-blue-400"
        type="text" />
      </div>
      <div
      className="flex flex-col gap-4"
      >
        <label
        className="font-semibold text-[#333]"
        htmlFor="profession">Visa Status</label>
        <input
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
