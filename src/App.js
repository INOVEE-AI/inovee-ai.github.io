import React, { useState } from 'react';
import './App.css'; // Ensure your styles are here
import logo from './inovee-logo.png'; // Import your logo image

function App() {
  const [email, setEmail] = useState('');
  const [subject, setSubject] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = { email, subject, message };
    // You would replace this section with your email handling logic
    console.log('Form Data Submitted: ', formData);
    alert('Thank you for reaching out! We will get back to you soon.');
  };

  return (
    <div className="App">
      <div className="header">
        <img src={logo} alt="Inovee AI" className="logo" />
      </div>
      <div className="landing-content">
        <h1 className="title">
          INOVEE <span className="highlight">AI</span>
        </h1>
        <div className="coming-soon">Launching Soon...</div>
        <p className="slogan">
          Innovating Energy Efficiency: <span className="highlight">AI</span>-Powered Solutions for Smart Buildings
        </p>
      </div>
      <div className="footer">
        <p className="footer-text">INOVEE AI 2024, All rights reserved</p>
        <button className="contact-button" onClick={() => document.getElementById('contact-form').style.display = 'block'}>
          Get in Touch
        </button>
      </div>

      <div id="contact-form" className="modal" style={{ display: 'none' }}>
        <form className="form" onSubmit={handleSubmit}>
          <h2>Contact Us</h2>
          <label>Email:</label>
          <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
          <label>Subject:</label>
          <input type="text" value={subject} onChange={(e) => setSubject(e.target.value)} required />
          <label>Message:</label>
          <textarea value={message} onChange={(e) => setMessage(e.target.value)} required />
          <button type="submit">Send</button>
        </form>
        <button className="close-button" onClick={() => document.getElementById('contact-form').style.display = 'none'}>
          Close
        </button>
      </div>
    </div>
  );
}

export default App;