import React from 'react'
import '../styles/Register.css'
export default function Register() {
    
        return ( 
            <div>
                <div className="navbar1">
                    <h1 className="navbar-heading1">GET-Money</h1>
                </div>
            <div className="signup-container">

            <h1 className='heading'>Create a GET-Money account</h1>
            <p className='subheading'>Already have an account? <a href="#">Log in</a></p>

            <form>
                <div className="form-group">
                <label htmlFor="name">Name</label>
                <input type="text" id="name" name="name" />
                </div>

                <div className="form-group">
                <label htmlFor="email">Email</label>
                <input type="email" id="email" name="email" />
                </div>

                <div className="form-group">
                <label htmlFor="phone">Phone Number</label>
                <input type="tel" id="phone" name="phone" />
                </div>

                <div className="form-group">
                <label htmlFor="password">Password</label>
                <input type="password" id="password" name="password" />
                </div>

                <button type="submit">Sign Up</button>
            </form>
            </div>
            </div>
     )
}

// Name
// Email
// Phone Number
// Password
// Confirm Password