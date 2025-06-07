import React, { Component } from 'react'
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Offcanvas from 'react-bootstrap/Offcanvas';
import {
    Link
} from "react-router-dom";
import logo from '../components/brand logo.jpg'
import './Home.css';

export default class NavbarComp extends Component {
    render() {
        return (
        
            <div>       
      {['sm'].map((expand) => (
    
        <Navbar key={expand} bg="dark" variant='dark' expand={expand} className="mb-0 pt-0  ">
          
          <Container fluid>
            <Navbar.Brand href="/About"> 
            <img src={logo} alt='Edmoss logo' height='70' width='70' className='d-line-block align-top rounded-pill'/>
            </Navbar.Brand>
            <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-${expand}`} />
            <Navbar.Offcanvas
              id={`offcanvasNavbar-expand-${expand}`}
              aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
              placement="end"
            >
              <Offcanvas.Header closeButton>
                <Offcanvas.Title id={`offcanvasNavbarLabel-expand-${expand}`}>
                  Menu
                </Offcanvas.Title>
              </Offcanvas.Header>
              <Offcanvas.Body>
                <Nav className="justify-content-end  flex-grow-1 pe-3 text-dark">
                  <Nav.Link  as={Link} to={"/home"}>Home</Nav.Link>
                  <NavDropdown
                    title="About"
                    id={`offcanvasNavbarDropdown-expand-${expand}`}
                  >
                    <NavDropdown.Item as={Link} to={"/about"}>About</NavDropdown.Item>
                    <NavDropdown.Item   as={Link} to={"/contact"}>
                      Contact
                    </NavDropdown.Item>
                  </NavDropdown>
                  <Nav.Link  as={Link} to={"/contact"}>Become a Tutor</Nav.Link>
                  <NavDropdown
                    title="Sign-Up"
                    id={`offcanvasNavbarDropdown-expand-${expand}`}
                  >
                    <NavDropdown.Item  href="#action3">Sign-Up</NavDropdown.Item>
                    <NavDropdown.Item  href="#action4">
                      Login
                    </NavDropdown.Item>
                  </NavDropdown>
                </Nav>
                <Form className="d-flex">
                  <Form.Control
                    type="search"
                    placeholder="Search"
                    className="me-2"
                    aria-label="Search"
                  />
                  <Button variant="outline-success">Search</Button>
                </Form>
              </Offcanvas.Body>
            </Navbar.Offcanvas>
          </Container>
        </Navbar>
      ))}
            </div>
        )
    }
}