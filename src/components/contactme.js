// Contact.js
import React from 'react';
import '../styles/ContactMe.css'; // Import your styles

const Contact = () => {
    const email = 'kushpatel11100@gmail.com';
  const linkedinProfile = 'https://www.linkedin.com/in/kush-patel-341815222/';
  return (
    <section id="contact">
      <div className="contact-container">
      <h2>Contact Me</h2>
        <p>
          Feel free to reach out to me. You can contact me via email or through
          social media.
        </p>
        <div className="contact-details">
          <p>Email: <a href={`mailto:${email}`}>{email}</a></p>
          <p>LinkedIn: <a href={linkedinProfile} target="_blank" rel="noopener noreferrer">{linkedinProfile}</a></p>
        </div>
      </div>
    </section>
  );
};
export default Contact;
