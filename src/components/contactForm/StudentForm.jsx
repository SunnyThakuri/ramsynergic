
import "../../style/contact.css"

function StudentForm({handleChange,values}) {
  return (
    <div
    className="flex flex-col gap-4"
    >
      <div
      className="flex flex-col gap-4 font-semibold text-[#333]"
      >
        <label
        className="font-semibold text-[#333]"
        htmlFor="studentDestination">Destination Country</label>
        <select name="studentDestination"
        onChange={handleChange}
        value={values.studentDestination}
        className="p-2 rounded-md focus:outline-none border border-gray-300 focus:ring-2 focus:ring-blue-400"
        >

            <option className="text-xs md:text-lg" value="" disabled>select destination</option>
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
      htmlFor="studentEducation">Education</label>
      <input
      onChange={handleChange}
      value={values.studentEducation}
      name="studentEducation"
      className="p-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400"
      type="text" />
      </div>
      <div
      className="flex flex-col gap-4 font-semibold text-[#333]"
      >
        <label htmlFor="languageTest">Language Test</label>
        <select name="languageTest" 
        onChange={handleChange}
        value={values.languageTest}
        className="p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400 border border-gray-300"
        >
            <option className="text-xs md:text-lg" value="" disabled>Select Test</option>
            <option className="text-xs md:text-lg" value="IELTS">IELTS</option>
            <option className="text-xs md:text-lg" value="PTE">PTE</option>
        </select>
      </div>
    </div>
  )
}

export default StudentForm
