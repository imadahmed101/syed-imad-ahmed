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
      <StaticImage src='../images/willismonroe.png' alt='banner' className={ modalImage } style={{ marginBottom: "10px" }} onClick={handleShow} />

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title style={{ color: "#000" }}>WillisMonroeInsurance.com</Modal.Title>
        </Modal.Header>
        <Modal.Body style={{ color: "#000" }}>Utilizing HTML, CSS and PHP, created a company website for an insurance company.
          HTML and CSS to create a one page design with parralax scrolling. PHP for the contact form handling.</Modal.Body>
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