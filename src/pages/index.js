import * as React from 'react'
import Layout from '../components/layout'
import Hero from './hero'
import Projects from './projects'
import About from './about'
import Contact from './contact'
import '../styles/global.css'
import 'bootstrap/dist/css/bootstrap.min.css'

const IndexPage = () => {
  return (
    <>
      <Layout>
        <Hero />
        <About />
        <Projects />
        <Contact />
      </Layout>
    </>
  )
}

export default IndexPage
