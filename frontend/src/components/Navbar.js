import React, { useState } from 'react';
import { Link, useNavigate} from 'react-router-dom'; 
import '../styles/Navbar.css';

export default function Navbar() {
  const [menuActive, setMenuActive] = useState(false);
  const navigate = useNavigate();
  const toggleMenu = () => {
    setMenuActive(!menuActive);
  };

  function Logout() {
    sessionStorage.clear();
  }
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
            <p className='logo-text' title='Global Exchange and Transaction of Money'>GET-Money</p>
          </Link>
        </div>

      </div>
      <div className={`navbar-right ${menuActive ? 'active' : ''}`}>
        <ul className="navbar-menu">
          <Link to="/">About</Link>
        </ul>
        <div className="buttons">
        {sessionStorage.getItem("id") ? (
          <>
          <Link to="/dashboard" className="login-button">Dashboard</Link> 
          <Link to="/login" className="get-started-button" onClick={Logout}>Logout</Link>
          </>
        ):(
          <>
          <Link to="/login" className="login-button">Login</Link> 
          <Link to="/register" className="get-started-button">Get Started</Link> 
          </>
        )}
        </div>
      </div>
    </div>
  );
}
