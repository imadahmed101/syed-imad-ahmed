import React from 'react'
import Hero from '../components/Hero'
import Services from '../components/Services'
import About from '../components/About'
import Projects from '../components/Projects'
import Contact from '../components/Contact'
import Pricing from '../components/Pricing'
import Navbar from '../components/Navbar copy 5'
import Faq from '../components/Faq'

const Home = () => {
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