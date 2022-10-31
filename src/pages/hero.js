import * as React from 'react'
import { Link } from 'gatsby'
import { StaticImage } from "gatsby-plugin-image"
import { Button } from 'react-bootstrap'
import { heroPage, heroPageLeft, heroImage, heroPageHighlight } from '../styles/hero.module.css'
import linkedin from '../images/linked-in.svg'
import github from '../images/github.svg'
import '../styles/global.css'



function hero({fontStyle, onClick, buttonStyle}) {

  return (
    <div id='hero' className={heroPage}>
      <div>
        <div className={heroPageLeft}>
          <h1>Hello<br />I'm<br /><span className={fontStyle}>Imad</span><hr/></h1>
          <p>I build user friendly applications with custom responsive designs.</p>
        </div>
      </div>
      <div style={{ textAlign: "center" }}>
      <Link to='/#projects'><Button variant={buttonStyle} size="lg">View Projects</Button></Link>
      <Button variant="outline-light" size="lg" onClick={onClick}>Change Colour</Button>
      {/* <Link to='/#projects'>
        <img src={linkedin} height="50px"/>
      </Link>
      <Link to='/#projects'>
        <img src={github} height="50px"/>
      </Link> */}
        {/* <StaticImage src='../images/five.jpg' alt='Hero Image' className={heroImage} /> */}
      </div>
    </div>
  )
}

export default hero