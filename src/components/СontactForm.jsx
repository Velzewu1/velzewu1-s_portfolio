import React, { useState } from 'react';
import './Weather.css'; // or your global CSS file that contains your retro styles

function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    alert("Form submitted!");
    setFormData({ name: '', email: '', subject: '', message: '' });
  };

  return (
    <div className="relative font-retro filter contrast-[1.2] saturate-[1.3] brightness-[0.9] hue-rotate-[-5deg] 
      w-full min-h-screen bg-gradient-to-br from-[#1A0A2E] via-[#2A1240] to-[#4B1E77] flex items-center justify-center p-6 overflow-hidden scrollbar-hide"
    >
      <form 
        onSubmit={handleSubmit} 
        className="max-w-md w-full bg-gray-800 bg-opacity-80 p-8 rounded-lg shadow-lg text-white"
      >
        <h2 className="text-3xl font-bold mb-6 text-center">Contact Me</h2>
        <div className="mb-4">
          <label htmlFor="name" className="block mb-1 font-semibold">Name</label>
          <input 
            type="text" 
            id="name" 
            name="name" 
            value={formData.name} 
            onChange={handleChange} 
            required 
            className="w-full p-2 rounded bg-gray-700 border border-gray-600 focus:outline-none focus:border-blue-500" 
          />
        </div>
        <div className="mb-4">
          <label htmlFor="email" className="block mb-1 font-semibold">Email</label>
          <input 
            type="email" 
            id="email" 
            name="email" 
            value={formData.email} 
            onChange={handleChange} 
            required 
            className="w-full p-2 rounded bg-gray-700 border border-gray-600 focus:outline-none focus:border-blue-500" 
          />
        </div>
        <div className="mb-4">
          <label htmlFor="subject" className="block mb-1 font-semibold">Subject</label>
          <input 
            type="text" 
            id="subject" 
            name="subject" 
            value={formData.subject} 
            onChange={handleChange} 
            required 
            className="w-full p-2 rounded bg-gray-700 border border-gray-600 focus:outline-none focus:border-blue-500" 
          />
        </div>
        <div className="mb-4">
          <label htmlFor="message" className="block mb-1 font-semibold">Message</label>
          <textarea 
            id="message" 
            name="message" 
            rows="4" 
            value={formData.message} 
            onChange={handleChange} 
            required 
            className="w-full p-2 rounded bg-gray-700 border border-gray-600 focus:outline-none focus:border-blue-500"
          ></textarea>
        </div>
        <button 
          type="submit" 
          className="w-full py-3 bg-blue-500 rounded hover:bg-blue-600 transition-colors font-bold"
        >
          Send
        </button>
      </form>
    </div>
  );
}

export default ContactForm;
