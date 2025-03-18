"use client";
import React, { useState } from 'react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Logique pour soumettre le formulaire, par exemple, via une API
    console.log(formData);
  };

  return (
    <div className="bg-black text-white flex items-center justify-center h-screen">
      <div className="bg-gray-950 p-8 rounded-lg shadow-lg w-full max-w-lg">
        <h1 className="text-4xl font-bold text-center mb-6">Get in touch</h1>
        <p className='text-1xs text-center mb-6'>I'm always interested in hearing about new projects and opportunities. Drop me a message !</p>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label htmlFor="name" className="block text-lg font-medium text-gray-200">Name</label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="w-full p-3 mt-2 bg-gray-900 text-white border border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-500"
              placeholder="Your Name"
            />
          </div>
          
          <div className="mb-4">
            <label htmlFor="email" className="block text-lg font-medium text-gray-200">Email Address</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="w-full p-3 mt-2 bg-gray-900 text-white border border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-500"
              placeholder="Your Email"
            />
          </div>

          <div className="mb-4">
            <label htmlFor="message" className="block text-lg font-medium text-gray-200">Message</label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              className="w-full p-3 mt-2 bg-gray-900 text-white border border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-500"
              placeholder="Your Message"
              rows={4}
            />
          </div>

          <button type="submit" className="w-full py-3 bg-yellow-500 text-gray-900 font-bold rounded-lg hover:bg-yellow-400 transition duration-300">
            Send Message
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
