import * as React from 'react'
import { Link } from 'gatsby'
import { StaticImage } from "gatsby-plugin-image"
import { Button, Container } from 'react-bootstrap'
import { aboutPage, aboutPageName, aboutPageStack, aboutPageTech, aboutPageTechHeader, highlightTitle, resumeButton, skillsSection } from '../styles/about.module.css'
import resume from '../public/resume.pdf'
import react from '../images/react.svg'
import firebase from '../images/firebase.svg'
import mui from '../images/mui.svg'
import express from '../images/express.svg'
import node from '../images/node-js.svg'
import js from '../images/js.svg'
import '../styles/global.css'

function about({fontStyle, buttonStyle}) {
  return (
    <div id='about' className={aboutPage}>
      <h1 className={fontStyle}>About Me</h1>
      {/* <h2>My name is<br /><div className={aboutPageName}>Syed Imad Ahmed</div></h2> */}


      <Container fluid="md">
        <p>
          I am a Web Developer with a diploma in computer programming.
          I build applications with responsiveness and user experience in mind.
          Utilizing front end frameworks and libraries to create user friendly interfaces.
          Harnessing back end technologies to produce clean code implementations.</p>
      </Container>
      <div className={aboutPageStack}>

        {/* <h3>Technology Stack I Use:</h3> */}
        <img src={js} className={aboutPageTech} />
        <img src={react} className={aboutPageTech} />
        <img src={node} className={aboutPageTech} />
        <img src={firebase} className={aboutPageTech} />
        <img src={mui} className={aboutPageTech} />

      </div>

      {/* <h3>Other Technologies I Use:</h3> */}

      <div className={skillsSection}>
        <div>
          <p><div className={fontStyle}>Front End</div>React<br />Gatsby<br /></p>
          <p><div className={fontStyle}>Back End</div>Node<br />Express<br />FireBase<br /></p>
        </div>
        <div>
          <p><div className={fontStyle}>Database</div>MongoDB<br />Firestore<br /></p>
          <p><div className={fontStyle}>Languages</div>JavaScript<br /></p>
        </div>
        <div>
          <p><div className={fontStyle}>Styling</div>MUI<br />Bootstrap<br /></p>
          <p><div className={fontStyle}>Other</div>AWS<br />GitHub<br />cPanel</p>
        </div>
      </div>
      {/* <h3 style={{ marginTop: "10px" }}>Want to work together?</h3> */}
      {/* <Link to='/#contact'><Button variant="outline-light" style={{ marginRight: "10px" }}>Contact Me</Button></Link> */}
      <Link> <Button variant={buttonStyle} href={resume} target="_blank" className={resumeButton}>View Resume</Button></Link>

    </div>
  )
}

export default about