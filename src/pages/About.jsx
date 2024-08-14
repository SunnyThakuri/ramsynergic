
import AboutDiscover from "../components/AboutUI/AboutDiscover"
import AboutHeroSlider from "../components/AboutUI/AboutHeroSlider"
import AboutOpportunities from "../components/AboutUI/AboutOpportunities"
import BestVisaConsultant from "../components/AboutUI/BestVisaConsultant"
import ClientsAndAbout from "../components/AboutUI/ClientsAndAbout"
import Immigration from "../components/AboutUI/Immigration"
import TeamSlider from "../components/AboutUI/TeamSlider"
import ContactUI from "../components/HomeUI/ContactUI"

const About = () => {
  return (
    <>
      <AboutHeroSlider />
      <ClientsAndAbout />
      <AboutDiscover />
      <Immigration />
      <BestVisaConsultant />
      <TeamSlider />
      <AboutOpportunities />
      <ContactUI />
    </>
  )
}
export default About