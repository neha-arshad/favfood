import React from "react";
import "./Footer.css";
import Link from "next/link";

const Footer = () => {
  return (
    <div className="footer" id="footer">
      <div className="footer-content">
        <div className="footer-content-left">
          <p>Let's Connect with Us</p>
          <div className="footer-social-icon">
						<Link href={"https://m.facebook.com"}>
            <img src="/Images/facebook_icon.png" alt="facebook-icon" />
						</Link>
						<Link href={"https://pk.linkedin.com"}>
            <img src="/Images/linkedin_icon.png" alt="linkedin-icon" />
						</Link>
          </div>
        </div>

        <div className="footer-content-center">
          <h2>Company</h2>
          <ul>
            <li>
              <a href="#Home">Home</a>
            </li>
            <li>
              <a href="#explore-menu">Menu</a>
            </li>
            <li>Privacy Policy</li>
            <li></li>
          </ul>
        </div>

        <div className="footer-content-right">
          <h2>Get In Touch</h2>
          <ul>
            <li>+92 111 2222 333</li>
            <li>bintearshada@gmail.com</li>
          </ul>
        </div>
      </div>
      <hr />

      <div className="footer-bottom">
        &copy; 2024 Website | Designed by Neha Arshad. All rights reserved
      </div>
    </div>
  );
};

export default Footer;
