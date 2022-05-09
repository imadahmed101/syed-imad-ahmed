import * as React from 'react'
import { Link } from 'gatsby'
import { resumeNav } from './Header.module.css'
import { StaticImage } from 'gatsby-plugin-image'
import { Container, Navbar, Nav } from 'react-bootstrap'
import resume from '../public/resume.pdf'

const Header = () => {
    return (

        <Container fluid>

            <Navbar expand="md" variant="light">
                <Navbar.Brand href="/">Syed Imad Ahmed</Navbar.Brand>
                <Navbar.Toggle aria-controls="navbarResponsive" />
                <Navbar.Collapse id="navbarResponsive">
                    <Nav as="ul" className="ms-auto">
                        <Nav.Item as="li">
                            <Link to="/" className="nav-link" activeClassName="active">Home</Link>
                        </Nav.Item>
                        <Nav.Item as="li">
                            <Link to="/#about" className="nav-link" activeClassName="active">About</Link>
                        </Nav.Item>
                        <Nav.Item as="li">
                            <Link to="/#projects" className="nav-link" activeClassName="active">Projects</Link>
                        </Nav.Item>
                        <Nav.Item as="li">
                            <Link to="/#contact" className="nav-link" activeClassName="active">Contact</Link>
                        </Nav.Item>
                        <Nav.Item as="li">
                            <Link className="nav-link" activeClassName="active"><a href={resume} target="_blank" className={resumeNav}>Resume</a></Link>
                        </Nav.Item>
                    </Nav>
                </Navbar.Collapse>

            </Navbar>

        </Container>

    )
}

export default Header