import * as React from 'react'
import { Link } from 'gatsby'
import { Button } from 'react-bootstrap'
import { projectsPage, projectsPageList, highlightTitle } from '../styles/projects.module.css'
import ModalID from '../components/ModalID'
import ModalWMI from '../components/ModalWMI'
import Spiceez from './spiceez'
import { StaticImage } from "gatsby-plugin-image"
import react from '../images/react.svg'
import firebase from '../images/firebase.svg'
import mui from '../images/mui.svg'
import '../styles/global.css'



function projects({fontStyle, buttonStyle}) {
  return (
    <div className={projectsPage}>

      <h1 id='projects' className={fontStyle} style={{ marginTop: "80px" }} >Projects</h1>

      <div className={projectsPageList}>
        <div>
          {/* <ModalID /> */}
        <Link to='http://spiceez.syedimadahmed.com' target="_blank">

        <StaticImage src='../images/spiceez.png' alt='banner' style={{ marginBottom: "10px" }} />
        </Link>

          {/* <h3>E-Commerce Platform</h3>
          <p>Spiceez</p> */}
        </div>
        <div>
          <h3>E-commerce Platform</h3>
          <p className={fontStyle}>Spiceez</p>
          <img src={react} style={{height: "35px", width: "35px"}}/>
          <img src={firebase} style={{height: "35px", width: "35px"}}/>
          <img src={mui} style={{height: "35px", width: "35px"}}/>
          
          {/* <p className={highlightTitle}>React - Firebase - MUI</p> */}
          <p style={{marginTop: "10px"}}>Full Stack application utilizing React for the front end and Firebase for the back end.
            Utilizing Firebase's storage and database's to hold dynamically generated items. Dashboard with full CRUD (create, read, update, delete) capabilities to change items.
            Custom responsive design built using MUI (styling library built by google).</p>
          <Link to='http://spiceez.syedimadahmed.com' target="_blank"><Button variant={buttonStyle} style={{ marginRight: "10px" }}>Live Site</Button></Link>
          <Link to="https://github.com/imadahmed101/spiceez-firebase" target="_blank"><Button variant="outline-light">Github</Button></Link>
        </div>
        {/* <div>
          <h3>Company Site</h3>
          <p>WillisMonroeInsurance.com</p>
          <ModalWMI />
          <Link to="http://willismonroeinsurance.com" target="_blank"><Button variant="outline-light" style={{ marginRight: "10px" }}>Live Site</Button></Link>
          <Link to="https://github.com/imadahmed101/willis-monroe-insurance" target="_blank"><Button variant="outline-light">Github</Button></Link>
        </div> */}
      </div>
    </div>
  )
}

export default projects