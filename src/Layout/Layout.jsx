import React from 'react'
import Footer from "../components/Footer/Footer"
import Header from "../components/Header/Header"
import Router from "../router/Router"

const Layout = () => {
  return (
    <>
      <div>
        <Header />
        <div>
          <Router />
        </div>
        <Footer />
      </div>
    </>
  )
}
export default Layout