import React from 'react';
import './AboutMe.css';

export default function AboutMe (){
  return (
    <div className="about-me-container">
      <header className="about-me-header">
        <h1 className="about-me-title">About FeastFinders</h1>
      </header>
      <img 
        src="your-image-url.jpg" 
        alt="Your Name" 
        className="about-me-image" 
      />
      <p className="about-me-description">
    FeastFinders is an open-source platform where any restaurant owner can set up
    their own online food delivery platform without relying on the limits imposed 
    by the big food delivery apps.
      </p>
    </div>
  );
};
