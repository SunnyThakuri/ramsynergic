import AboutUs from "../components/HomeUI/AboutUs"
/* import ConsultingService from "../components/HomeUI/ConsultingService" */
import ContactUI from "../components/HomeUI/ContactUI"
import Discover from "../components/HomeUI/Discover"
import OurServicesUpdated from "../components/HomeUI/OurServiceUpdated/OurServices"
import GlobalOperation from "../components/HomeUI/GlobalOperation"
import HeroSlider from "../components/HomeUI/HeroSlider"
import Opportunities from "../components/HomeUI/Opportunities"
import OurServices from "../components/HomeUI/OurServices"
// import SuccessStories from "../components/HomeUI/SuccessStories" 
import Testimonials from "../components/HomeUI/Testimonials"
/* import MainSectir from "../components/HomeUI/UpdatedAbout/MainSectir" */
import SubCountrySlider from "../components/HomeUI/UpdatedAbout/SubCountrySlider"

const Home = () => {
  return (
    <>
      <HeroSlider />
      <GlobalOperation />
      <SubCountrySlider/> 
      <OurServices />
      {/* <ConsultingService /> */}
     <OurServicesUpdated />
      {/* <Discover />  fixx*/}
      {/* <Opportunities /> fixxx */}
      {/* <SuccessStories /> */}
      {/* <Testimonials /> no need */}
     
      <ContactUI />
       <AboutUs />
       {/* <MainSectir/> */}
       
    </>
  )
}
export default Home