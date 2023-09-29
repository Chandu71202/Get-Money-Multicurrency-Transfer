import React, { useState } from 'react';
import { Link } from 'react-router-dom'; // Import Link
import '../styles/Navbar.css';

export default function Navbar() {
  const [menuActive, setMenuActive] = useState(false);

  const toggleMenu = () => {
    setMenuActive(!menuActive);
  };

  return (
    <div className="navbar">
      <div className="navbar-left">
        <div className={`hamburger-menu ${menuActive ? 'active' : ''}`} onClick={toggleMenu}>
          <div className="bar"></div>
          <div className="bar"></div>
          <div className="bar"></div>
        </div>
        <div >
          <Link className='head' to="/">
            <img className='logo' src="https://www.natwestinternational.com/content/dam/championlogos/NWInternational_Secondary_Horizontal.svg" alt="Bank Logo" />
            <p className='head' title='Global Exchange and Transaction of Money'>GET-Money</p>
          </Link>
        </div>

      </div>
      <div className={`navbar-right ${menuActive ? 'active' : ''}`}>
        <ul className="navbar-menu">
          <Link to="/">About</Link>
        </ul>
        <div className="buttons">
          <Link to="/login" className="login-button">Login</Link> {/* Use Link component */}
          <Link to="/register" className="get-started-button">Get Started</Link> {/* Use Link component */}
        </div>
      </div>
    </div>
  );
}
