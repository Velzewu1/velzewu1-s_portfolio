import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import HomePage from './pages/HomePage';
import GamePage from './pages/GamePage';
import AboutPage from './pages/AboutPage';
import WhoAmIPage from './pages/MySkillsPage';
import ContactPage from './pages/ContactPage';
import Banana3d from './components/banana3d';

function App() {
  const [redirectProgress, setRedirectProgress] = useState(0.01);

  useEffect(() => {
    const interval = setInterval(() => {
      setRedirectProgress(prev => {
        if (prev >= 5) {
          clearInterval(interval);
          return 1;
        }
        return prev * 1.1;
      });
    }, 100);

    return () => clearInterval(interval);
  }, []);

  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={
            redirectProgress >= 2 ? (
              <Navigate to="/home" />
            ) : (
              <div className=" filter contrast-[1.2] saturate-[1.3] brightness-[0.9] hue-rotate-[-5deg]
              w-screen h-screen bg-[#1A0A2E] flex flex-col justify-center items-center text-cyan-300 font-mono 
              before:content-[''] 
              before:absolute 
              before:inset-0 
              before:w-full 
              before:h-full 
              before:bg-[linear-gradient(rgba(0,0,0,0)_50%,rgba(0,0,0,1)_50%)] 
              before:bg-[size:100%_4px] 
              before:opacity-50
              before:pointer-events-none">
                {/* <Banana3d /> */}
                <h1 className="text-4xl font-bold mb-6 drop-shadow-[0_0_10px_#0ff] uppercase
                ">Loading Portfolio...</h1>
                <div className="w-1/2 h-3 bg-gray-800 rounded-full relative overflow-hidden shadow-[0_0_15px_#0ff] border border-cyan-300">
                  <div
                    className="h-full bg-cyan-300 transition-all ease-in-out duration-500"
                    style={{ width: `${redirectProgress * 100}%` }}
                  ></div>
                </div>
              </div>
            )
          }
        />
        <Route path="/home" element={<HomePage />} />
        <Route path="/game" element={<GamePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/myskills" element={<WhoAmIPage />} />
        <Route path="/contact" element={<ContactPage />} />
      </Routes>
    </Router>
  );
}

export default App;
