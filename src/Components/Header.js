import React from 'react';
import '../Style/Header.css';

const Header = () => {
  return (
    <nav className="navbar">
      <div className="logo">  Vithyawessalini</div>
      <ul className="nav-links">
        <li><a href="/portfolio">Home</a></li>
        <li><a href="/about">About</a></li>
        <li><a href="/skills">Skills</a></li>
        <li><a href="/projects">Project</a></li>
        <li><a href="/contact">Contact</a></li>
      </ul>
    </nav>
  );
};

export default Header;
