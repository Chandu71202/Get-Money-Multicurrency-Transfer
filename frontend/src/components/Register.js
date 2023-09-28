import React from 'react'
import '../styles/Register.css'

import Navbar from './Navbar'

import axios from 'axios'
export default function Register() {
        const [user, setUser] = React.useState({
            name: "",
            email:"",
            phone_no:"",
            password:"",
            confirm_password:"",
        })
        const handleChanges = (e) => {
            setUser({
                ...user,
                [e.target.name]: e.target.value
            })
        }

        const handleSubmit = (e) => {
            e.preventDefault()
            if(user)
            {
                if (user.name.length < 3) {
                    alert("Name must be at least 3 characters long");
                    return;
                }
                if (user.email.length < 3) {
                    alert("Email must be at least 3 characters long");
                    return;
                }
                if (user.phone_no.length !== 10) {
                    alert("Phone number must have exactly 10 digits");
                    return;
                }
                if(user.password.length<8){
                    alert("Password length must be atleast 8 characters");
                    return;
                }
                if (user.password !== user.confirm_password) {
                    alert("Passwords do not match");
                    return;
                }
                axios.post("http://localhost:8080/users/addUser",user);
                alert("Registered Successfully");
                console.log(user)
            }
            
        }
        return ( 
            <div>
            <Navbar/>
            <div className="signup-container">
            <h1 className='heading'>Create a GET-Money account</h1>
            <p className='subheading'>Already have an account? <a className= "login"href="/login">Log in</a></p>

            <form onSubmit={handleSubmit}>
                <div className="form-group">
                <label className="label">Name</label>
                <input className="name_field" type="text" id="name" name="name" value={user.name} onChange={handleChanges} required/>
                </div>

                <div className="form-group">
                <label className="label">Email</label>
                <input className="email_field" type="email" id="email" name="email" value={user.email} onChange={handleChanges} required/>
                </div>

                <div className="form-group">
                <label className="label">Phone Number</label>
                <input className="phone_field" type="tel" id="phone_no" name="phone_no" value={user.phone_no} onChange={handleChanges} required/>
                </div>

                <div className="form-group">
                <label className="label">Password</label>
                <input className="password_field" type="password" id="password" name="password" value={user.password} onChange={handleChanges} required />
                </div>

                <div className="form-group">
                <label className="label">Confirm Password</label>
                <input className="confirm_password_field" type="password" id="confirm_password" name="confirm_password" value={user.confirm_password} onChange={handleChanges} required />
                </div>

                <button className='submit_button' type="submit">Sign Up</button>
            </form>
            </div>
            </div>
     )
}
