import React from 'react';
import './Projects.css';

function Projects() {
  return (
    <div className="projects-container">
      <div className="projects-content">
        <h2 className="projects-title">Projects</h2>

        <div className="projects-grid">

          <div className="project-card">
            <h3 className="project-name">PollStart - Online Voting System</h3>
            <p className="project-tech">Django, React, JWT</p>
            <p className="project-desc">
              Built a secure voting platform with JWT-based authentication, duplicate vote prevention, and full CRUD operations for polls.
            </p>
          </div>

          <div className="project-card">
            <h3 className="project-name">FindCure - Drug Recommendation System</h3>
            <p className="project-tech">Reinforcement Learning, Machine Learning</p>
            <p className="project-desc">
              Developed a system that predicts optimal dosages using RL, improving accuracy with a custom-engineered dataset.
            </p>
          </div>

          <div className="project-card">
            <h3 className="project-name">Botanic Shield - Plant Disease Detection</h3>
            <p className="project-tech">Deep Learning, Computer Vision</p>
            <p className="project-desc">
              Achieved 89% accuracy in detecting plant diseases using CNNs and built a real-time disease detection web interface.
            </p>
          </div>

        </div>
      </div>
    </div>
  );
}

export default Projects;
