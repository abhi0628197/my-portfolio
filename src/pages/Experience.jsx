import React from 'react';
import './Experience.css';

function Experience() {
  return (
    <div className="experience-container">
      <div className="experience-content">
        <h2 className="experience-title">Experience</h2>

        <div className="experience-item">
          <h3 className="experience-role">Front-End Developer Intern</h3>
          <p className="experience-company">MHCognition <span className="experience-duration">Jan 2025 – May 2025</span></p>
          <ul className="experience-list">
            <li>Developed scalable front-end applications using React.</li>
            <li>Integrated Django backend APIs for seamless data flow.</li>
            <li>Contributed to mobile app development using React Native.</li>
          </ul>
        </div>

        <div className="experience-item">
          <h3 className="experience-role">Salesforce Virtual Internship</h3>
          <p className="experience-company">SmartBridge</p>
          <ul className="experience-list">
            <li>Built custom CRM applications with Salesforce tools.</li>
            <li>Implemented automation via Flow and Process Builder.</li>
            <li>Worked with Apex and Lightning Web Components.</li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Experience;
