import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../styles/Login.css';
import Navbar from './Navbar'; // Import the Navbar component

export default function Login() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleUsernameChange = (event) => {
    setUsername(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    // Simulate a login request (replace this with your actual login logic)
    try {
      const response = await fetch('/api/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ username, password }),
      });

      if (response.ok) {
        // Login successful, redirect to another page (e.g., dashboard)
        // Replace "/dashboard" with the actual URL where you want to redirect
        window.location.href = '/dashboard';
      } else {
        // Handle login failure (display an error message, etc.)
        console.error('Login failed');
      }
    } catch (error) {
      console.error('Login error:', error);
    }
  };

  return (
    <div>
      <Navbar /> {/* Include the Navbar component here */}
      <div className="login-page">
        <div className="login-card">
          <h1>Login</h1>
          <form onSubmit={handleSubmit}>
            <div>
              <label>Username:</label>
              <input
                type="text"
                value={username}
                onChange={handleUsernameChange}
                required
              />
            </div>
            <div>
              <label>Password:</label>
              <input
                type="password"
                value={password}
                onChange={handlePasswordChange}
                required
              />
            </div>
            <div>
              <button type="submit">Login</button>
            </div>
          </form>
          <p>
            Don't have an account? <Link to="/register">Sign Up</Link>
          </p>
        </div>
      </div>
    </div>
  );
}
