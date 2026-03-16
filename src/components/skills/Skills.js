import React from "react";
import "./Skills.css";
import { FaHtml5, FaCss3Alt, FaReact, FaNodeJs, FaGithub } from "react-icons/fa";
import { SiJavascript, SiMongodb, SiExpress, SiVite } from "react-icons/si";

const Skills = () => {

const frontendSkills = [
{ name: "HTML", level: 95,levelText: "Advanced", icon: <FaHtml5 /> },
{ name: "CSS", level: 90,levelText: "Advanced", icon: <FaCss3Alt /> },
{ name: "JavaScript", level: 75,levelText: "Intermediate", icon: <SiJavascript /> },
{ name: "React", level: 85,levelText: "Advanced", icon: <FaReact /> },
];

const backendSkills = [
{ name: "Node.js", level: 70,levelText: "Intermediate", icon: <FaNodeJs /> },
{ name: "Express", level: 65,levelText: "Intermediate", icon: <SiExpress /> },
{ name: "MongoDB", level: 70,levelText: "Intermediate", icon: <SiMongodb /> },
];

const toolsSkills = [
{ name: "GitHub", level: 80,levelText: "Advanced", icon: <FaGithub /> },
{ name: "Vite", level: 80,levelText: "Advanced", icon: <SiVite /> },
];

const SkillCircle = ({ skill }) => {

const radius = 28;
const circumference = 2 * Math.PI * radius;
const offset = circumference - (skill.level / 100) * circumference;

return (

<div className="skill">

<svg width="60" height="60" className="circle">

<circle
className="bg"
cx="30"
cy="30"
r={radius}
/>

<circle
className="progress"
cx="30"
cy="30"
r={radius}
style={{
strokeDasharray: circumference,
strokeDashoffset: offset
}}
/>

</svg>

<div className="icon">
{skill.icon}
</div>

<p>{skill.name}</p>
<span className="level">{skill.levelText}</span>
</div>
);
};

return (

<section className="skills">

<h2>My <span className="head">Skills</span></h2>

<div className="skillsWrapper">

{/* Frontend */}

<div className="skillCard">
<h3>Frontend</h3>

<div className="skillGrid">
{frontendSkills.map((skill, i) => (
<SkillCircle skill={skill} key={i}/>
))}
</div>

</div>

{/* Backend */}

<div className="skillCard">
<h3>Backend</h3>

<div className="skillGrid">
{backendSkills.map((skill, i) => (
<SkillCircle skill={skill} key={i}/>
))}
</div>

</div>

{/* Tools */}

<div className="skillCard">
<h3>Tools</h3>

<div className="skillGrid">
{toolsSkills.map((skill, i) => (
<SkillCircle skill={skill} key={i}/>
))}
</div>

</div>

</div>

</section>

);
};

export default Skills;