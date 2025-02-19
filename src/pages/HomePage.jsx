import React from 'react';
import { useNavigate } from 'react-router-dom';
import AboutMe from '../components/AboutMe';
import GameScene from '../components/GameScene';
import WhoAmI from '../components/WhoAmI';

const HomePage = () => {
  const navigate = useNavigate();
  return (
    <div className="w-screen min-h-screen bg-gray-100 p-6">
      <h1 className="text-3xl font-bold mb-6 text-center">My Portfolio</h1>
      <div className="flex flex-row justify-between items-start w-full max-w-6xl mx-auto flex-nowrap space-x-4">

        <div className="flex-shrink-0 bg-white p-4 rounded shadow-md w-64">
          <h2 className="text-xl font-semibold mb-2 text-center">About Me</h2>
          <AboutMe />
          <button
            onClick={() => navigate('/about')}
            className="mt-4 w-full bg-green-500 text-white px-3 py-2 rounded hover:bg-green-600"
          >
            Learn More
          </button>
        </div>

        <div className="flex-shrink-0 bg-white p-4 rounded shadow-md w-128">
          <h2 className="text-xl font-semibold mb-2 text-center">Game</h2>
          <GameScene />
          <button
            onClick={() => navigate('/game')}
            className="mt-4 w-full bg-blue-500 text-white px-3 py-2 rounded hover:bg-blue-600"
          >
            See Full Game
          </button>
        </div>
        
        <div className="flex-shrink-0 bg-white p-4 rounded shadow-md w-64">
          <h2 className="text-xl font-semibold mb-2 text-center">Who Am I</h2>
          <WhoAmI />
          <button
            onClick={() => navigate('/whoami')}
            className="mt-4 w-full bg-purple-500 text-white px-3 py-2 rounded hover:bg-purple-600"
          >
            Social Info
          </button>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
