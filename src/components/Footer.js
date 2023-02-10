import React from 'react';
import './Footer.css';
import navIcon1 from '../assets/images/github.svg';
import navIcon2 from '../assets/images/linkedin.svg';
import mail from '../assets/images/mail.png';
import { Navbar, Nav } from "react-bootstrap";

const Footer = () => {
  


return (
<footer id="footer">
  <div className='footer-container'>
<Nav.Link className="nav-link-custom" href="https://github.com/Juneavina">

            <img src={navIcon1} alt="GitHub" style={{ width: '20px', height: '20px' }} />
          </Nav.Link>
          <Nav.Link href="http://linkedin.com/in/june-avina">
          <img src={navIcon2} alt="LinkedIn" style={{ width: '20px', height: '20px' }} />
          </Nav.Link>
          </div>
  <p class="text-center-footer">
    June Avina ©2023 
  </p>
</footer>
);
}
export default Footer;
