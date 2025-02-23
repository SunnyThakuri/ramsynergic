import ContactUI from "../components/HomeUI/ContactUI"
import ConsultingServices from "../components/ServicesUI/ConsultingServices"
import ExpertRecuritment from "../components/ServicesUI/ExpertRecuritment"
import FaqCustom from "../components/ServicesUI/FaqCustom"
import Faqs from "../components/ServicesUI/Faqs"
import Innovative from "../components/ServicesUI/Innovative"
import ManPowerSloution from "../components/ServicesUI/ManPowerSloution"
import ServiceHeader from "../components/ServicesUI/ServiceHeader"
import TalentAcquisition from "../components/ServicesUI/TalentAcquisition"
import Training from "../components/ServicesUI/Training"

const Services = () => {
  return (
    <>
      <ServiceHeader/>
      <ExpertRecuritment />
      <Training /> 
      <ManPowerSloution />
      
      
      <ConsultingServices />
      <TalentAcquisition />
     {/*  <Innovative /> */}
      <Faqs />
      <FaqCustom/>
      <ContactUI />
    </>
  )
}
export default Services