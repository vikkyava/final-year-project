// src/components/ContactForm.js
import React, { useState } from 'react';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const [error, setError] = useState('');

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!formData.name || !formData.email || !formData.message) {
      setError('All fields are required.');
      return;
    }

    setError('');
    alert('Form submitted successfully!');
    
    // You can add additional form submission logic here (e.g., API call)

    setFormData({
      name: '',
      email: '',
      message: '',
    });
  };

  return (
    <div className="flex justify-center items-center h-screen bg-gray-100 max-w-6xl mx-auto">
      <form onSubmit={handleSubmit} className="bg-white p-8 rounded-lg shadow-md max-w-md w-full">
        <h2 className="text-2xl font-bold mb-6 text-center text-gray-700">Contact Us</h2>
        
        {error && <p className="text-red-500 mb-4">{error}</p>}

        <div className="mb-4">
          <label htmlFor="name" className="block text-gray-700 font-semibold mb-2">Name</label>
          <input
            type="text"
            name="name"
            id="name"
            value={formData.name}
            onChange={handleChange}
            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-300"
            placeholder="Your Name"
          />
        </div>

        <div className="mb-4">
          <label htmlFor="email" className="block text-gray-700 font-semibold mb-2">Email</label>
          <input
            type="email"
            name="email"
            id="email"
            value={formData.email}
            onChange={handleChange}
            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-300"
            placeholder="Your Email"
          />
        </div>

        <div className="mb-4">
          <label htmlFor="message" className="block text-gray-700 font-semibold mb-2">Message</label>
          <textarea
            name="message"
            id="message"
            value={formData.message}
            onChange={handleChange}
            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-300"
            placeholder="Your Message"
            rows="5"
          />
        </div>

        <button
          type="submit"
          className="w-1/3 bg-green-600 text-white py-2 px-4 rounded-lg hover:bg-green-900 transition duration-300"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default ContactForm;
