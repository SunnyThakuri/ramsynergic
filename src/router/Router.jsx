import { Navigate, Route, Routes } from "react-router-dom"
import Home from "../pages/Home"
import About from "../pages/About"
import Contact from "../pages/Contact"
import Services from "../pages/Services"
import Blog from "../pages/Blog"
import TermsAndCondition from "../pages/TermsAndCondition"
import PrivacyPolicy from "../pages/PrivacyPolicy"
import Hungary from "../components/Countries/Hungary/Hungary"
import Australia from "../components/Countries/Australia/Australia"
import Hongkong from "../components/Countries/Hongkong/Hongkong"
import Spain from "../components/Countries/Spain/Spain"
import Canada from "../components/Countries/Canada/Canada"
import BlogIndividual from "../components/BlogIndividual/BlogIndividual"
import ScrollToTop from "./ScrollToTop"
import Country from "../components/Countries/Country"
import Faq from "../pages/Faq"

const Router = () => {
  return (
    <>
    <ScrollToTop>
      <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/Home" element={<Home />} />
          <Route path="/faq" element={<Faq />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/hungary" element={<Hungary />} />
          <Route path="/country/:name" element={<Country/>}/>
          <Route path="/australia" element={<Australia />} />
          <Route path="/hongkong" element={<Hongkong />} />
          <Route path="/spain" element={<Spain />} />
          <Route path="/canada" element={<Canada />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/blogdetail/:id" element={<BlogIndividual />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/termsAndCondition" element={<TermsAndCondition />} />
          <Route path="/privacyPolicy" element={<PrivacyPolicy />} />
        </Routes >
    </ScrollToTop>
    
   
      
    </>
  )
}
export default Router