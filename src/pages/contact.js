import * as React from 'react'
import { Container, Form, Row, Col, Button } from 'react-bootstrap'
import { contactPage, contactPageImage } from '../styles/contact.module.css'
import { StaticImage } from 'gatsby-plugin-image'

function contact() {
  return (
    <div id='contact' className={contactPage}>
      <div>

      <h1>Contact Me</h1>
      <p>Want to work together?<br />Send me a message.</p>

      <Container >
        <Form method="post" action="https://getform.io/f/21550753-3eb6-41ff-9bab-54da996eece6">
          <Row>
            <Col md={9}>
              <Form.Group controlId="formBasicName">
                <Form.Label>Name </Form.Label>
                <br />
                <Form.Control style={{ color: "#000"}} type="text" name="name" id="name" />

              </Form.Group>
          <Form.Group controlId="formBasicEmail">
            <Form.Label>Email </Form.Label>
            <br />
            <Form.Control style={{ color: "#000" }} type="text" name="email" id="email" />

          </Form.Group>
          <Form.Group controlId="formBasicMessage">
            <Form.Label>Message </Form.Label>
            <br />
            <Form.Control style={{ color: "#000" }} as="textarea" name="message" id="message" rows="3" placeholder="any problem need solving?" />

          </Form.Group>
          <Button type="submit" variant="outline-light" style={{ marginTop: "10px" }}>Submit This Email</Button>
            </Col>
          </Row>
        </Form>
      </Container>
    </div>


      <div className={ contactPageImage }>
        <StaticImage src='../images/mailbox.png' style={{maxHeight: '250px', maxWidth: '250px'}}/>
      </div>
      </div>
  )

}

export default contact