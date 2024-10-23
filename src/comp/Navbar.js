import React, { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';
import logo from './Bgimg/logo.png';
import '../comp/Css/Navbar.css';

const CustomNavbar = () => {
  const [isNavbarCollapsed, setIsNavbarCollapsed] = useState(true);
  const username = localStorage.getItem('name');

  const handleNavbarToggle = () => {
    setIsNavbarCollapsed(!isNavbarCollapsed);
  };

  const handleClickOutside = (event) => {
    if (!event.target.closest('.topnav')) {
      setIsNavbarCollapsed(true);
    }
  };

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
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 768) {
        setIsNavbarCollapsed(true);
      }
    };
  
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);
  return (
    <div className={`topnav ${isNavbarCollapsed ? '' : 'responsive'}`}>
      <NavLink to="/agriportal" className="logo">
        <img src={logo} alt="Logo" />
      </NavLink>
      <NavLink to="/" className="nav-link" onClick={handleNavbarToggle}>Login</NavLink>
      <NavLink to="/agriportal" className="nav-link" onClick={handleNavbarToggle}>Home</NavLink>
      <NavLink to="/know" className="nav-link" onClick={handleNavbarToggle}>Knowledge</NavLink>
      <NavLink to="/cropadvisory" className="nav-link" onClick={handleNavbarToggle}>Advisory</NavLink>
      <NavLink to="/schemes" className="nav-link" onClick={handleNavbarToggle}>Schemes</NavLink>
      <NavLink to="/marketinfo" className="nav-link" onClick={handleNavbarToggle}>Market Info</NavLink>
      <NavLink to="/weather" className="nav-link" onClick={handleNavbarToggle}>Weather</NavLink>
      {username && username !== 'undefined' && (
        <NavLink to="/profile" className="nav-link" onClick={handleNavbarToggle}>
          Welcome, {username}
        </NavLink>
      )}
      <div className="icon" onClick={handleNavbarToggle}>
        &#9776;
      </div>
      <div id="google_translate_element" className="google-translate-container"></div>
    </div>
  );
};

export default CustomNavbar;
