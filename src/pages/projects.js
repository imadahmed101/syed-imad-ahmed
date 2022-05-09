import * as React from 'react'
import { Link } from 'gatsby'
import { StaticImage } from "gatsby-plugin-image"
import { Button } from 'react-bootstrap'
import { projectsPage, projectsPageList, aboutPageStack, aboutPageTech } from '../styles/projects.module.css'
import ModalCP from '../components/ModalCP'
import ModalWMI from '../components/ModalWMI'
import ModalSIA from '../components/ModalSIA'

function projects() {
  return (
    <div className={projectsPage}>

      <h1 id='projects'>Projects</h1>

      <div className={projectsPageList}>
        <div>
          <h3>E-commerce</h3>
          <p>CashPhone.ca</p>
          <ModalCP />
          <Link to="https://cashphone.ca" target="_blank"><Button variant="outline-dark" style={{ marginRight: "10px" }}>Live Site</Button></Link>
          <Link to="https://github.com/imadahmed101/cash-phone" target="_blank"><Button variant="outline-dark">Github</Button></Link>
        </div>
        <div>
          <h3>Company Site</h3>
          <p>WillisMonroeInsurance.com</p>
          <ModalWMI />
          <Link to="http://willismonroeinsurance.com" target="_blank"><Button variant="outline-dark" style={{ marginRight: "10px" }}>Live Site</Button></Link>
          <Link to="https://github.com/imadahmed101/willis-monroe-insurance" target="_blank"><Button variant="outline-dark">Github</Button></Link>
        </div>
        <div>
          <h3>Portfolio</h3>
          <p>SyedImadAhmed.com</p>
          <ModalSIA />
          <Link to="https://syedimadahmed.com" target="_blank"><Button variant="outline-dark" style={{ marginRight: "10px" }}>Live Site</Button></Link>
          <Link to="https://github.com/imadahmed101/syed-imad-ahmed" target="_blank"><Button variant="outline-dark">Github</Button></Link>
        </div>
      </div>

      <p style={{ textAlign: 'center' }}>Like what you see? <Link to='/#contact' style={{ color: '#e1742b' }}>Contact me</Link> to discuss your next solution!</p>
    </div>
  )
}

export default projects