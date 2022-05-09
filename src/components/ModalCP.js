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
      <StaticImage src='../images/cashphone.png' alt='banner' className={ modalImage } style={{ marginBottom: "10px" }} onClick={handleShow} />

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title style={{ color: "#000" }}>CashPhone.ca</Modal.Title>
        </Modal.Header>
        <Modal.Body style={{ color: "#000" }}>Utilizing React, commerce.js, and stripe, created an online ecommerce for cell phone accessories.
          React for the framework (library). Commerce.js as the cms. Stripe for the payment gateway</Modal.Body>
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