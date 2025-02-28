import React from "react";

const AboutMe = () => {
  const beforeExpand = "before:content-[''] before:absolute before:inset-0 before:w-full before:h-full"
  const beforeClass = "before:content-[''] before:absolute before:inset-0 before:w-full before:h-full before:bg-[linear-gradient(rgba(0,0,0,0)_50%,rgba(0,0,0,0.5)_50%)] before:bg-[size:100%_4px] before:opacity-50 before:pointer-events-none";

  return (
    <div className={"relative w-full h-full font-retro text-white overflow-y-auto scrollbar-hide p-6" + beforeExpand}>
      <div className="relative z-10 max-w-2xl mx-auto bg-[#1A0A2E] p-6 rounded-lg shadow-lg border-2 border-cyan-500 
          filter contrast-[1.2] saturate-[1.3] brightness-[0.9] hue-rotate-[-5deg]
          ">
        <div className={"flex flex-col items-center mb-8" + beforeClass}>
          <img
            src="assets/images/DALL·E-2025-02-17-23.29.jpg"
            alt="My Photo"
            className="w-32 h-32 rounded-full object-cover shadow-lg mb-4 border-2 border-cyan-300"
          />
          <h1 className={"text-3xl font-bold text-cyan-300 text-center uppercase tracking-wider" + beforeClass}>
            About Me
          </h1>
        </div>
        <div className="space-y-6">
          <div className="bg-opacity-10 p-4 rounded-lg">
            <p>
              Hi, I'm Velzewu1 – a passionate software developer with a creative spirit. I enjoy exploring new technologies and blending art with code.
            </p>
          </div>
          <div className="bg-opacity-10 p-4 rounded-lg">
            <h2 className="text-2xl font-semibold text-pink-400 mb-2">My Work</h2>
            <p>
              I specialize in game development, front-end and back-end web development, desktop applications, and cybersecurity. I create immersive digital experiences and robust, secure software solutions.
            </p>
          </div>
          <div className="bg-opacity-10 p-4 rounded-lg">
            <h2 className="text-2xl font-semibold text-pink-400 mb-2">My Mission</h2>
            <p>
              My mission is to push the boundaries of technology while ensuring digital security. I combine creativity with technical expertise to deliver innovative, secure, and engaging products.
            </p>
          </div>
          <div className="bg-opacity-10 p-4 rounded-lg">
            <h2 className="text-2xl font-semibold text-pink-400 mb-2">Beyond Work</h2>
            <p>
              Outside of coding and development, I'm a passionate musician. I explore new sounds and creative expressions, bringing an artistic perspective to my technical work.
            </p>
          </div>
        </div>
        <div className="flex items-center justify-center mt-6 space-x-6">
          <a href="https://www.instagram.com/st.ang4r?igsh=cXU3cndzYXdsZWJv&utm_source=qr" target="_blank" rel="noopener noreferrer">
            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a5/Instagram_icon.png/768px-Instagram_icon.png" alt="Instagram" className="w-8 h-8 hover:scale-110 transition-transform" />
          </a>
          <a href="https://www.reddit.com/user/Velzewu1/" target="_blank" rel="noopener noreferrer">
            <img src="https://seeklogo.com/images/R/reddit-icon-new-2023-logo-3F12137D65-seeklogo.com.png" alt="Reddit" className="w-8 h-8 hover:scale-110 transition-transform" />
          </a>
          <a href="https://www.youtube.com/@velzewul7927" target="_blank" rel="noopener noreferrer">
            <img src="https://upload.wikimedia.org/wikipedia/commons/e/ef/Youtube_logo.png" alt="YouTube" className="w-8 h-8 hover:scale-110 transition-transform" />
          </a>
          <a href="https://github.com/Velzewu1" target="_blank" rel="noopener noreferrer">
            <img src="https://images.seeklogo.com/logo-png/50/2/github-icon-logo-png_seeklogo-503247.png" alt="GitHub" className="w-8 h-8 hover:scale-110 transition-transform" />
          </a>
          <a href="https://t.me/Velzewu1" target="_blank" rel="noopener noreferrer">
            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/5c/Telegram_Messenger.png/800px-Telegram_Messenger.png" alt="Telegram" className="w-8 h-8 hover:scale-110 transition-transform" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
