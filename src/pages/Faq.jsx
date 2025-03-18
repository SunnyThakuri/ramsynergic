
import FaqCustom from '../components/ServicesUI/FaqCustom'
import Faqs from '../components/ServicesUI/Faqs'
import FaqVideo from '../components/faq/FaqVideo'

function Faq() {
  return (
    <div
    className='space-y-20'
    >
      <Faqs/>
    
      <FaqVideo/>
      <FaqCustom/>
    </div>
  )
}

export default Faq
