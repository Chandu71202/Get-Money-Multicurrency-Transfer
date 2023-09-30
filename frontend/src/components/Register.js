import React, { useState } from "react";
import "../styles/Register.css";
import Navbar from "./Navbar";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export default function Register() {
  const [user, setUser] = useState({
    name: "",
    email: "",
    phoneNo: "",
    password: "",
    confirmPassword: "",
  });
  let navigate = useNavigate();
  const [emailExists, setEmailExists] = useState(false);
  const validateEmail = (email) => {
    const pattern = /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/;
    if (!pattern.test(email)) {
      return false;
    }
    return true;
  };
  const handleChanges = (e) => {
    setUser({
      ...user,
      [e.target.name]: e.target.value,
    });
  };

  const checkEmailExists = () => {
    axios
      .get(`http://localhost:8080/users/checkEmail/${user.email}`)
      .then((response) => {
        setEmailExists(response.data);
      })
      .catch((error) => {
        console.error("Error checking email existence:", error);
      });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!emailExists) {
      alert("Email already exists. Please choose a different email.");
      return;
    }
    if(user){
    if (user.name.length < 3) {
      alert("Name must be at least 3 characters long");
      return;
    }
    if (!validateEmail(user.email)) {
      alert("Invalid Email");
      return;
    }
    if (user.email.length < 3) {
      alert("Email must be at least 3 characters long");
      return;
    }
    if (user.phoneNo.length !== 10) {
      alert("Phone number must have exactly 10 digits");
      return;
    }
    if (user.password.length < 8) {
      alert("Password length must be atleast 8 characters");
      return;
    }
    if (user.password !== user.confirmPassword) {
      alert("Passwords do not match");
      return;
    }
    axios.post("http://localhost:8080/users/registerNewUser", user);
    alert("Registered Successfully");
    navigate('/login');
  }
  else{
    alert("Not a valid User Data")
  }
  };
  return (
    <div>
      <Navbar />
      <div className="signup-container">
        <h1 className="heading">Create a GET-Money account</h1>
        <p className="subheading">
          Already have an account?{" "}
          <a className="login" href="/login">
            Log in
          </a>
        </p>

        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label className="label">Name</label>
            <input
              className="name_field"
              type="text"
              id="name"
              name="name"
              value={user.name}
              onChange={handleChanges}
              required
            />
          </div>

          <div className="form-group">
            <label className="label">Email</label>
            <input
              className="email_field"
              type="text"
              id="email"
              name="email"
              value={user.email}
              onBlur={checkEmailExists}
              onChange={handleChanges}
              required
            />
          </div>

          <div className="form-group">
            <label className="label">Phone Number</label>
            <input
              className="phone_field"
              type="tel"
              id="phoneNo"
              name="phoneNo"
              value={user.phoneNo}
              onChange={handleChanges}
              required
            />
          </div>

          <div className="form-group">
            <label className="label">Password</label>
            <input
              className="password_field_register"
              type="password"
              id="password"
              name="password"
              value={user.password}
              onChange={handleChanges}
              required
            />
          </div>

          <div className="form-group">
            <label className="label">Confirm Password</label>
            <input
              className="confirm_password_field"
              type="password"
              id="confirmPassword"
              name="confirmPassword"
              value={user.confirmPassword}
              onChange={handleChanges}
              required
            />
          </div>

          <button className="submit_button" type="submit">
            Sign Up
          </button>
        </form>
      </div>
    </div>
  );
}
