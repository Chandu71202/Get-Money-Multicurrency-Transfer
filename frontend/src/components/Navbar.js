import React, { useState } from 'react';
import {useNavigate} from 'react-router-dom';
import '../styles/Navbar.css';

export default function Navbar() {
  const [menuActive, setMenuActive] = useState(false);

  const toggleMenu = () => {
    setMenuActive(!menuActive);
  };

  let navigate = useNavigate();
  const Register = () => {
    navigate("/register");
  }

  return (
    <nav className="navbar">
      <div className="navbar-left">
        <div className={`hamburger-menu ${menuActive ? 'active' : ''}`} onClick={toggleMenu}>
          <div className="bar"></div>
          <div className="bar"></div>
          <div className="bar"></div>
        </div>
        <div className="logo">GET-Money</div>
      </div>
      <div className={`navbar-right ${menuActive ? 'active' : ''}`}>
        <ul className="navbar-menu">
          <li><a href="#">About</a></li>
        </ul>
        <div className="buttons">
          <button className="login-button">Login</button>
          <button className="get-started-button" onClick={() => Register()}>Get Started</button>
        </div>
      </div>
    </nav>
  );
}
