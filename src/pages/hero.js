import * as React from 'react'
import { Link } from 'gatsby'
import { StaticImage } from "gatsby-plugin-image"
import { Button } from 'react-bootstrap'
import { heroPage, heroPageLeft, heroImage } from '../styles/hero.module.css'

function hero() {
  return (
    <div id='hero' className={heroPage}>
      <div>
        <div className={heroPageLeft}>
          <h1>Full Stack<br />Web Developer</h1>
          <p>Utilizing front and back end technologies to build user friendly applications with custom responsive designs.</p>
          <Link to='/#projects'><Button variant="outline-light" size="lg">Check Out My Projects</Button></Link>
        </div>
      </div>
      <div style={{ textAlign: "center" }}>
        <StaticImage src='../images/hero.png' alt='Hero Image' className={heroImage} />
      </div>
    </div>
  )
}

export default hero