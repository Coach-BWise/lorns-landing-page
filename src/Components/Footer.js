import React from "react";
import { FaFacebookF } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaBlog } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="footer-wrapper">
      <div className="footer-section-one">
        <div className="footer-logo-container">
          <h2>LORN HILLAKER</h2>
        </div>
        <div className="footer-icons">
          <FaBlog />
          <FaFacebookF />
          <FaInstagram />
          <FaTwitter />
        </div>
      </div>
    </div>
  );
};

export default Footer;
