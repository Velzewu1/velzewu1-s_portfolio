import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function ContactForm() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const handleChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    alert("Form submitted!");
    setFormData({ name: '', email: '', subject: '', message: '' });
  };

  const baseInputClass =
    "w-full p-3 rounded-lg shadow-[0_10px_20px_rgba(0,0,0,0.1)] bg-cyan-100 bg-opacity-10 text-white placeholder-gray-400 focus:outline-none focus:border-blue-500 focus:shadow-lg transition-all duration-300";
  
  // Note the leading space added here.
  const textareaClass = baseInputClass + " resize-none p-6 overflow-hidden scrollbar-hide";
  
  const baseBackgroundClass = "relative w-screen h-screen font-retro";
  
  // Retro overlay with filters and scanline effect
  const retroOverlayClass =
    baseBackgroundClass +
    " filter contrast-[1.2] saturate-[1.3] brightness-[0.9] hue-rotate-[-5deg] z-10 w-screen h-[200vh] bg-gradient-to-br from-[#3a0f5e] via-[#1e0d33] to-black ";
  
  const beforeClass =
    "before:content-[''] before:absolute before:inset-0 before:w-full before:h-full before:bg-[linear-gradient(rgba(0,0,0,0)_50%,rgba(0,0,0,0.5)_50%)] before:bg-[size:100%_4px] before:opacity-50 before:pointer-events-none";
  
  // Web background with a darker gradient pattern from the same scheme
  const webBackgroundClass =
    "bg-gradient-to-br from-[#161027] via-[#1e0a2a] to-black opacity-100";

  return (
    <div className={retroOverlayClass + beforeClass}>
      <div className={webBackgroundClass + " absolute inset-0 z-0"} />
      <span
        onClick={() => navigate('/home')}
        className="absolute bottom-11 rounded-xl right-9 transform -translate-x-1/2 z-30 px-6 py-3 text-white font-semibold hover:opacity-100 transition-colors shadow-[0_10px_20px_rgba(0,0,0,0.7)] opacity-80 cursor-pointer"
      >
        Go back
      </span>
      <div className="relative z-20 flex items-center justify-center min-h-screen p-6">
        <div className={"max-w-md mx-auto p-8 rounded-xl shadow-[0_10px_20px_rgba(0,0,0,0.5)] text-white bg-gradient-to-br from-[#1A0A2E] via-[#2A1240] to-[#4B1E77]" + beforeClass}>
          <h2 className="text-3xl font-bold mb-6 text-center drop-shadow-[0_0_8px_#0ff] uppercase">
            Contact Me
          </h2>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label htmlFor="name" className="block mb-1 font-semibold">Name</label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className={baseInputClass}
              />
            </div>
            <div>
              <label htmlFor="email" className="block mb-1 font-semibold">Email</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className={baseInputClass}
              />
            </div>
            <div>
              <label htmlFor="subject" className="block mb-1 font-semibold">Subject</label>
              <input
                type="text"
                id="subject"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                required
                className={baseInputClass}
              />
            </div>
            <div>
              <label htmlFor="message" className="block mb-1 font-semibold">Message</label>
              <textarea
                id="message"
                name="message"
                rows="4"
                value={formData.message}
                onChange={handleChange}
                required
                className={baseInputClass}
              ></textarea>
            </div>
            <button type="submit" className={textareaClass}>
              Send
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default ContactForm;
