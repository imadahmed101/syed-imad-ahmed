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
      <StaticImage src='../images/spiceez.png' alt='banner' className={ modalImage } style={{ marginBottom: "10px" }} onClick={handleShow} />

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title style={{ color: "#000" }}>Spiceez</Modal.Title>
        </Modal.Header>
        <Modal.Body style={{ color: "#000" }}>Full Stack application utilizing React for the front end and Node, Express and MongoDB for the back end. 
        Utilizing Axios for API calls, Json Web Tokens (JWT) for Authentication, and MUI for Styling. 
        Front end hosted on shared hosting using cPanel, back end hosted on AWS using an EC2.</Modal.Body>
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