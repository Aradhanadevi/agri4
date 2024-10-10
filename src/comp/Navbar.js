import React, { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';
import { Container, Nav, Navbar, NavDropdown } from 'react-bootstrap';
import logo from './Bgimg/logo.png';
import '../comp/Css/Navbar.css';

export const CustomNavbar = () => {
  const [isNavbarCollapsed, setIsNavbarCollapsed] = useState(true);
  const username = localStorage.getItem('name');

  // Function to toggle the navbar's collapsed state
  const handleNavbarToggle = () => {
    setIsNavbarCollapsed((prevState) => !prevState);
  };

  // Function to close navbar when clicking outside
  const handleClickOutside = (event) => {
    if (!event.target.closest('.navbar')) {
      setIsNavbarCollapsed(true);
    }
  };

  // Initialize Google Translate widget
  const initializeGoogleTranslate = () => {
    if (window.google && window.google.translate) {
      new window.google.translate.TranslateElement(
        { pageLanguage: 'en' },
        'google_translate_element'
      );
    }
  };

  useEffect(() => {
    document.addEventListener('click', handleClickOutside);
    return () => {
      document.removeEventListener('click', handleClickOutside);
    };
  }, []);

  useEffect(() => {
    initializeGoogleTranslate();
  }, []);

  return (
    <Navbar collapseOnSelect expand="lg" className="bg-body-tertiary">
      <Container>
        <Navbar.Brand href="/agriportal">
          <img src={logo} width="40" height="40" className="d-inline-block align-top" alt="Logo" />
        </Navbar.Brand>
        <Navbar.Toggle onClick={handleNavbarToggle} aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav" className={`${isNavbarCollapsed ? '' : 'show'}`}>
          <Nav className="me-auto">
            <Nav.Link as={NavLink} to="/" onClick={handleNavbarToggle}>Login</Nav.Link>
            <Nav.Link as={NavLink} to="/agriportal" onClick={handleNavbarToggle}>Home</Nav.Link>
            <Nav.Link as={NavLink} to="/know" onClick={handleNavbarToggle}>Knowledge</Nav.Link>
            <Nav.Link as={NavLink} to="/cropadvisory" onClick={handleNavbarToggle}>Advisory</Nav.Link>
            <Nav.Link as={NavLink} to="/scehemes" onClick={handleNavbarToggle}>Schemes</Nav.Link>
            <Nav.Link as={NavLink} to="/marketinfo" onClick={handleNavbarToggle}>Market Info</Nav.Link>
            <Nav.Link as={NavLink} to="/weather" onClick={handleNavbarToggle}>Weather</Nav.Link>
            {username && username !== 'undefined' && (
              <Nav.Link as={NavLink} to="/profile" onClick={handleNavbarToggle}>Welcome, {username}</Nav.Link>
            )}
            <NavDropdown title="More" id="collapsible-nav-dropdown">
              <NavDropdown.Item as={NavLink} to="/contacts" onClick={handleNavbarToggle}>Contacts</NavDropdown.Item>
              <NavDropdown.Item as={NavLink} to="/about" onClick={handleNavbarToggle}>About Us</NavDropdown.Item>
            </NavDropdown>
          </Nav>
          <div id="google_translate_element" className="google-translate-container"></div>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default CustomNavbar;
