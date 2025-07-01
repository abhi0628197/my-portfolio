import React from 'react';
import './About.css';

function About() {
  return (
    <div className="about-container">
      <div className="about-content">
        <h2 className="about-title">About Me</h2>
        <p className="about-text">
          I’m <strong>Gangannagari Abhinaya</strong>, a passionate <strong>Frontend Developer</strong> specializing in 
          <strong> React, React Native, JavaScript</strong>, and modern CSS frameworks like <strong>Tailwind CSS</strong> and <strong>Bootstrap</strong>. 
          I also have experience integrating <strong>Django REST APIs</strong> and working on mobile apps. My focus is 
          on building responsive, user-friendly web applications that provide seamless user experiences.
        </p>
        <p className="about-text">
          With a strong background in <strong>Artificial Intelligence & Machine Learning</strong>, I enjoy solving complex problems 
          through clean, efficient code. I am committed to continuous learning and keeping up with the latest technologies 
          and trends in web development.
        </p>
        <p className="about-text">
          During my journey, I have interned at <strong>MHCognition</strong> as a Front-End Developer, contributing to scalable applications 
          and mobile development. I have also completed a <strong>Salesforce virtual internship</strong> with SmartBridge, enhancing CRM 
          automation and workflows.
        </p>
        <p className="about-contact">
          📧 Reach me at: <a href="mailto:abhinaya0628@gmail.com">abhinaya0628@gmail.com</a><br/>
          🔗 Connect on: <a href="https://linkedin.com/in/gangannagari-abhinaya-934b02293" target="_blank" rel="noopener noreferrer">LinkedIn</a>
        </p>
      </div>
    </div>
  );
}

export default About;
