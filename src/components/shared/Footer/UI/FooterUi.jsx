import React from "react";
import Footerstyle from "./../style/Footerstyle";
import logo from "../../../../assets/logo.png";
import facebookIcon from "./../images/Vector.png";
import twitterIcon from "./../images/3.png";
import instagramIcon from "./../images/2.png";
import youtube from "./../images/5.png";

const FooterUi = () => {
  return (
    <footer className="footer">
      <Footerstyle />

      <div className="footer-container">
        <div className="footer-logo">
          <img src={logo} alt="Logo" className="logo-img" />
        </div>
        <div className="footer-text">
          <p className="text-black">
            Mindful Living Club Weight loss and Wellness Programs with Holistic
            Nutrition and Stress Management Techniques.
          </p>
        </div>
        <div className="footer-links">
          <a href="">Home</a>
          <a href="about">About</a>
          <a href="blog">Blog</a>
          <a href="services">Services</a>
          <a href="login">LogIn</a>
        </div>
        <div className="condition">
          <a href="#">Term&Conditions</a>
          <a href="#">Privacy Policy</a>
          <a href="#">Contact</a>
          <a href="#">Cookies Policy</a>
          <a href="#">Support</a>
        </div>
        <div className="divider"></div>
        <div className="footer-socials">
          <a href="https://facebook.com" className="social-icon">
            <img src={facebookIcon} alt="Facebook" />
          </a>
          <a href="https://twitter.com" className="social-icon">
            <img src={twitterIcon} alt="Twitter" />
          </a>
          <a href="https://instagram.com" className="social-icon">
            <img src={instagramIcon} alt="Instagram" />
          </a>
          <a href="https://youtube.com" className="social-icon">
            <img src={youtube} alt="Youtube" />
          </a>
        </div>
        <div className="divider"></div>
        <div className="footer-bottom">
          &copy; <span className="">2024 Mindful Living Club.</span> All rights
          reserved.
        </div>
      </div>
    </footer>
  );
};

export default FooterUi;
