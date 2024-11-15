import React, { useState } from 'react';
import axios from 'axios';
import './Contact.css';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const [responseMessage, setResponseMessage] = useState('');
  const [responseType, setResponseType] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await axios.post('/api/contact', formData);
      if (res.data.success) {
        setResponseType('success');
        setResponseMessage(res.data.message); // Success message
      }
    } catch (error) {
      setResponseType('error');
      setResponseMessage(error.response?.data.message || 'Failed to submit contact form');
    }
  };

  return (
    <div className="contact-form">
      <h2>Contact Us</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          placeholder="Your Name"
          value={formData.name}
          onChange={handleChange}
          required
        />
        <input
          type="email"
          name="email"
          placeholder="Your Email"
          value={formData.email}
          onChange={handleChange}
          required
        />
        <textarea
          name="message"
          placeholder="Your Message"
          value={formData.message}
          onChange={handleChange}
          required
        />
        <button type="submit">Submit</button>
      </form>

      {responseMessage && (
        <div className={`response-message ${responseType}`}>
          {responseMessage}
        </div>
      )}
    </div>
  );
};

export default ContactForm;
