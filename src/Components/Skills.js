import React, { useState } from 'react';
import { FaJava, FaCuttlefish, FaHtml5, FaCss3Alt, FaReact, FaNodeJs, FaGitAlt, FaDatabase, FaJsSquare } from 'react-icons/fa'; // Correct import for JavaScript icon
import '../Style/Skills.css'; // Optional, for custom styles if needed
import Mongodb from '../Images/mongodb.png'
import Mysql from '../Images/mysql.png'
import git from '../Images/git.png'
import c from '../Images/c.png'
import css from '../Images/css.png'
import express from '../Images/express.png'
import html from '../Images/html.png'
import java from '../Images/java.png'
import js from '../Images/js.png'
import node from '../Images/node.png'
import react from '../Images/react.png'

const Skills = () => {


  return (
    <div>
    <h2 className="skills-title">Skills</h2><br></br>
    <section className="skills-section">
      {/* Programming Languages */}
      <div className="skills-category">
        <h3 className="skills-subtitle">Programming Languages</h3>
        <div className="skills-list">
          <div className="skill-item">
          <img src={java} alt="MongoDB" className="skill-icon" />
            <p>Java</p>
          </div>
          <div className="skill-item">
          <img src={c} alt="MongoDB" className="skill-icon" />
            <p>C</p>
          </div>
          <div className="skill-item">
          <img src={js} alt="MongoDB" className="skill-icon" />
            <p>JavaScript</p>
          </div>
        </div>
      </div>

      {/* Web Development */}
      <div className="skills-category">
        <h3 className="skills-subtitle">Web Development</h3>
        <div className="skills-list">
          <div className="skill-item">
          <img src={html} alt="MongoDB" className="skill-icon" />
            <p>HTML</p>
          </div>
          <div className="skill-item">
          <img src={css} alt="MongoDB" className="skill-icon" />
            <p>CSS</p>
          </div>
          <div className="skill-item">
          <img src={react} alt="MongoDB" className="skill-icon" />
            <p>React.js</p>
          </div>
        </div>
      </div>

      {/* Backend Development */}
      <div className="skills-category">
        <h3 className="skills-subtitle">Backend Development</h3>
        <div className="skills-list">
          <div className="skill-item">
          <img src={node} alt="MongoDB" className="skill-icon" />
            <p>Node.js</p>
          </div>
          <div className="skill-item">
          <img src={express} alt="MongoDB" className="skill-icon" />
            <p>Express.js</p>
          </div>
        </div>
      </div>

      {/* Database Management */}
      <div className="skills-category">
        <h3 className="skills-subtitle">Database Management</h3>
        <div className="skills-list">
        <div className="skill-item">
            <img src={Mongodb} alt="MongoDB" className="skill-icon" />
            <p>MongoDB</p>
          </div>
          <div className="skill-item">
          <img src={Mysql} alt="MongoDB" className="skill-icon" />
            <p>MySQL</p>
          </div>
        </div>
      </div>


      {/* Version Control */}
      <div className="skills-category">
        <h3 className="skills-subtitle">Version Control</h3>
        <div className="skills-list">
          <div className="skill-item">
          <img src={git} alt="MongoDB" className="skill-icon" />
            <p>GitHub</p>
          </div>
        </div>
      </div>
    </section>
    </div>
  );
};

export default Skills;
