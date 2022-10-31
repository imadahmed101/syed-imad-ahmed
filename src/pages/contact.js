import * as React from 'react'
import { Container, Form, Row, Col, Button } from 'react-bootstrap'
import { contactPage, contactPageImage, pageTitle } from '../styles/contact.module.css'
import { StaticImage } from 'gatsby-plugin-image'
import { Link } from 'gatsby'
import linkedin from '../images/linked-in.svg'
import github from '../images/github.svg'
import '../styles/global.css'


function contact({fontStyle, buttonStyle}) {
  return (
    <div id='contact' className={contactPage}>
      <div>

      <h1 className={fontStyle}>Contact Me</h1>
      <p>Want to connect with me?<br />Check my links.</p>

    </div>


      <div className={ contactPageImage }>
      <Container >
      <Link to='/#projects'><Button variant={buttonStyle} size="lg">Resume</Button></Link>
      <Link to='/#projects'><Button variant="outline-light" size="lg">GitHub</Button></Link>
      <Link to='/#projects'><Button variant="outline-light" size="lg">LinkedIn</Button></Link>
            {/* <Link to='/#projects'>
        <img src={linkedin} height="50px"/>
      </Link>
      <Link to='/#projects'>
        <img src={github} height="50px"/>
      </Link> */}
      </Container>
        {/* <StaticImage src='../images/mailbox.png' style={{maxHeight: '250px', maxWidth: '250px'}}/> */}
      </div>
      </div>
  )

}

export default contact