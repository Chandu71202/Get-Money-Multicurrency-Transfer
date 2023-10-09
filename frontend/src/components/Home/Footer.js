import React from 'react';
import '../../styles/Home/Footer.css';
import {IoLogoInstagram, IoLogoLinkedin, IoLogoFacebook} from 'react-icons/io';
import {FaXTwitter} from 'react-icons/fa6';

export default function Footer() {
    return (
        <footer className="footer">
            <div className="footer-container" style={{ paddingLeft: 30, paddingRight: 30 }}>
                <div className="footer-logo" >
                    <img src="https://www.natwestinternational.com/content/dam/championlogos/NWInternational_Secondary_Horizontal.svg" alt="Bank Logo" />
                    <h2 title='Global Exchange and Transaction of Money'>GET-Money</h2>
                </div>
                <div className="footer-links">
                    <h3>Quick Links</h3>
                    <ul>
                        <li><a href="#">Security</a></li>
                        <li><a href="#">Customer Help</a></li>
                        <li><a href="#">Feedback</a></li>
                    </ul>
                </div>
                <div className="footer-contact">
                    <h3>Contact Us</h3>
                    <p>123 Main Street</p>
                    <p>Cityville, State, 12345</p>
                    <p>Email: getmoney@natwest.com</p>
                    <p>Phone: (123) 456-7890</p>
                </div>
                <div className="footer-social">
                    <h3>Follow Us</h3>
                    <ul>
                        <li><a href="https://www.facebook.com/NatWest/"><IoLogoFacebook /></a></li>
                        <li><a href="https://twitter.com/NatWestGroup"><FaXTwitter /></a></li>
                        <li><a href="https://www.linkedin.com/company/natwest-group/mycompany/"><IoLogoLinkedin /></a></li>
                        <li><a href="https://www.instagram.com/natwest/?hl=en"><IoLogoInstagram /></a></li>
                    </ul>
                </div>
            </div>
            <div className="footer-bottom">
                <p title='Global Exchange and Transaction of Money'>&copy; 2023 GET-Money. All rights reserved.</p>
            </div>
        </footer>
    );
}
