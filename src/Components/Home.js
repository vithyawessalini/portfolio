import React from 'react';
import '../Style/Home.css';
import image from '../Images/img1.png'
import Type from './Type';
const Home = () => {
  return (
    <header className="main-content">
      <div className="text-content">
        <h1 style={{fontSize:'40px'}}>Hi{" "}<span className="wave" role="img" aria-labelledby="wave">
                  👋🏻
                </span></h1><br/>
        <h2>I'm <span className="name-highlight">VITHYAWESSALINI</span></h2>
        <h3><Type/></h3>
        <br/>
        
        <p>I'm a Software Developer, graduated with a B.Tech in Information Technology from <b>Kongu Engineering College</b>, Perundurai.</p>
        
        {/* <button className="contact-button">Contact</button> */}
      </div>
      <div className="image-content">
        <img src={image} alt="loading" style={{width:'500px'}}/>
      </div>
    </header>
  );
};

export default Home;
