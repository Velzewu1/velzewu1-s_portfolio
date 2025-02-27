import React from 'react';
import { useNavigate } from 'react-router-dom';
import AboutMe from '../components/AboutMe';
import GameScene from '../components/GameScene';
import MySkills from '../components/MySkills';
import ParticleBackground from '../components/ParticleBackground';
import SpaceObject from '../components/SpaceObjectManager';
import TypingText from '../components/TypingText';

const beforeClasses = "before:content-[''] before:absolute before:inset-0 before:w-full before:h-full before:bg-[linear-gradient(rgba(0,0,0,0)_50%,rgba(0,0,0,0.5)_50%)] before:bg-[size:100%_4px] before:opacity-50 before:pointer-events-none";

const HomePage = () => {
  const navigate = useNavigate();
  return (
    <div className={`relative font-retro filter contrast-[1.2] saturate-[1.3] brightness-[0.9] hue-rotate-[-5deg]
      z-10 w-screen h-[200vh] bg-gradient-to-br from-[#1A0A2E] via-[#2A1240] to-[#4B1E77] p-6 overflow-hidden scrollbar-hide`}
    >
      <ParticleBackground className="z-20 w-screen" />

      <h1 className={`font-retro relative text-2xl font-semibold leading-normal mb-6 text-center text-cyan-300 drop-shadow-[0_0_8px_#0ff] uppercase ${beforeClasses}`}>
        <span className='underline'>My name is Velzewu1 and I'm</span> <br />
        <TypingText />
      </h1>

      <span onClick={() => navigate('/contact')} className="absolute top-11 rounded-xl right-10 transform -translate-x-1/2 z-30 px-6 py-3 text-white font-semibold hover:opacity-100 transition-colors shadow-[0_10px_20px_rgba(0,0,0,0.7)] opacity-80">
        Contact Me
      </span>
      
      <div className="flex flex-row justify-around items-start w-full mx-auto flex-wrap space-x-4">
        <div className={`flex-shrink-0 bg-[#2A1240] text-gray-200 p-4 rounded-xl shadow-md shadow-purple-900 w-80 relative transition-all duration-300 hover:w-96 ${beforeClasses}`}>
            <div className="max-h-[50vh] overflow-y-auto scrollbar-hide">
              <AboutMe />
            </div>
            <button
              onClick={() => navigate('/about')}
              className="mt-4 w-full bg-pink-500 text-white px-3 py-2 rounded-xl hover:bg-pink-600 shadow-md border border-pink-500"
            >
              Learn More
            </button>
        </div>
        
        <div className={`flex-shrink-0 bg-[#2A1240] text-gray-200 p-4 rounded-xl shadow-md shadow-purple-900 w-128 relative ${beforeClasses}`}>
          <h2 className="text-xl font-semibold mb-2 text-center">Hall Of Fame</h2>
          <GameScene />
          <button
            onClick={() => navigate('/game')}
            className="mt-4 w-full bg-blue-500 text-white px-3 py-2 rounded-xl hover:bg-blue-600 shadow-md border border-blue-500"
          >
            See Full Game
          </button>
        </div>
        
        <div className={`flex-shrink-0 bg-[#2A1240] text-gray-200 p-4 rounded-xl shadow-md shadow-purple-900 w-80 relative transition-all duration-300 hover:w-96 ${beforeClasses}`}>
          <div className="max-h-[50vh] overflow-y-auto scrollbar-hide">
            <MySkills />
            </div>
          <button
            onClick={() => navigate('/myskills')}
            className="mt-4 w-full bg-purple-500 text-white px-3 py-2 rounded-xl hover:bg-purple-600 shadow-md border border-purple-500"
          >
            Social Info
          </button>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
