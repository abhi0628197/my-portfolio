import React from 'react';
import './Contact.css';

function Contact() {
  return (
    <div className="contact-container">
      <div className="contact-content">
        <h2 className="contact-title">Contact Me</h2>
        <div className="contact-info">
          <p>
            📞 <span className="contact-label">Phone:</span> <a href="tel:6304057554">6304057554</a>
          </p>
          <p>
            📧 <span className="contact-label">Email:</span> <a href="mailto:abhinaya0628@gmail.com">abhinaya0628@gmail.com</a>
          </p>
          <p>
            🔗 <span className="contact-label">LinkedIn:</span> <a href="https://linkedin.com/in/gangannagari-abhinaya-934b02293" target="_blank" rel="noopener noreferrer">linkedin.com/in/gangannagari-abhinaya</a>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Contact;
