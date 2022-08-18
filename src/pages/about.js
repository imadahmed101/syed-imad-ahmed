import * as React from 'react'
import { Link } from 'gatsby'
import { StaticImage } from "gatsby-plugin-image"
import { Button, Container } from 'react-bootstrap'
import { aboutPage, aboutPageName, aboutPageStack, aboutPageTech, aboutPageTechHeader, resumeButton } from '../styles/about.module.css'
import resume from '../public/resume.pdf'

function about() {
  return (
    <div id='about' className={aboutPage}>
      <h1>Hello!</h1>
      <h2>My name is<br /><div className={aboutPageName}>Syed Imad Ahmed</div></h2>
      <Container fluid="md">
        <p>
          I am a Web Developer with a diploma in computer programming.
          I build applications with responsiveness and user experience in mind.
          Utilizing front end frameworks and libraries to create user friendly interfaces.
          Harnessing back end technologies to produce clean code implementations.</p>
        </Container>

      <div className={aboutPageStack}>

        <h3>Technology Stack I Use:</h3>
        <StaticImage src='../images/react.png' className={aboutPageTech} />
        <StaticImage src='../images/node.png' className={aboutPageTech} />
        <StaticImage src='../images/express.png' className={aboutPageTech} />
        <StaticImage src='../images/mongodb.png' className={aboutPageTech} />

      </div>

      <h3>Other Technologies I Use:</h3>
      <p><div className={aboutPageTechHeader}>Front End</div> React - Gatsby<br />
      <div className={aboutPageTechHeader}>Back End</div> Node - Express<br />
      <div className={aboutPageTechHeader}>Database</div> MongoDB - SQL - Oracle<br />
      <div className={aboutPageTechHeader}>Languages</div> JavaScript - C++ - Java<br />
      <div className={aboutPageTechHeader}>Styling</div> MUI - Bootstrap<br />
      <div className={aboutPageTechHeader}>DevOps/Hosting</div> AWS - cPanel</p>

      <h3 style={{ marginTop: "10px" }}>Want to work together?</h3>
      <Link to='/#contact'><Button variant="outline-light" style={{ marginRight: "10px" }}>Contact Me</Button></Link>
      <Link> <Button variant="outline-light" href={resume} target="_blank" className={resumeButton}>View Resume</Button></Link>

    </div>
  )
}

export default about