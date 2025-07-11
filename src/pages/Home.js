import React, { useEffect } from 'react'
import Hero from '../components/Hero copy'
import Services from '../components/Services'
// import About from '../components/About'
import Projects from '../components/Projects'
import Contact from '../components/Contact'
import Pricing from '../components/Pricing'
import Navbar from '../components/Navbar'
import Faq from '../components/Faq'
import ReactGA from 'react-ga4'

const Home = () => {

  useEffect(() => {
    ReactGA._gaCommandSendPageview(window.location.pathname)
  }, []);

  return (
    <div>
      <Navbar/>
      <Hero/>
      <Services/>
      <Projects/>
      <Pricing/>
      {/* <About/> */}
      <Faq/>
      <Contact/>
    </div>
  )
}

export default Home