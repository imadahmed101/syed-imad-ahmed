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
      <StaticImage src='../images/portfolio.png' alt='banner' className={ modalImage } style={{ marginBottom: "10px" }} onClick={handleShow} />

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title style={{ color: "#000" }}>SyedImadAhmed.com</Modal.Title>
        </Modal.Header>
        <Modal.Body style={{ color: "#000" }}>Utilizing Gatsby.js, React.js, and Bootstrap, created an online portfolio.
          Gatsby (on top of React) to build the application and Bootstrap for styling.</Modal.Body>
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