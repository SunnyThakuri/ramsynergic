import AboutUs from "../components/HomeUI/AboutUs"
import ConsultingService from "../components/HomeUI/ConsultingService"
import ContactUI from "../components/HomeUI/ContactUI"
import Discover from "../components/HomeUI/Discover"

import GlobalOperation from "../components/HomeUI/GlobalOperation"
import HeroSlider from "../components/HomeUI/HeroSlider"
import Opportunities from "../components/HomeUI/Opportunities"
import OurServices from "../components/HomeUI/OurServices"
import SuccessStories from "../components/HomeUI/SuccessStories"
import Testimonials from "../components/HomeUI/Testimonials"

const Home = () => {
  return (
    <>
      <HeroSlider />
      <AboutUs />
      <OurServices />
      <GlobalOperation />
      <ConsultingService />
      <Discover />
      <Opportunities />
      <SuccessStories />
      <Testimonials />
      <ContactUI />
    </>
  )
}
export default Home