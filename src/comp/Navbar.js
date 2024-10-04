import React, { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';
import logo from './Bgimg/logo.png';
import '../comp/Css/Navbar.css';
//this is navbar
export const Navbar = () => {
  const [isCollapsed, setIsCollapsed] = useState(true);
  const name = localStorage.getItem('name');

  // Toggle the collapsed state
  const toggleNavbar = () => {
    setIsCollapsed(!isCollapsed);
  };

  // Close navbar when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (!event.target.closest('.navbar')) {
        setIsCollapsed(true);
      }
    };

    document.addEventListener('click', handleClickOutside);
    return () => {
      document.removeEventListener('click', handleClickOutside);
    };
  }, []);

  // Initialize Google Translate widget
  useEffect(() => {
    const addGoogleTranslate = () => {
      if (window.google && window.google.translate) {
        new window.google.translate.TranslateElement(
          { pageLanguage: 'en' },
          'google_translate_element'
        );
      }
    };
    addGoogleTranslate();
  }, []);

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light shadow-sm">
      <div className="container-fluid">
        <a className="navbar-brand" href="/agriportal">
          <img src={logo} width="40" height="40" className="d-inline-block align-top" alt="Logo" />
        </a>
        <button
          className="navbar-toggler"
          type="button"
          onClick={toggleNavbar}
          aria-controls="navbarNav"
          aria-expanded={!isCollapsed}
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className={`collapse navbar-collapse ${isCollapsed ? '' : 'show'}`} id="navbarNav">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <NavLink className="nav-link" to="/" onClick={toggleNavbar}>Login</NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/agriportal" onClick={toggleNavbar}>Home</NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/know" onClick={toggleNavbar}>Knowledge</NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/cropadvisory" onClick={toggleNavbar}>Advisory</NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/scehemes" onClick={toggleNavbar}>Schemes</NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/marketinfo" onClick={toggleNavbar}>Market Info</NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/weather" onClick={toggleNavbar}>Weather</NavLink>
            </li>
            {name && name !== 'undefined' && (
              <li className="nav-item">
                <NavLink className="nav-link" to="/profile" onClick={toggleNavbar}>Welcome, {name}</NavLink>
              </li>
            )}
          </ul>
          <div id="google_translate_element" className="google-translate-container"></div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
