import React from 'react';
import './Home.css';
import profilePic from '../assets/profile.jpg';  // adjust the path as per your folder structure

const HomePage = () => {
  return (
    <section className="hero">
      <div className="hero-text">
        <p className="intro">HELLO</p>
        <h1>I AM <span className="highlight">ABHINAYA</span></h1>
        <h2>SOFTWARE DEVELOPER</h2>
        <div className="buttons">
          <a href="contact" className="btn-primary">HIRE ME</a>
          <a href="/Abhinaya_Resume.pdf" className="btn-outline" download>
            GET CV
          </a>
        </div>
      </div>
      <div className="hero-image">
        <img 
          src={profilePic} 
          alt="Abhinaya Profile"
        />
      </div>
    </section>
  );
};

export default HomePage;
