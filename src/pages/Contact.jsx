import startlogo from "../assets/ContactUI/star_logo.png";
import connectionlogo from "../assets/ContactUI/connection_logo.png";
import navigationlogo from "../assets/ContactUI/Navigation_logo.png";
import heattlogo from "../assets/ContactUI/Heart_logo.png";
import ContactForm from "./ContactForm";
import { useNavigate } from "react-router-dom";
import Faqs from "../components/ServicesUI/Faqs";
import FaqCustom from "../components/ServicesUI/FaqCustom";
import { FaFacebook,FaInstagram,FaTiktok,FaWhatsapp } from "react-icons/fa";

const Contact = () => {
  const redirect=useNavigate()
  return (
    <>
      <div className="all px-4 md:px-10 lg:px-[166.5px] pt-12">
        <div className="location_map flex flex-col md:flex-row gap-10">
          {/*  <div className="dubai_map w-full">
           <iframe
              className="rounded-[8px] w-full h-[290px]"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14442.26542447723!2d55.24788271704149!3d25.1841162!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e5f69fe2d7351ad%3A0x178d36fe63447735!2sSYNERGY%20CONSULTING!5e0!3m2!1sen!2snp!4v1719726664053!5m2!1sen!2snp"
            ></iframe>
            <h1 className="text-[22px] font-semibold font-Poppins text-center mt-[16px]">
              DUBAI
            </h1>
          </div> */}

          <div className="hongkong_map  h-[290px] w-full">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3608.2517407034093!2d55.316730174082764!3d25.262115677669208!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e5f5d004dffc1b9%3A0x899af2b1a57abb72!2sGlobal%20Connect!5e0!3m2!1sen!2snp!4v1741160707041!5m2!1sen!2snp"
               className="rounded-[8px] w-full h-full "
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
            <h1 className="text-[22px] font-semibold font-Poppins text-center mt-[16px]">
              GLOBAL CONNECT,DUBAI
            </h1>
          </div>
        </div>

        <div className="forms mt-[124px] flex flex-col lg:flex-row justify-between gap-8">
          <div className="left_side mt-[40px] font-Poppins space-y-4">
            <h2 className="text-[#828282] text-lg">YOUR JOURNEY BEGINS HERE</h2>
            <h1 className="text-[32px] text-[#00264F] font-semibold">
              LET'S CONNECT
            </h1>
            <p className="text-[#828282] w-full lg:w-[274px]">
              Connect With Us. Use our contact form to reach out, and our team
              will assist you promptly. Your journey starts here.
            </p>
            <div className="flex gap-4">
              <a href="https://www.facebook.com/globalconnect.fb">
                <FaFacebook  className="w-6 h-6 hover:text-[#00264f] hover:scale-110" />
              </a>
              <a href="https://www.instagram.com/theglobal.connect
">
                <FaInstagram className="w-6 h-6 hover:text-[#00264f] hover:scale-110" />
              </a>
              <a href="https://www.tiktok.com/@globalconnect.europe">
                <FaTiktok className="w-6 h-6 hover:text-[#00264f] hover:scale-110" />
              </a>
              <a href="https://wa.me/971567895360">
                <FaWhatsapp className="w-6 h-6 hover:text-[#00264f] hover:scale-110" />
              </a>
            </div>
          </div>
          <div className="right_side w-full lg:w-[674px]">
            <ContactForm />
          </div>
        </div>
      </div>
      <div className="mt-10">
        <FaqCustom/>
      </div>
      <div className="font-Poppins bg-[#00264F] mt-[124px] grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 px-4 md:px-10 lg:px-[166.5px] gap-[35px] py-[80px] md:py-[160px]">
        <div className="row-span-2">
          <h1 className="text-[#CFCFCF] font-semibold">
            WE TRULY BELIEVE THAT
          </h1>
          <h1 className="text-white text-[32px] pt-[12px]">
            INSPIRATION HAS NO BORDERS
          </h1>
          <p className="text-[#CFCFCF] pt-[16px] w-full md:w-[298px]">
            Discover the heart behind Migrant Group, where we fuse compassion
            and expertise to transform migrants' dreams into thriving realities.
          </p>

          <div className="btn mt-[30px] md:mt-[70px]">
            <button 
            onClick={()=> redirect("/about")}
            className="border-2 border-[#F7F7F7] text-[#F7F7F7] px-5 py-2 rounded-[8px]">
              More About Us
            </button>
          </div>
        </div>

        <div className="Dreams">
          <img src={startlogo} alt="Empowering Dreams" />
          <h1 className="text-white font-semibold pt-[8px]">
            EMPOWERING DREAMS
          </h1>
          <p className="text-[#CFCFCF] pt-[36px] w-full md:w-[318px]">
            We envision a world where every migrant's aspirations find wings to
            soar.
          </p>
        </div>

        <div className="connection">
          <img src={connectionlogo} alt="Connecting Continents" />
          <h1 className="text-white font-semibold pt-[8px]">
            CONNECTING CONTINENTS
          </h1>
          <p className="text-[#CFCFCF] pt-[36px] w-full md:w-[340px]">
            We serve clients in diverse regions, creating a global network of
            opportunities.
          </p>
        </div>

        <div className="navigating">
          <img src={navigationlogo} alt="Navigating All Paths" />
          <h1 className="text-white font-semibold pt-[8px]">
            NAVIGATING ALL PATHS
          </h1>
          <p className="text-[#CFCFCF] pt-[36px] w-full md:w-[357px]">
            Our team's broad experience spans various immigration destinations
            and visa types.
          </p>
        </div>

        <div className="heart">
          <img src={heattlogo} alt="Changing Lives" />
          <h1 className="text-white font-semibold pt-[8px]">CHANGING LIVES</h1>
          <p className="text-[#CFCFCF] pt-[36px] w-full md:w-[357px]">
            We believe in giving back and striving to make a positive difference
            in migrants' lives.
          </p>
        </div>
      </div>
    </>
  );
};

export default Contact;
