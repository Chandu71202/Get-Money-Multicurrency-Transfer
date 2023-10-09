import React, { useState } from "react";
import "../../styles/Register/Register.css";
import Navbar from "../Home/Navbar";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import Footer from "../Home/Footer";
import Popup from "../Dashboard/Popup";

export default function Register() {
  const [user, setUser] = useState({
    name: "",
    email: "",
    phoneNo: "",
    password: "",
    confirmPassword: "",
  });
  const [showPopup, setShowPopup] = useState(false);
  const [popupMessage, setPopupMessage] = useState('');

  const openPopup = (message) => {
    setPopupMessage(message);
    setShowPopup(true);
  };
  const closePopup = () => {
    setShowPopup(false);
  };    

  user.name = user.name.charAt(0).toUpperCase() + user.name.slice(1);
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
      openPopup("Email already exists. Please choose a different email.");
      return;
    }
    if (user) {
      if (user.name.length < 3) {
        openPopup("Name must be at least 3 characters long");
        return;
      }
      if (!validateEmail(user.email)) {
        openPopup("Invalid Email");
        return;
      }
      if (user.email.length < 3) {
        openPopup("Email must be at least 3 characters long");
        return;
      }

      if (user.phoneNo.length !== 10) {
        openPopup("Phone number must have exactly 10 digits");
        return;
      }
      if (!/[A-Z]/.test(user.password)) {
        openPopup("Password must contain at least one uppercase letter");
        return false;
      }

      // Password must contain at least one lowercase letter
      if (!/[a-z]/.test(user.password)) {
        openPopup("Password must contain at least on lower case");
        return false;
      }

      if (!/[!@#$%^&*()_+[\]{};':"\\|,.<>?/~`]/.test(user.password)) {
        openPopup("Password must contain at least one special character");
        return false;
      }
      if (user.password.length < 8) {
        openPopup("Password length must be atleast 8 characters");
        return;
      }
      if (user.password !== user.confirmPassword) {
        openPopup("Passwords do not match");
        return;
      }
      axios.post("http://localhost:8080/users/registerNewUser", user);
      openPopup("Registered Successfully");
      navigate("/login");
    } else {
      openPopup("Not a valid User Data");
    }
  };
  return (
    <div>
      <Navbar />
      {sessionStorage.getItem("id") ? (
        <div
          className="wrapper d-flex align-items-center justify-content-center text-white"
          style={{ backgroundColor: "#5A287D", padding: "120px" }}
        >
          <div>
            <h1>You are already logged in!</h1>
            <br />
            <br />
            <p>To register new user, please logout!</p>
          </div>
        </div>
      ) : (
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
                type="number"
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
            {showPopup && <Popup message={popupMessage} onClose={closePopup} />}

          </form>
        </div>
      )}
      <Footer />
    </div>
  );
}
