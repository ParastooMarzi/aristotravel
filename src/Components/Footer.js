import React from "react";
import Logo from "../Assets/logo.png";

import {FaWhatsapp } from "react-icons/fa";
import { EmailOutlined } from "@mui/icons-material";

const Footer = () => {
  return (
    <div className="footer-wrapper">
      <div className="footer-section-one">
        <div className="footer-logo-container">
          <img src={Logo} alt="" />
        </div>
        <div className="footer-icons">         
        <FaWhatsapp/><span>+98 901 682 3100</span>
        </div>
        <div className="footer-icons">      
          <EmailOutlined/><span>aristotravel@gmail.com</span>         
        </div>
      </div>

    </div>
  );
};

export default Footer;
