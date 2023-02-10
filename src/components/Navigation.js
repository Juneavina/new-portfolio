import './Navigation.css'
import navIcon1 from '../assets/images/github.svg';
import navIcon2 from '../assets/images/linkedin.svg';
import React from "react";
import { Navbar, Nav } from "react-bootstrap";
import classNames from "classnames";
import UseSticky from "./UseSticky";




function Navigation() {
    const { sticky, stickyRef } = UseSticky();



  return (
    <Navbar
    ref={stickyRef} 
    className={classNames({ sticky: sticky })}
      variant="dark"
      expand={true}>
      <Navbar.Collapse id="basic-navbar-nav">
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
