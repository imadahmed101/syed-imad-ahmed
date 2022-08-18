import * as React from 'react'
import { Link } from 'gatsby'
import { Button } from 'react-bootstrap'
import { projectsPage, projectsPageList } from '../styles/projects.module.css'
import ModalID from '../components/ModalID'
import ModalWMI from '../components/ModalWMI'

function projects() {
  return (
    <div className={projectsPage}>

      <h1 id='projects'>Projects</h1>

      <div className={projectsPageList}>
      <div>
          <h3>E-Commerce Platform</h3>
          <p>Spiceez</p>
          <ModalID />
          <Link to='https://spiceez.syedimadahmed.com' target="_blank"><Button variant="outline-light" style={{ marginRight: "10px" }}>Live Site</Button></Link>
          <Link to="https://github.com/imadahmed101/inventory-dashboard" target="_blank"><Button variant="outline-light">Github</Button></Link>
        </div>
        <div>
          <h3>Company Site</h3>
          <p>WillisMonroeInsurance.com</p>
          <ModalWMI />
          <Link to="http://willismonroeinsurance.com" target="_blank"><Button variant="outline-light" style={{ marginRight: "10px" }}>Live Site</Button></Link>
          <Link to="https://github.com/imadahmed101/willis-monroe-insurance" target="_blank"><Button variant="outline-light">Github</Button></Link>
        </div>
      </div>
    </div>
  )
}

export default projects