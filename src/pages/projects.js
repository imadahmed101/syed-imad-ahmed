import * as React from 'react'
import { Link } from 'gatsby'
import { Button } from 'react-bootstrap'
import { projectsPage, projectsPageList } from '../styles/projects.module.css'
import ModalID from '../components/ModalID'
import ModalCP from '../components/ModalCP'
import ModalWMI from '../components/ModalWMI'
import ModalSIA from '../components/ModalSIA'

function projects() {
  return (
    <div className={projectsPage}>

      <h1 id='projects'>Projects</h1>

      <div className={projectsPageList}>
      <div>
          <h3>Inventory Manager</h3>
          <p>Spiceez</p>
          <ModalID />
          <Link to='http://54.235.13.47:3000' target="_blank"><Button variant="dark" style={{ marginRight: "10px" }}>Live Site</Button></Link>
          <Link to="https://github.com/imadahmed101/inventory-dashboard" target="_blank"><Button variant="outline-dark">Github</Button></Link>
        </div>
        <div>
          <h3>E-commerce</h3>
          <p>Cash Phone</p>
          <ModalCP />
          <Link to="http://cash-phone.s3-website-us-east-1.amazonaws.com/" target="_blank"><Button variant="dark" style={{ marginRight: "10px" }}>Live Site</Button></Link>
          <Link to="https://github.com/imadahmed101/cash-phone" target="_blank"><Button variant="outline-dark">Github</Button></Link>
        </div>
        <div>
          <h3>Company Site</h3>
          <p>WillisMonroeInsurance.com</p>
          <ModalWMI />
          <Link to="http://willismonroeinsurance.com" target="_blank"><Button variant="dark" style={{ marginRight: "10px" }}>Live Site</Button></Link>
          <Link to="https://github.com/imadahmed101/willis-monroe-insurance" target="_blank"><Button variant="outline-dark">Github</Button></Link>
        </div>
        <div>
          <h3>Portfolio</h3>
          <p>SyedImadAhmed.com</p>
          <ModalSIA />
          <Link to="https://syedimadahmed.com" target="_blank"><Button variant="dark" style={{ marginRight: "10px" }}>Live Site</Button></Link>
          <Link to="https://github.com/imadahmed101/syed-imad-ahmed" target="_blank"><Button variant="outline-dark">Github</Button></Link>
        </div>
      </div>
    </div>
  )
}

export default projects