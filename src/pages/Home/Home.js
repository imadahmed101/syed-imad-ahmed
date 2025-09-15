import React, { useEffect } from 'react'
import Hero from './Hero'
import Services from './Services'
import Projects from './Projects'
import Pricing from './Pricing'
import Faq from './Faq'
import ReactGA from 'react-ga4'

const Home = () => {

  useEffect(() => {
    ReactGA._gaCommandSendPageview(window.location.pathname)
  }, []);

  return (
    <div>
      <Hero/>
      <Services/>
      <Projects/>
      <Pricing/>
      <Faq/>
    </div>
  )
}

export default Home