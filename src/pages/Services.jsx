import ContactUI from "../components/HomeUI/ContactUI"
import ConsultingServices from "../components/ServicesUI/ConsultingServices"
import ExpertRecuritment from "../components/ServicesUI/ExpertRecuritment"
import Faqs from "../components/ServicesUI/Faqs"
import Innovative from "../components/ServicesUI/Innovative"
import ManPowerSloution from "../components/ServicesUI/ManPowerSloution"
import TalentAcquisition from "../components/ServicesUI/TalentAcquisition"
import Training from "../components/ServicesUI/Training"

const Services = () => {
  return (
    <>
      <ManPowerSloution />
      <Training />
      <ExpertRecuritment />
      <ConsultingServices />
      <TalentAcquisition />
      <Innovative />
      <Faqs />
      <ContactUI />
    </>
  )
}
export default Services