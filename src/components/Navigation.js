import './Navigation.css'
import navIcon1 from '../assets/images/github.svg';
import navIcon2 from '../assets/images/linkedin.svg';
import React from "react";
import { Navbar, Nav } from "react-bootstrap";
import 'bootstrap/dist/js/bootstrap.bundle.min.js';



function Navigation() {

  return (
    <Navbar
    className='navbar'  
    variant="dark"
      expand="md">
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav" className="center-navbar">
        <Nav className="mr-auto">
          <Nav.Link className="nav-link-custom" href="#about">About</Nav.Link>
          <Nav.Link className="nav-link-custom" href="#skills">Skills</Nav.Link>
          <Nav.Link className="nav-link-custom" href="#projects">Projects</Nav.Link>
          <Nav.Link className="nav-link-custom" href="https://github.com/Juneavina">

            <img src={navIcon1} alt="GitHub" style={{ width: '20px', height: '20px' }} />
          </Nav.Link>
          <Nav.Link href="http://linkedin.com/in/june-avina">
          <img src={navIcon2} alt="LinkedIn" style={{ width: '20px', height: '20px' }} />
          </Nav.Link>
        </Nav>

      </Navbar.Collapse>
    </Navbar>
  );
}

export default Navigation;
