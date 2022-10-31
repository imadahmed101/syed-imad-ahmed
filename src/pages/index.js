import * as React from 'react'
import Layout from '../components/layout'
import Hero from './hero'
import Projects from './projects'
import About from './about'
import Contact from './contact'
import '../styles/global.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import { useState } from 'react'

const IndexPage = () => {
  const [fontStyle, setFontStyle] = useState('blue')
  const [buttonStyle, setButtonStyle] = useState('info')

  const handleClick = () => {
    if (fontStyle === 'blue') {
      setFontStyle('red')
      setButtonStyle('danger')
    }
    if (fontStyle === 'red') {
      setFontStyle('yellow')
      setButtonStyle('warning')
    }
    else if (fontStyle === 'yellow') {
      setFontStyle('blue')
      setButtonStyle('info')
    }

  }

  return (
    <>
      <Layout>
        <Hero fontStyle={fontStyle} onClick={handleClick} buttonStyle={buttonStyle} />
        <About fontStyle={fontStyle} buttonStyle={buttonStyle} />
        <Projects fontStyle={fontStyle} buttonStyle={buttonStyle} />
        <Contact fontStyle={fontStyle} buttonStyle={buttonStyle} />
      </Layout>
    </>
  )
}

export default IndexPage
