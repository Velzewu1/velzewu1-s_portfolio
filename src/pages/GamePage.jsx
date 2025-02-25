import React, { useState } from "react";
import GameScene from "../components/GameScene";
import { useNavigate } from "react-router-dom";

const GamePage = () => {
  const navigate = useNavigate();
  const isResized = true;
  const beforeClass = "before:content-[''] before:absolute before:inset-0 before:w-full before:h-full before:bg-[linear-gradient(rgba(0,0,0,0)_50%,rgba(0,0,0,0.5)_50%)] before:bg-[size:100%_4px] before:opacity-50 before:pointer-events-none";

  return (
    <div className={"relative w-screen h-screen" + beforeClass}>
      <GameScene isResized={isResized} />
      <span
        onClick={() => navigate("/home")}
        className={"absolute top-11 right-9 rounded-xl transform -translate-x-1/2 z-30 px-6 py-3 text-white font-semibold hover:opacity-100 transition-colors bg-[#161027] opacity-80 cursor-pointer" + beforeClass}
      >
        Go back
      </span>
    </div>
    
  );
};

export default GamePage;
