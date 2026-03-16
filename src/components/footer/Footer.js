import React from "react";
import "./Footer.css";
// import {Link} from 'react-scroll'
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { 
  HiHome, 
  HiUser, 
  HiFolder, 
  HiCode, 
  HiPhone, 
  HiMail,
  HiLocationMarker
} from "react-icons/hi";

const Footer = () => {
  return (
   <footer className="footer">
  <div className="footerContainer">

    <div className="footerLeft">
      <h2 className="footerLogo">Nathiya.M</h2>
      <p className="footerTagline">
        
        MERN Stack Developer crafting high-performance, scalable web applications with clean code and modern UI.
      </p>
      <p className="footerTagline">Let’s Connect and Build Something Great.</p>
    </div>

    <div className="footerSectionCenter">
      <h3>Quick Links</h3>
      <ul className="quickLinks">
        <li><HiHome /><a href="#intro">Home</a></li>
        <li><HiUser /><a href="#about">About</a></li>
        <li><HiFolder /><a href="#projects">Projects</a></li>
        <li><HiCode /><a href="#skills">Skills</a></li>
        <li><HiPhone /><a href="#contact">Contact</a></li>
      </ul>
    </div>

    <div className="footerSectionRight">
      <h3>Connect With Me</h3>

      <div className="contactItem">
        <HiPhone /> <span>+91 6369874271</span>
      </div>

      <div className="contactItem">
        <HiMail /> <span>nathiyamanickam6181@gmail.com</span>
      </div>

      <div className="contactItem">
        <HiLocationMarker /> <span>Tamil Nadu, India</span>
      </div>

      <div className="socialRow">
        <a href="https://github.com/Nathiyamanickam" target="_blank" rel="noopener noreferrer">
          <FaGithub /> GitHub
        </a>

        <a href="https://linkedin.com/in/nathiya-juniordeveloper" target="_blank" rel="noopener noreferrer">
          <FaLinkedin /> LinkedIn
        </a>
      </div>

    </div>

  </div>

  <div className="footerBottom">
    © 2026 Nathiya | Built with React
  </div>
</footer>
  );
};

export default Footer;