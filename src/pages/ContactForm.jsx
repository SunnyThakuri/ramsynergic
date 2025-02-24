import React, { useState } from "react";

function ContactForm() {
    const[work,setWork]=useState("")
    const[destination,setDestination]=useState("")
    console.log(work)
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
            <select name="purpose" id="purpose"
            className="p-2 border border-gray-300 font-semibold text-[#333] rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400 "
            onChange={(e)=> setWork(e.target.value)}
            value={work}
            >   <option value="" disabled >Select Purpose</option>
                <option value="B2B">B2B Collaboration</option>
                <option value="Work">Work Visa</option>
                <option value="Visit">Visit Visa</option>
                <option value="Student">Student Visa</option>
                <option value="Job">Job Search</option>
            </select>
            {
                work=="B2B" &&<div>
                    <div
                    className="flex flex-col flex-1 gap-1"
                    >
                        <label htmlFor="companyName"
                        className="text-[#333] font-semibold"
                        >
                            Company Name
                        </label>
                        <input type="text"
                        className="p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-4"
                        />
                    </div>
                    <div
                    className="flex flex-col gap-2 flex-1"
                    >
                        <label htmlFor="location"
                        className="font-semibold text-[#333]"
                        >Location</label>
                        <input type="text"
                        className="p-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400"
                        />
                    </div>
                    <div
                    className="flex flex-col gap-2"
                    >
                        <label htmlFor="position" className="text-[#333] font-semibold">Position</label>
                        <input type="text"
                        className="p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400 border border-gray-300"
                        />
                    </div>
                </div>
            }
            {
                work==="Work" &&(
                    <div className="flex "
                    
                    >
                        <div className="flex flex-col flex-1 ">
                            <select name="destination" id="destination"
                            
                            >
                                <option value="" disabled>Select Country</option>
                                <option value="EU">European Country</option>
                                <option value="GCC" >GCC Country</option>
                            </select>
                        </div>
                        </div>

                )
            }
          
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
