import React from "react";
import "./Intro.css";
import bg from "../../../assets/image.png";
import { Link } from "react-scroll";
import { FaDownload } from "react-icons/fa";
import resumePDF from "../../../assets/Resume.pdf";

const Intro = () => {
  return (
    <section id="intro">

      <div className="heroLeft">

        <p className="hello">Hello</p>

        <h1 className="introText">
          I'm <span className="introName">Nathiya</span>
        </h1>

        <h2 className="introRole">MERN Stack Developer</h2>

        <p className="introPara">
          Aspiring MERN Stack Developer passionate about building responsive and user-friendly web applications.
        </p>

        <div className="heroButtons">

          <Link to="contact" smooth={true} duration={500}>
            <button className="hireBtn">Hire Me</button>
          </Link>

          <a href={resumePDF} download className="resumeBtn">
            <FaDownload /> Resume
          </a>

        </div>

      </div>

      <div className="heroRight">
        <img src={bg} alt="profile"/>
      </div>

    </section>
  );
};

export default Intro;