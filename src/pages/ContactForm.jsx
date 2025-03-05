import  { useState } from "react";
import StudentForm from "../components/contactForm/StudentForm";
import JobForm from "../components/contactForm/JobForm";
import axios from 'axios'
import {Formik} from "formik"
function ContactForm() {

  const [destination, setDestination] = useState("");
  const [active, setActive] = useState(false);
 
  const initialValue= {
    fullName:"",
    emailAddress:"",
    contactNumber:"",
    currentAddress:"",
    purpose:"",
    companyName:"",
    Companylocation:"",
    position:"",
    EUworkDestination:"",
    GCCworkDestination:"",
    occupation:"",
    education:"",
    visitCountry:"",
    visitOccupation:"",
    visitEducation:"",
    travelHistory:"",
    studentDestination:"",
    studentEducation:"",
    languageTest:"",
    jobDestination:"",
    jobProfession:"",
    jobVisaStatus:"",
    message:"",
    privacyPolicy:""
  }
  
  return (
    <div>
      <Formik
      initialValues={initialValue}
      onSubmit={async(values,{setSubmitting,resetForm})=> {
        setTimeout(()=> {
          setSubmitting(false)
        },400)
        const res=await axios.post("http://localhost:5000/form",{
          fullName: values.fullName,
          emailAddress: values.emailAddress,
          contactNumber: values.contactNumber,
          currentAddress: values.currentAddress,
          purpose: values.purpose,
          companyName: values.companyName,
          Companylocation: values.Companylocation,
          position: values.position,
          EUworkDestination: values.EUworkDestination,
          GCCworkDestination: values.GCCworkDestination,
          occupation: values.occupation,
          education: values.education,
          visitCountry: values.visitCountry,
          visitOccupation: values.visitOccupation,
          visitEducation: values.visitEducation,
          travelHistory: values.travelHistory,
          studentDestination: values.studentDestination,
          studentEducation: values.studentEducation,
          languageTest: values.languageTest,
          jobDestination: values.jobDestination,
          jobProfession: values.jobProfession,
          jobVisaStatus: values.jobVisaStatus,
          message: values.message,
          privacyPolicy: values.privacyPolicy,
        })
        if (res.status > 200 && res.status <300){
          resetForm()
        }
    
      }}
      >
        {
          ({values,
           
            handleChange,
      
            handleSubmit,
            isSubmitting
          })=> (
            <form className="p-6 rounded-lg shadow-lg space-y-6"
      onSubmit={handleSubmit}
      >
        <div className="flex flex-col md:flex-row md:space-x-4 space-y-4 md:space-y-0">
          <div className="name flex flex-col flex-1">
            <label htmlFor="fullName" className="text-[#333] font-semibold">
              Full Name
            </label>
            <input
              id="fullName"
              name="fullName"
              type="text"
              required
              onChange={handleChange}
              value={values.fullName}
              className="mt-1 p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
          </div>
          <div className="email flex flex-col flex-1">
            <label htmlFor="emailAddress" className="text-[#333] font-semibold">
              Email Address
            </label>
            <input
              id="emailAddress"
              type="email"
              onChange={handleChange}
              value={values.emailAddress}
              required
              className="mt-1 p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
          </div>
        </div>

        <div className="flex flex-col md:flex-row md:space-x-4 space-y-4 md:space-y-0">
          <div className="number flex flex-col flex-1">
            <label
              htmlFor="contactNumber"
              className="text-[#333] font-semibold"
            >
              Contact Number
            </label>
            <input
            onChange={handleChange}
            value={values.contactNumber}
              id="contactNumber"
              type="text"
              required
              className="mt-1 p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
          </div>
          <div className="number flex flex-col flex-1">
            <label
              htmlFor="currentAddress"
              className="text-[#333] font-semibold"
            >
              Current Address
            </label>
            <input
            onChange={handleChange}
            value={values.currentAddress}
              id="currentAddress"
              type="text"
              required
              className="mt-1 p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
          </div>
        </div>
        <div className="flex flex-col gap-5 flex-1">
          <div
         
          className=" border bg-white w-full  border-gray-300 font-semibold text-[#333] rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400 "
          >
            <label 
            className="block  w-full "
            onClick={()=> document.getElementById("purpose").click()}
            >
          <select
            onChange={handleChange}
            value={values.purpose}
            name="purpose"
            id="purpose"
            className="p-2  w-fit md:w-full  font-semibold text-[#333] rounded-md appearance-none focus:outline-none "
            
          >
            {" "}
            <option
           className="text-xs md:text-lg"
            value="" disabled>
              Select Purpose
            </option>
         <option  className="text-xs md:text-lg" value="B2B">B2B Collaboration</option>
            <option  className="text-xs md:text-lg" value="Work">Work Visa</option>
            <option  className="text-xs md:text-lg" value="Visit">Visit Visa</option>
            <option  className="text-xs md:text-lg" value="Student">Student Visa</option>
            <option  className="text-xs md:text-lg" value="Job">Job Search</option> 
          </select>
          
          </label>
          </div>
          {values.purpose && values.purpose == "B2B" && (
            <div>
              <div className="flex flex-col flex-1 gap-1">
                <label
                  htmlFor="companyName"
                  className="text-[#333] font-semibold"
                >
                  Company Name
                </label>
                <input
                onChange={handleChange}
                value={values.companyName}
                name="companyName"
                  type="text"
                  className="p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-4"
                />
              </div>
              <div className="flex flex-col gap-2 flex-1">
                <label htmlFor="Companylocation" className="font-semibold text-[#333]">
                  Location
                </label>
                <input
                onChange={handleChange}
                value={values.Companylocation}
                name="Companylocation"
                  type="text"
                  className="p-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400"
                />
              </div>
              <div className="flex flex-col gap-2">
                <label htmlFor="position" className="text-[#333] font-semibold">
                  Position
                </label>
                <input
                onChange={handleChange}
                value={values.position}
                name="position"
                  type="text"
                  className="p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400 border border-gray-300"
                />
              </div>
            </div>
          )}
          {values.purpose&&values.purpose === "Work" && (
            <div className="flex flex-col gap-4">
              <div className="flex flex-col w-fit gap-5 relative">
                <h2
                  onClick={() => setActive(!active)}
                  className={` relative flex border-gray-300  cursor-pointer border px-6 py-2 rounded-md focus:ring-2 focus:ring-blue-400 font-semibold ${active?"bg-[#00264F] text-white":""}`}
                >
                  Choose Your destination
                </h2>
                {active && (
                  <div className="  flex flex-col gap-4 w-fit border border-gray-300 bg-white -mt-4 py-2 px-4 rounded-md">
                    <div className="flex flex-col w-full mx-auto md:flex-row gap-4">
                      <p
                        onClick={() => setDestination("EU")}
                        className={`flex w-full border-gray-300 border px-6 py-2 rounded-md focus:ring-2 focus:ring-blue-400 font-semibold ${
                          destination == "EU" ? "bg-[#00254F] text-white" : ""
                        } cursor-pointer`}
                      >
                        European Country
                      </p>
                      {destination == "EU" && (
                        <div
                        className=""
                        >
                          <select
                            onChange={handleChange}
                            value={values.EUworkDestination}
                            name="EUworkDestination"
                            id="EUworkDestination"
                            className="p-2 max-w-[250px] border  rounded-md focus:ring-2 focus:ring-blue-400 focus:outline-none border-gray-300 font-semibold text-[#333]"
                          >
                            <option className="text-xs md:text-lg" value="" disabled >
                              European Country
                            </option>
                            <option className="text-xs md:text-lg" value="Hungary">Hungary</option>
                            <option className="text-xs md:text-lg" value="Malta">Malta</option>
                            <option className="text-xs md:text-lg" value="croatia">Croatia</option>
                            <option className="text-xs md:text-lg" value="bulgaria">Bulgarai</option>
                            <option className="text-xs md:text-lg" value="albania">Albania</option>
                            <option className="text-xs md:text-lg" value="serbia">Serbia</option>
                            <option className="text-xs md:text-lg" value="romania">Romania</option>
                            <option className="text-xs md:text-lg" value="slovakia">Slovakia</option>
                            <option className="text-xs md:text-lg" value="norway">Norway</option>
                            <option className="text-xs md:text-lg" value="denmark">Denmark</option>
                            <option className="text-xs md:text-lg" value="france">France</option>
                          </select>
                        </div>
                      )}
                    </div>
                    
                    <div className="flex flex-col w-full md:flex-row gap-4">
                      <p
                        onClick={() => setDestination("GCC")}
                        className={`flex w-full border-gray-300 border px-6 py-2 rounded-md focus:ring-2 focus:ring-blue-400 font-semibold ${
                          destination == "GCC" ? "bg-[#00254F] text-white" : ""
                        } `}
                      >
                        GCC Country
                      </p>
                      {destination == "GCC" && (
                        <div>
                          <select
                          onChange={handleChange}
                          value={values.GCCworkDestination}
                            name="GCCworkDestination"
                            id="GCCworkDestination"
                            
                            className="p-2 max-w-[250px] border  rounded-md focus:ring-2 focus:ring-blue-400 focus:outline-none border-gray-300 font-semibold text-[#333]"
                          >
                            <option className="text-xs w-fit md:text-lg" value="" disabled >
                              GCC Country
                            </option>
                            <option className="text-xs w-fit md:text-lg" value="UAE">UAE</option>
                            <option className="text-xs w-fit md:text-lg" value="Quatar">Quatar</option>
                            <option className="text-xs w-fit md:text-lg" value="Bahrain">Bahrain</option>
                            <option className="text-xs w-fit md:text-lg" value="Saudi Arabia">Saudi Arabia</option>
                            <option className="text-xs w-fit md:text-lg" value="Kuwait">Kuwait</option>
                          </select>
                        </div>
                      )}

                    </div>
                  </div>
                )}
              </div>
              <div
              className="flex flex-col gap-2"
              >
                <label htmlFor="occupation"
                className="text-[#333] font-semibold"
                >Occupation</label>
                <input type="text" 
                onChange={handleChange}
                value={values.occupation}
                name="occupation"
                id="occupation"
                className="p-2 rounded-md focus:outline-none border border-gray-300 focus:ring-2 focus:ring-blue-400"
                />
              </div>
              <div
              className="flex flex-col gap-2"
              >
                <label htmlFor="education" className="text-[#333] font-semibold">Education</label>
                <input type="text"
                onChange={handleChange}
                value={values.education}
                name="education"
                id="education"
                className="p-2 rounded-md  border border-gray-300 focus:outline-none focus:ring-blue-400 focus:ring-2"
                />
              </div>
            </div>
          )}

          {values.purpose&&values.purpose ==="Visit" &&(
            <div
            className="flex flex-col gap-4"
            >
                <h2
                className="text-[#333] font-semibold"
                >Destination Country</h2>
                <select
                            name="visitCountry"
                            id="visitCountry"
                            onChange={handleChange}
                            value={values.visitCountry}
                            className="p-2 rounded-md focus:ring-2 focus:ring-blue-400 focus:outline-none border border-gray-300 font-semibold text-[#333]"
                          >
                            <option className="text-xs md:text-lg" value="" disabled selected>
                              Select Country
                            </option>
                            <option className="text-xs md:text-lg" value="UAE">UAE</option>
                            <option className="text-xs md:text-lg" value="Quatar">Quatar</option>
                            <option className="text-xs md:text-lg" value="Bahrain">Bahrain</option>
                            <option className="text-xs md:text-lg" value="Saudi Arabia">Saudi Arabia</option>
                            <option className="text-xs md:text-lg" value="Kuwait">Kuwait</option>
                          </select>
                          <div
              className="flex flex-col gap-2"
              >
                <label htmlFor="occupation"
                className="text-[#333] font-semibold"
                >Occupation</label>
                <input type="text" 
                onChange={handleChange}
                value={values.visitOccupation}
                name="visitOccupation"
                id="visitOccupation"
                className="p-2 rounded-md focus:outline-none border border-gray-300 focus:ring-2 focus:ring-blue-400"
                />
              </div>
              <div
              className="flex flex-col gap-2"
              >
                <label htmlFor="education" className="text-[#333] font-semibold">Education</label>
                <input type="text"
                onChange={handleChange}
                value={values.visitEducation}
                name="visitEducation"
                className="p-2 rounded-md  border border-gray-300 focus:outline-none focus:ring-blue-400 focus:ring-2"
                />
              </div>
              <div
              className="flex items-center gap-2 font-semibold text-[#333]"
              >
                <label htmlFor="travelHistory">Travel History</label>
                <input 
                onChange={handleChange}
                checked={values.travelHistory==="yes"}
                value="yes"
                type="radio" name="travelHistory" id="yes"
                className="appearance-none w-4 h-4 bg-white border-2  checked:bg-blue-700"
                />
                <label
                className="font-semibold text-[#333]"
                htmlFor="yes">Yes</label>
                <input type="radio"  name="travelHistory" id="no"
                onChange={handleChange}
                checked={values.travelHistory==="no"}
                value="no"
                className="appearance-none w-4 h-4 bg-white border-2 checked:bg-blue-700"
                />
                <label htmlFor="no">No</label>
              </div>
             
            </div>
          )}
          {values.purpose&&values.purpose=="Student" && <StudentForm
          handleChange={handleChange}
          values={values}
          />}
          {values.purpose&&values.purpose=="Job" &&(
            <JobForm
            handleChange={handleChange}
            values={values}
            />
          )}
        </div>
        <div
        className="flex flex-col gap-4"
        >
            <label
            className="font-semibold text-[#333] w-fit"
            htmlFor="file">Upload  Documents </label>
            <input type="file" id="file" multiple 
            placeholder="Upload Files"
            className="w-full"
            />
          </div>
        <div className="message w-full">
          <label htmlFor="message" className="text-[#333] font-semibold">
            Message
          </label>
          <textarea
            id="message"
            onChange={handleChange}
            value={values.message}
            className="mt-1 p-2 border border-gray-300 rounded-md w-full h-32 focus:outline-none focus:ring-2 focus:ring-blue-400"
          ></textarea>
        </div>

        <div className="privacy-policy flex items-center">
          <input
            id="privacyPolicy"
            onChange={handleChange}
            value={values.privacyPolicy}
            type="checkbox"
            required
            className="mr-2 focus:ring-2 focus:ring-blue-400"
          />
          <label htmlFor="privacyPolicy" className="text-[#333]">
            I agree with the
            <a href="#" className="text-blue-500 underline">
              {" "}
              Privacy Policy
            </a>
          </label>
        </div>
          
        <div className="text-center">
          <button
          disabled={isSubmitting}
            type="submit"
            className="bg-[#00264F] text-white px-10 py-2 rounded-[8px] focus:outline-none focus:ring-2 focus:ring-blue-400"
          >
            Submit
          </button>
        </div>
      </form>
          )
        }
      </Formik>
      
    </div>
  );
}

export default ContactForm;
