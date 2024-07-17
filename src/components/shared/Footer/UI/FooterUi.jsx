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

      <div className="footer-logo ">
        <img src={logo} alt="Logo" className="w-20 h-30" />
      </div>
      <div>
        <p className="text-black">
          Mindful Living Club Weight loss and Wellness Programs with Holistic
          Nutrition and Stress Management Techniques.
        </p>
      </div>
      <div className="footer-links">
        <a href="#">Home</a>
        <a href="#about">About</a>
        <a href="#blog">Blog</a>
        <a href="#services">Services</a>
        <a href="#community">Community</a>
        <a href="#signin">SignIn</a>
      </div>
      <div className="condition">
        <a href="#">Term&Conditions</a>
        <a href="#">Privacy Policy</a>
        <a href="#blog">Contact</a>
        <a href="#services">Cookies Policy</a>
        <a href="#community">Support</a>
      </div>
      <div className="divider"></div>
      <div className="footer-socials flex">
        <a
          href="https://facebook.com"
          className=" h-8 w-8 border-4 border-white rounded-full"
        >
          <img src={facebookIcon} alt="Facebook" className="" />
        </a>
        <a
          href="https://twitter.com"
          className="h-8 w-8 border-4 border-white rounded-full"
        >
          <img src={twitterIcon} alt="Twitter" className="h-6 w-6" />
        </a>
        <a
          href="https://instagram.com"
          className="h-8 w-8 border-4 border-white rounded-full"
        >
          <img src={instagramIcon} alt="Instagram" className="" />
        </a>
        <a
          href="https://youtube.com"
          className="h-8 w-8 border-4 border-white rounded-full"
        >
          <img src={youtube} alt="Youtube" className="" />
        </a>
      </div>
      <div className="divider"></div>
      <div className="mt-8 text-center text-sm text-black">
        &copy; 2024 Mindful Living Club. All rights reserved.
      </div>
    </footer>
  );
};

export default FooterUi;
