import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../../styles/Login/Login.css";
import axios from "axios";
import Navbar from "../Home/Navbar"; 
import { useNavigate } from "react-router-dom";
import Footer from "../Home/Footer";

export default function Login({ onLogin }) {
  const [user, setUser] = useState({
    email: "",
    password: "",
  });

  let navigate = useNavigate();

  const handleChanges = (e) => {
    setUser({
      ...user,
      [e.target.name]: e.target.value,
    });
  };


  const validateEmail = (email) => {
    const pattern = /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/;
    if (!pattern.test(email)) {
      return false;
    }
    return true;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (user) {
      if (!validateEmail(user.email)) {
        alert("Invalid Email");
        return;
      }
      if (user.password.length < 8) {
        alert("Password length must be atleast 8 characters");
        return;
      }
      axios.post("http://localhost:8080/users/loginUser", user)
      .then((response) => {
        if(response.data=="Login Successful"){
          axios.get(`http://localhost:8080/users/getIdByEmail/${user.email}`)
          .then((response) => {
            sessionStorage.setItem("id", response.data);
          })
          onLogin();
          alert("User Login Successful");
          navigate('/dashboard');
        }
        else if(response.data=="Invalid password"){
          alert("Wrong Password!");
        }
        else{
          alert("User does not exist!, Please Register");
        }
      })
      .catch((error) => {
        console.error("Error checking email existence:", error);
      });
    }
    else{
      alert("Not a valid Login Data")
    }
  };

  return (
    <div>
      <Navbar/>
      {sessionStorage.getItem("id") ? (
        <div
          className="wrapper d-flex align-items-center justify-content-center text-white"
          style={{ backgroundColor: "#5A287D",padding:"120px"}}
        >
          <div>
            <h1>You are already logged in!</h1>
            <br />
            <br />
            <p>Try to logout and re-login again</p>
          </div>
        </div>
      ) : (
      <div className="login-page">
        <div className="login-card">
          <h1>Welcome Back! Please Login</h1>
          <form onSubmit={handleSubmit}>
            <div>
              <label>Email Id:</label>
              <input
                className="username_field"
                type="text"
                id="email"
                name="email"
                value={user.email}
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
      </div>)}
      <Footer/>
    </div>
  );
}
