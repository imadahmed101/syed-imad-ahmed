import * as React from 'react'
import { Link } from 'gatsby'
import { StaticImage } from "gatsby-plugin-image"
import { Button } from 'react-bootstrap'
import { aboutPage, aboutPageName, aboutPageStack, aboutPageTech, resumeButton } from '../styles/about.module.css'
import resume from '../public/resume.pdf'

function about() {
  return (
    <div id='about' className={aboutPage}>
      <h1>Hello!</h1>
      <h2>My name is<br /><div className={aboutPageName}>Syed Imad Ahmed</div></h2>
      <p>I am a Web Developer with a diploma in computer programming.<br />
        I build applications with responsiveness and user experience in mind.<br />
        Utilizing front end frameworks to build user friendly interfaces.<br />
        Harnessing back end technologies for clean code implementations.</p>

      <div className={aboutPageStack}>

        <h3>Technology Stack I Use:</h3>
        <StaticImage src='../images/react.png' className={aboutPageTech} />
        <StaticImage src='../images/node.png' className={aboutPageTech} />
        <StaticImage src='../images/express.png' className={aboutPageTech} />
        <StaticImage src='../images/mongodb.png' className={aboutPageTech} />

      </div>

      <h3>Other Technologies I Use:</h3>
      <p>Front End: React - Gatsby - HTML5 - CSS3 - Javascript<br />
        Back End: Node - Express<br />
        Data Base: MongoDB<br />
        Styling: Bootstrap - Material UI(MUI)<br />
        Hosting: cPanel - AWS</p>

      <h3 style={{ marginTop: "10px" }}>Want to work together?</h3>
      <Link to='/#contact'><Button variant="outline-light" style={{ marginRight: "10px" }}>Contact Me</Button></Link>
      <Link> <Button variant="outline-light"><a href={resume} target="_blank" className={resumeButton}>View Resume</a></Button></Link>
    </div>
  )
}

export default about