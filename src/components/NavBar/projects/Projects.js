import React, { useRef } from "react";
import "./Projects.css";
import { FaGithub } from "react-icons/fa";
import { FiExternalLink } from "react-icons/fi";
import project1 from "../../../assets/Project1img.png";
import project2 from "../../../assets/Project2img.png";
import project3 from "../../../assets/Project3img.png";
// import project4 from "../../../assets/Project4img.png";
import project5 from "../../../assets/Project5img.png";


const Projects = () => {

  const scrollRef = useRef(null);

  const scrollLeft = () => {
    scrollRef.current.scrollBy({
      left: -380,
      behavior: "smooth",
    });
  };

  const scrollRight = () => {
    scrollRef.current.scrollBy({
      left: 380,
      behavior: "smooth",
    });
  };

  return (
    <section id="projects" className="projects">

      <h2 className="projectTitle">My <span className="prohead">Projects</span></h2>
      <p className="projectDesc">
        Here are some of my projects showcasing full-stack development and responsive UI design.
      </p>

      <div className="projectSlider">

     
        <button className="arrow left" onClick={scrollLeft}>
          {"<"}
        </button>

        <div className="projectScroll" ref={scrollRef}>

        
          <div className="projectCard">
            <img src={project1} alt="REST API CRUD App" />
            <h3>REST API CRUD App</h3>
            <p>Full-stack CRUD application using React, Node.js, Express and MongoDB.</p>
            <div className="tech">React | Node | MongoDB</div>
            <div className="projectBtns">
              <a href="https://github.com/Nathiyamanickam/restapi" target="_blank" rel="noopener noreferrer">
                <FaGithub />
              </a>
              <a href="https://Nathiyamanickam.github.io/restapi" target="_blank" rel="noopener noreferrer">
                <FiExternalLink />
              </a>
            </div>
          </div>

      
          <div className="projectCard">
            <img src={project2} alt="Weather App" />
            <h3>Real-Time Weather Monitoring</h3>
            <p>Fetches real-time weather data using API integration.</p>
            <div className="tech">React | API</div>
            <div className="projectBtns">
              <a href="https://github.com/nathiyamanickam/city-weather-api" target="_blank" rel="noopener noreferrer">
                <FaGithub />
              </a>
              <a href="https://nathiyamanickam.github.io/city-weather-api/" target="_blank" rel="noopener noreferrer">
                <FiExternalLink />
              </a>
            </div>
          </div>

       

          <div className="projectCard">
            <img src={project3} alt="Portfolio Website" />
            <h3>Portfolio Website</h3>
            <p>Modern responsive React portfolio showcasing projects and skills.</p>
            <div className="tech">React</div>
            <div className="projectBtns">
              <a href="#" target="_blank" rel="noopener noreferrer">
                <FaGithub />
              </a>
              <a href="#" target="_blank" rel="noopener noreferrer">
                <FiExternalLink />
              </a>
            </div>
          </div>

           {/* <div className="projectCard">
            <img src={project4} alt="Todo list" />
            <h3>Login Form</h3>
            <p>MERN Authentication System with Login & Signup</p>
            <div className="tech">React</div>
            <div className="projectBtns">
              <a href="#" target="_blank" rel="noopener noreferrer">
                <FaGithub />
              </a>
              <a href="#" target="_blank" rel="noopener noreferrer">
                <FiExternalLink />
              </a>
            </div>
          </div> */}

          

           <div className="projectCard">
            <img src={project1} alt="cart" />
            <h3>Shopping Cart</h3>
            <p>Built a React shopping cart with add/remove functionality using Context API.</p>
            <div className="tech">React</div>
            <div className="projectBtns">
              <a href="#" target="_blank" rel="noopener noreferrer">
                <FaGithub />
              </a>
              <a href="#" target="_blank" rel="noopener noreferrer">
                <FiExternalLink />
              </a>
            </div>
          </div>

          <div className="projectCard">
            <img src={project5} alt="E-Commerce App" />
            <h3>E-Commerce App</h3>
            <p>Cafe-themed web application using HTML, CSS and JavaScript.</p>
            <div className="tech">HTML | CSS | JS</div>
            <div className="projectBtns">
              <a href="https://github.com/Nathiyamanickam/Magic-mugscafe" target="_blank" rel="noopener noreferrer">
                <FaGithub />
              </a>
              <a href="https://nathiyamanickam.github.io/Magic-mugscafe/" target="_blank" rel="noopener noreferrer">
                <FiExternalLink />
              </a>
            </div>
          </div>
{/* 
           <div className="projectCard">
            <img src={project4} alt="Todo list" />
            <h3>Login Form</h3>
            <p>MERN Authentication System with Login & Signup</p>
            <div className="tech">React</div>
            <div className="projectBtns">
              <a href="#" target="_blank" rel="noopener noreferrer">
                <FaGithub />
              </a>
              <a href="#" target="_blank" rel="noopener noreferrer">
                <FiExternalLink />
              </a>
            </div>
          </div> */}

        </div>

       
        <button className="arrow right" onClick={scrollRight}>
          {">"}
        </button>

      </div>

    </section>
  );
};

export default Projects;