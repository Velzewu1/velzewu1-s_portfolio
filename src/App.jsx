// App.jsx
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import GamePage from './pages/GamePage';
import AboutPage from './pages/AboutPage';
import WhoAmIPage from './pages/WhoAmIPage';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/home" element={<HomePage />} />
        <Route path="/game" element={<GamePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/whoami" element={<WhoAmIPage />} />
      </Routes>
    </Router>
  );
}

export default App;
