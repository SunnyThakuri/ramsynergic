import  { useState } from "react";
import StudentForm from "../components/contactForm/StudentForm";
import JobForm from "../components/contactForm/JobForm";

function ContactForm() {
  const [work, setWork] = useState("");
  const [destination, setDestination] = useState("");
  const [active, setActive] = useState(false);
  return (
    <div>
      <form className="p-6 rounded-lg shadow-lg space-y-6">
        <div className="flex flex-col md:flex-row md:space-x-4 space-y-4 md:space-y-0">
          <div className="name flex flex-col flex-1">
            <label htmlFor="fullName" className="text-[#333] font-semibold">
              Full Name
            </label>
            <input
              id="fullName"
              type="text"
              required
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
              id="contactNumber"
              type="text"
              required
              className="mt-1 p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
          </div>
          <div className="number flex flex-col flex-1">
            <label
              htmlFor="contactNumber"
              className="text-[#333] font-semibold"
            >
              Current Address
            </label>
            <input
              id="contactNumber"
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
            name="purpose"
            id="purpose"
            className="p-2  w-fit md:w-full  font-semibold text-[#333] rounded-md appearance-none focus:outline-none "
            onChange={(e) => setWork(e.target.value)}
            value={work}
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
          {work == "B2B" && (
            <div>
              <div className="flex flex-col flex-1 gap-1">
                <label
                  htmlFor="companyName"
                  className="text-[#333] font-semibold"
                >
                  Company Name
                </label>
                <input
                  type="text"
                  className="p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-4"
                />
              </div>
              <div className="flex flex-col gap-2 flex-1">
                <label htmlFor="location" className="font-semibold text-[#333]">
                  Location
                </label>
                <input
                  type="text"
                  className="p-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400"
                />
              </div>
              <div className="flex flex-col gap-2">
                <label htmlFor="position" className="text-[#333] font-semibold">
                  Position
                </label>
                <input
                  type="text"
                  className="p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400 border border-gray-300"
                />
              </div>
            </div>
          )}
          {work === "Work" && (
            <div className="flex flex-col gap-4">
              <div className="flex flex-col w-fit gap-5">
                <h2
                  onClick={() => setActive(!active)}
                  className="flex border-gray-300 cursor-pointer border px-6 py-2 rounded-md focus:ring-2 focus:ring-blue-400 font-semibold "
                >
                  Choose Your destination
                </h2>
                {active && (
                  <div className="flex flex-col gap-4">
                    <div className="flex flex-col md:flex-row gap-4">
                      <p
                        onClick={() => setDestination("EU")}
                        className={`flex w-full border-gray-300 border px-6 py-2 rounded-md focus:ring-2 focus:ring-blue-400 font-semibold ${
                          destination == "EU" ? "bg-blue-400" : ""
                        } cursor-pointer`}
                      >
                        European Country
                      </p>
                      {destination == "EU" && (
                        <div
                        className=""
                        >
                          <select
                            name="EU"
                            id="EU"
                            className="p-2 max-w-[250px]  rounded-md focus:ring-2 focus:ring-blue-400 focus:outline-none border-gray-300 font-semibold text-[#333]"
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
                    
                    <div className="flex flex-col md:flex-row gap-4">
                      <p
                        onClick={() => setDestination("GCC")}
                        className={`flex border-gray-300 border px-6 py-2 rounded-md focus:ring-2 focus:ring-blue-400 font-semibold ${
                          destination == "GCC" ? "bg-blue-400" : ""
                        } `}
                      >
                        GCC Country
                      </p>
                      {destination == "GCC" && (
                        <div>
                          <select
                            name="EU"
                            id="EU"
                            
                            className="p-2 max-w-[250px]  rounded-md focus:ring-2 focus:ring-blue-400 focus:outline-none border-gray-300 font-semibold text-[#333]"
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
                className="p-2 rounded-md focus:outline-none border border-gray-300 focus:ring-2 focus:ring-blue-400"
                />
              </div>
              <div
              className="flex flex-col gap-2"
              >
                <label htmlFor="education" className="text-[#333] font-semibold">Education</label>
                <input type="text"
                className="p-2 rounded-md  border border-gray-300 focus:outline-none focus:ring-blue-400 focus:ring-2"
                />
              </div>
            </div>
          )}

          {work==="Visit" &&(
            <div
            className="flex flex-col gap-4"
            >
                <h2
                className="text-[#333] font-semibold"
                >Destination Country</h2>
                <select
                            name="visit"
                            id="visit"
                            className="p-2 rounded-md focus:ring-2 focus:ring-blue-400 focus:outline-none border-gray-300 font-semibold text-[#333]"
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
                className="p-2 rounded-md focus:outline-none border border-gray-300 focus:ring-2 focus:ring-blue-400"
                />
              </div>
              <div
              className="flex flex-col gap-2"
              >
                <label htmlFor="education" className="text-[#333] font-semibold">Education</label>
                <input type="text"
                className="p-2 rounded-md  border border-gray-300 focus:outline-none focus:ring-blue-400 focus:ring-2"
                />
              </div>
              <div
              className="flex items-center gap-2 font-semibold text-[#333]"
              >
                <label htmlFor="travelHistory">Travel History</label>
                <input type="radio" name="travelHistory" id="yes"
                className="appearance-none w-4 h-4 bg-white border-2  checked:bg-blue-700"
                />
                <label
                className="font-semibold text-[#333]"
                htmlFor="yes">Yes</label>
                <input type="radio"  name="travelHistory" id="no"
                className="appearance-none w-4 h-4 bg-white border-2 checked:bg-blue-700"
                />
                <label htmlFor="no">No</label>
              </div>
             
            </div>
          )}
          {work=="Student" && <StudentForm/>}
          {work=="Job" &&(
            <JobForm/>
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
            className="mt-1 p-2 border border-gray-300 rounded-md w-full h-32 focus:outline-none focus:ring-2 focus:ring-blue-400"
          ></textarea>
        </div>

        <div className="privacy-policy flex items-center">
          <input
            id="privacyPolicy"
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
            type="submit"
            className="bg-[#00264F] text-white px-10 py-2 rounded-[8px] focus:outline-none focus:ring-2 focus:ring-blue-400"
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
}

export default ContactForm;
