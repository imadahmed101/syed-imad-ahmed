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
        I build applications with responsiveness and user experience in mind.</p>

<div className={aboutPageStack}>

      <h3>Technologies I Use:</h3>
      <StaticImage src='../images/html.png' className={aboutPageTech} />
      <StaticImage src='../images/css.png' className={aboutPageTech} />
      <StaticImage src='../images/js.png' className={aboutPageTech} />
      <StaticImage src='../images/react.png' className={aboutPageTech} />
      <StaticImage src='../images/node.png' className={aboutPageTech} />
      <StaticImage src='../images/gatsby.png' className={aboutPageTech} />
      <StaticImage src='../images/bootstrap.png' className={aboutPageTech} />
</div>


      <Link to='/#projects'><Button variant="outline-dark">Check Out My Projects</Button></Link>
      
      <h3 style={{marginTop: "10px"}}>Want to work together?</h3>
      <Link to='/#contact'><Button variant="outline-dark" style={{marginRight: "10px"}}>Contact Me</Button></Link>
      <Link> <Button variant="outline-dark"><a href={ resume } target="_blank" className={ resumeButton } style={{textDecoration: "none"}}>View Resume</a></Button></Link>
    </div>
  )
}

export default about