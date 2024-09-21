import React from 'react';
import './FAQ.css'; // Import the CSS file

export default function FAQ () {
  return (
    <div className="faq-container">
      <header className="faq-header">
        <h1 className="faq-title">FAQ Page</h1>
      </header>
      <div className="faq-content">
        <p className="faq-description">
          Welcome to our Customer Care section! Here are some frequently asked questions to help you.
        </p>
        <ul className="faq-list">
          <li>
            <strong>Question 1: What is your return policy?</strong>
            <p>Answer: Our return policy allows returns within 30 days of purchase.</p>
          </li>
          <li>
            <strong>Question 2: How can I track my order?</strong>
            <p>Answer: You can track your order using the tracking link sent to your email.</p>
          </li>
          <li>
            <strong>Question 3: Do you offer customer support?</strong>
            <p>Answer: Yes, we offer customer support via email and phone.</p>
          </li>
        </ul>
      </div>
    </div>
  );
};