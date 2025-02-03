import React from 'react';
import '../Style/About.css'; // Ensure you have the corresponding CSS file for styling
import profileImage from '../Images/profile.png'; // Update the path to your image
import Header from './Header';
const About = () => {
  return (
    <div style={{paddingTop:'600px'}}>
      <section className="about-section">
        <div className="image-content">
          <img src={profileImage} alt="Profile" />
        </div>&emsp;&emsp;&emsp;
        <div className="text-content">
          <h1>About Me</h1>
          <p>
            I am a final year IT undergraduate driven by a deep passion for technology.
            With a self-motivated and proactive attitude, I excel in challenging and 
            dynamic environments. I am seeking a competitive role where I can further 
            develop my skills and make valuable contributions to a forward-thinking organization.
            My enthusiasm for continuous learning fuels my desire to explore new areas and 
            stay updated with the latest advancements in technology. I am committed to personal 
            and professional growth, and I am eager to bring my dedication and expertise to a professional setting.
          </p>
          <div className="stats-container">
            <div className="stat">
              <h2>08.35</h2>
              <p>Aggregate <br />CGPA</p>
            </div>
            <div className="stat">
              <h2>03+</h2>
              <p>Frontend<br /> Projects</p>
            </div>
          </div>
        </div>
      </section>
      <div className="education-section">
        <h2>Education</h2><br/><br/>
        <div className="timeline">
          <div className="timeline-item">
            <div className="timeline-dot"></div>
            <div className="timeline-content">
              <h3>B.Tech in Information Technology</h3>
              <p>Kongu Engineering College</p>
              <p>CGPA: 8.35 (till 7th semester)</p>
              <p>2021 – 2025</p>
            </div>
          </div>
          <div className="timeline-item">
            <div className="timeline-dot"></div>
            <div className="timeline-content">
              <h3>Higher Secondary Certificate</h3>
              <p>Lions Matriculation Higher Secondary School</p>
              <p>Percentage: 80%</p>
              <p>2020 – 2021</p>
            </div>
          </div>
          <div className="timeline-item">
            <div className="timeline-dot"></div>
            <div className="timeline-content">
              <h3>Secondary School Leaving Certificate</h3>
              <p>Lions Matriculation Higher Secondary School</p>
              <p>Percentage: 73%</p>
              <p>2018 – 2019</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
