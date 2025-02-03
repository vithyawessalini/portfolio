import React from 'react';
import '../Style/Project.css'
import summerImage from '../Images/summer.png';
import sportImage from '../Images/sport.png';
import petImage from '../Images/pet.png';
import mobileImage from '../Images/mobile.png';
const projects = [
  {
    title: "Summer camp management system",
    description: "Seamless booking and providing easy access to schedules and locations.",
    image: summerImage,
    technologies: ["HTML", "CSS", "JavaScript", "React"],
    link: "https://vithyawessalini.github.io/Summercamp",
    github: "https://github.com/vithyawessalini/Summercamp"
  },
  {
    title: "Sports management system",
    description: "Built an efficient sports management system for organizing events, scheduling practices.",
    image: sportImage,
    technologies: ["Node.js", "Express", "MongoDB", "React"],
    link: "https://sportsmanagementsystem.vercel.app",
    github: "https://github.com/vithyawessalini/Sports"
  },
  {
    title: "Pet adoption management system",
    description: "Seamless pet adoption management system, facilitating the adoption process with ease and efficiency.",
    image: petImage,
    technologies: ["Node.js", "Express", "MongoDB", "React"],
    link: "https://petadoptionmanagement.vercel.app",
    github: "https://github.com/vithyawessalini/petfrontend"
  },
  {
    title: "Website for Sun Cellular",
    description: "Seamless product browsing for customers and efficient order management for admins on mobile devices.",
    image: mobileImage,
    technologies: ["Node.js", "Express", "MongoDB", "React"],
    link: "https://mobileecommercewebsite.vercel.app",
    github: "https://github.com/vithyawessalini/mobile_e-commerce_website"
  },
  
];

// Project Component
const Projects = () => {
  return (
    <div style={{paddingTop:'600px'}}>
    <h1>Project</h1>
    <div className="projects">
      {projects.map((project, index) => (
        <div key={index} className="project">
          <img src={project.image} alt={`${project.title} screenshot`} />
          <h3>{project.title}</h3>
          <p>{project.description}</p>
          <p><strong>Technologies:</strong> {project.technologies.join(', ')}</p>
          <a href={project.link} target="_blank" rel="noopener noreferrer">View Live</a>
          <a href={project.github} target="_blank" rel="noopener noreferrer">View Code</a>
        </div>
      ))}
    </div></div>
  );
};

export default Projects;
