
import Footer from "../components/Footer/Footer"
import Header from "../components/Header/Header"
import Router from "../router/Router"

const Layout = () => {
  return (
    <>
      <div
      className='font-Poppins'
      >
         <Header /> 
        <div
        className='mt-14 md:mt-[75px]'
        >
          <Router />
        </div>
        <Footer />
      </div>
    </>
  )
}
export default Layout