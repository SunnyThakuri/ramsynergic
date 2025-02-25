import { useEffect, useState } from "react"


function FaqCustom() {
    const[isSuccess,setIssuccess]= useState(false)
    const[formdata,setFormdata]=useState({faq:"",
        name:"",
        email:"",
        phone:""
    })
    const handleChange=(event)=> {
        const name=event.target.name
        setFormdata((prev)=> {
            return({...prev,[name]:event.target.value})
        })
    }
    const handleSubmit=(event)=> {
        event.preventDefault()
        
        setFormdata({faq:"",
            name:"",
            email:"",
            phone:""
        })
        setIssuccess(true)
    }
    useEffect(()=> {
        setTimeout(()=> {
            setIssuccess(false)
        },1000)
    },[isSuccess])
  return (
    <div
    className="rounded-lg"
    >
      <div
      className="flex flex-col items-center justify-center rounded-lg "
      >
      <div
      className="w-12 h-12 relative -mb-6 shadow-xl  z-10  bg-white rounded-full"
      >
        <img src="/ourservices/profile.svg"
        className=" w-full h-full object-cover z-10 absolute"
        />
      </div>
      <div
      className=" relative w-full px-4 md:px-20 lg:px-72 py-12 bg-[#00264F]  text-white"
      >
       <form 
       onSubmit={handleSubmit}
      className="flex flex-col gap-3 lg:gap-8"
       >
       <label htmlFor="faq"
        className="block text-xl w-full text-center "
       
        >Ask me a question</label>
        <textarea
        
        name="faq" id="faq"
        className=" w-full text-black px-2 py-1 outline-none rounded-md h-32"
        value={formdata.faq}
        placeholder="Drop your question here !!!"
        onChange={handleChange}
        required
        rows={5}
        minLength={5}
        ></textarea>
       
       
        
        <div
        className="flex flex-col md:flex-row gap-4"
        >
        <input
        placeholder="Full Name"
        type="text" 
        className=" p-2 w-full text-black outline-none rounded-md"
        name="name"
        value={formdata.name}
        onChange={handleChange}
        minLength={3}
        required
        />
        
        <input
        placeholder="Email"
        type="email" name="email"
        className=" w-full text-black p-2 outline-none rounded-md"
        value={formdata.email}
        onChange={handleChange}
        required
        />
        <input
        placeholder="Contact Number"
        type="number" name="phone"
        className=" w-full text-black p-2 outline-none rounded-md"
        value={formdata.phone}
        onChange={handleChange}
        required
        />
        </div>
        <button type="submit"
        className="mx-auto w-fit px-12 border-2 mt-28  py-2 font-bold hover:bg-gray-200 hover:text-black text-gtay-100 rounded-lg"
        >Submit</button>
       </form>
           {isSuccess &&  <p 
           className="absolute bottom-32  right-56 lg:left-1/2 text-lg w-64 font-semibold rounded-lg bg-green-200 p-2 text-black text-center"
           >Successfully sent</p>}
      </div>
      </div>
    </div>
  )
}

export default FaqCustom
