import React, { useState } from 'react'
import { Button, Modal } from 'react-bootstrap'
import { StaticImage } from "gatsby-plugin-image"
import { modalImage } from './Modal.module.css'

function Example() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <div>
      <StaticImage src='../images/portfolyou.png' alt='banner' className={ modalImage } style={{ marginBottom: "10px" }} onClick={handleShow} />

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title style={{ color: "#000" }}>Portfoliyou</Modal.Title>
        </Modal.Header>
        <Modal.Body style={{ color: "#000" }}>Full Stack application utilizing React for the front end and FireBase for the back end. 
        Utilizing Google Authentication for signing in and FireBase Storage for back end and MUI for Styling. 
        Front end fully responsive, Backend dashboard to input customizable information tailored to each any user.</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}

export default Example