import React, { useState } from "react";
import "./navbar.css";
import logo from "../../assets/logo.png";
import menu from "../../assets/menu.png";
import { Link } from "react-scroll";
import { FaGithub, FaLinkedin } from "react-icons/fa";

const Navbar = () => {

const [showMenu,setShowMenu] = useState(false);

return (

<nav className="navbar">

<img src={logo} alt="logo" className="logo"/>

{/* DESKTOP MENU */}

<div className="desktopMenu">

<Link to="intro" smooth spy offset={-70} duration={500} className="desktopMenuListItem">Home</Link>

<Link to="about" smooth spy offset={-70} duration={500} className="desktopMenuListItem">About</Link>

<Link to="projects" smooth spy offset={-70} duration={500} className="desktopMenuListItem">Projects</Link>

<Link to="skills" smooth spy offset={-70} duration={500} className="desktopMenuListItem">Skills</Link>

<Link to="contact" smooth spy offset={-70} duration={500} className="desktopMenuListItem">Contact</Link>

</div>

{/* RIGHT SECTION */}

<div className="rightSection">

<div className="link">

<a href="https://github.com/Nathiyamanickam" target="_blank" rel="noreferrer">
<FaGithub className="socialIcon"/>
</a>

<a href="https://linkedin.com/in/nathiya-juniordeveloper" target="_blank" rel="noreferrer">
<FaLinkedin className="socialIcon"/>
</a>

</div>

<button
className="desktopMenuBtn"
onClick={()=>{
document.getElementById("contact").scrollIntoView({behavior:"smooth"})
}}
>
Contact Me
</button>

{/* HAMBURGER IMAGE */}

<img
src={menu}
alt="menu"
className="mobileMenu"
onClick={()=>setShowMenu(!showMenu)}
/>

</div>


{/* MOBILE MENU */}

{showMenu && (

<div className="navMenu">

<Link to="intro" smooth spy offset={-100} duration={500} className="listItem" onClick={()=>setShowMenu(false)}>Home</Link>

<Link to="about" smooth spy offset={-100} duration={500} className="listItem" onClick={()=>setShowMenu(false)}>About</Link>

<Link to="projects" smooth spy offset={-100} duration={500} className="listItem" onClick={()=>setShowMenu(false)}>Projects</Link>

<Link to="skills" smooth spy offset={-100} duration={500} className="listItem" onClick={()=>setShowMenu(false)}>Skills</Link>

<Link to="contact" smooth spy offset={-100} duration={500} className="listItem" onClick={()=>setShowMenu(false)}>Contact</Link>

</div>

)}

</nav>

);

};

export default Navbar;