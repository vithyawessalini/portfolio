import React from 'react';
import '../Style/Contact.css';

const Contact = () => {
  return (
    <section className="contact-section">
      <h2>Contact Me</h2>
      <p>If you have any questions or want to get in touch, feel free to contact me at:</p>
      <p>Email: <a href="mailto:vithyawessalini@gmail.com">vithyawessalini@gmail.com</a></p>
      <p>Phone: <a href="tel:8056987476">8056987476</a></p>
      <p>Connect with me on:</p>
      <ul>
        <li><a href="https://linkedin.com/in/vithyawessalini-a-p" target="_blank" rel="noopener noreferrer">LinkedIn</a></li>
        <li><a href="https://github.com/vithyawessalini" target="_blank" rel="noopener noreferrer">GitHub</a></li>
        <li><a href="https://leetcode.com/vithyawessalini" target="_blank" rel="noopener noreferrer">LeetCode</a></li>
      </ul>
    </section>
  );
};

export default Contact;
