import React from 'react'
import './About.css'
import UIDesign from '../../../assets/certificateicon.png'
import CardDesign from '../../../assets/pdficon.png'
import certificatePDF from '../../../assets/certificate.pdf';
import resumePDF from '../../../assets/Resume.pdf';


const About = () => {
  return (
    <section id="about">
      <h2 className='aboutTitle'>About <span className='abouthead'>Me</span> </h2>
       <span className='aboutDesc'>Fresher MERN Stack Developer skilled in MongoDB, Express.js, React, and Node.js. I build scalable, responsive web applications with clean architecture and modern UI. Passionate about continuous learning and delivering impactful solutions..</span>
   
 

    <div className='aboutBars'>

 
  <div className='aboutBar'>
    <img src={UIDesign} alt="Certificate" className='aboutBarImg' />
    <div className='aboutBarText'>
      <h2>Certified Web Developer</h2>
      <p>
        Successfully completed Web Development training at 
        Kalvi Institute, Karur under Vinsys IT Services Limited. 
        Skilled in MERN Stack development and modern web technologies.
      </p>

      <a 
        href={certificatePDF} 
        target="_blank" 
        rel="noopener noreferrer"
        className="viewBtn"
      >
        View Certificate
      </a>
    </div>
  </div>

 
  <div className='aboutBar'>
    <img src={CardDesign} alt="Resume" className='aboutBarImg' />
    <div className='aboutBarText'>
      <h2>My Resume</h2>
      <p>
        Passionate MERN Stack Developer focused on building 
        responsive and scalable web applications. 
        Strong in React, Node.js, MongoDB, and Express.
      </p>

      <a 
        href={resumePDF} 
        target="_blank" 
        rel="noopener noreferrer"
        className="viewBtn"
      >
        View Resume
      </a>
    </div>
  </div>

</div>

  

    
   
    </section>
  )
}

export default About
