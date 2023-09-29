import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../styles/Login.css";
import axios from "axios";
import Navbar from "./Navbar"; 

export default function Login() {
  const [user, setUser] = useState({
    name: "",
    password: "",
  });

  const handleChanges = (e) => {
    setUser({
      ...user,
      [e.target.name]: e.target.value,
    });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (user) {
      if (user.name.length < 3) {
        alert("Name must be at least 3 characters long");
        return;
      }
      if (user.password.length < 8) {
        alert("Password length must be atleast 8 characters");
        return;
      }
      axios.post("http://localhost:8080/users/addUser", user);
      alert("User Login Successful");
      console.log(user);
    }
  };

  return (
    <div>
      <Navbar/>
      <div className="login-page">
        <div className="login-card">
          <h1>Welcome Back Please Login!</h1>
          <form onSubmit={handleSubmit}>
            <div>
              <label>Username:</label>
              <input
                className="username_field"
                type="text"
                id="name"
                name="name"
                value={user.name}
                onChange={handleChanges}
                required
              />
            </div>
            <div>
              <label>Password:</label>
              <input
                className="password_field"
                type="password"
                id="password"
                name="password"
                value={user.password}
                onChange={handleChanges}
                required
              />
            </div>
            <div>
              <button className="submit_button" type="submit">
                Login
              </button>
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
