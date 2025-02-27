import React from "react";
import { useNavigate } from "react-router-dom";
import AboutMe from "../components/AboutMe";

const AboutPage = () => {
  const navigate = useNavigate();

  const beforeClass =
    "before:content-[''] before:absolute before:inset-0 before:w-full before:h-full before:bg-[linear-gradient(rgba(0,0,0,0)_50%,rgba(0,0,0,0.5)_50%)] before:bg-[size:100%_4px] before:opacity-50 before:pointer-events-none";

  return (
    <div
      className={
        "w-screen h-screen bg-gradient-to-br from-[#1A0A2E] via-[#2A1240] to-[#4B1E77] filter contrast-[1.2] saturate-[1.3] brightness-[0.9] hue-rotate-[-5deg] " +
        beforeClass
      }
    >
      <span
        onClick={() => navigate("/home")} // Use navigate to return
        className="absolute top-11 right-9 rounded-xl transform -translate-x-1/2 z-30 px-6 py-3 text-white font-semibold hover:opacity-100 transition-colors shadow-[0_10px_20px_rgba(0,0,0,1)] opacity-80 cursor-pointer"
      >
        Go back
      </span>
      <div className="w-screen h-screen overflow-auto scrollbar-hide">
        <AboutMe />
      </div>
    </div>
  );
};

export default AboutPage;
