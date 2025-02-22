import React from 'react';
import { useNavigate } from 'react-router-dom';
import AboutMe from '../components/AboutMe';
import GameScene from '../components/GameScene';
import WhoAmI from '../components/WhoAmI';

const HomePage = () => {
  const navigate = useNavigate();
  return (
    <div className="w-screen min-h-screen bg-[#1A0A2E] p-6">
      <h1 className="text-3xl font-bold mb-6 text-center text-cyan-300 drop-shadow-[0_0_8px_#0ff] font-mono uppercase">
        My Portfolio
      </h1>
      <div className="flex flex-row justify-around items-start w-full mx-auto flex-nowrap space-x-4">
        <div className="flex-shrink-0 bg-[#2A1240] text-gray-200 p-4 rounded-xl shadow-md shadow-purple-900 w-80 relative before:content-[''] before:absolute before:inset-0 before:w-full before:h-full before:bg-[linear-gradient(rgba(0,0,0,0)_50%,rgba(0,0,0,0.2)_50%)] before:bg-[size:100%_4px] before:opacity-50 transition-all duration-300 hover:w-96">
          <h2 className="text-xl font-semibold mb-2 text-center">About Me</h2>
          <AboutMe />
          <button
            onClick={() => navigate('/about')}
            className="mt-4 w-full bg-pink-500 text-white px-3 py-2 rounded-xl hover:bg-pink-600 shadow-[0_0_8px_#ff00ff] border-2 border-pink-500"
          >
            Learn More
          </button>
        </div>
        <div className="flex-shrink-0 bg-[#2A1240] text-gray-200 p-4 rounded-xl shadow-md shadow-purple-900 w-128 relative before:content-[''] before:absolute before:inset-0 before:w-full before:h-full before:bg-[linear-gradient(rgba(0,0,0,0)_50%,rgba(0,0,0,0.2)_50%)] before:bg-[size:100%_4px] before:opacity-50">
          <h2 className="text-xl font-semibold mb-2 text-center">Game</h2>
          <GameScene />
          <button
            onClick={() => navigate('/game')}
            className="mt-4 w-full bg-blue-500 text-white px-3 py-2 rounded-xl hover:bg-blue-600 shadow-[0_0_8px_#00ffff] border-2 border-blue-500"
          >
            See Full Game
          </button>
        </div>
        <div className="flex-shrink-0 bg-[#2A1240] text-gray-200 p-4 rounded-xl shadow-md shadow-purple-900 w-80 relative before:content-[''] before:absolute before:inset-0 before:w-full before:h-full before:bg-[linear-gradient(rgba(0,0,0,0)_50%,rgba(0,0,0,0.2)_50%)] before:bg-[size:100%_4px] before:opacity-50">
          <h2 className="text-xl font-semibold mb-2 text-center">Who Am I</h2>
          <WhoAmI />
          <button
            onClick={() => navigate('/whoami')}
            className="mt-4 w-full bg-purple-500 text-white px-3 py-2 rounded-xl hover:bg-purple-600 shadow-[0_0_8px_#8000ff] border-2 border-purple-500"
          >
            Social Info
          </button>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
