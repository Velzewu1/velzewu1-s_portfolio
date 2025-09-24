import React from 'react';
import { FaPython, FaReact, FaUnity } from 'react-icons/fa';
import { SiDjango, SiAdobe, SiDotnet, SiUnrealengine } from 'react-icons/si';
import { TbBrandCSharp } from "react-icons/tb";

const iconStyle = "w-16 h-16 text-white transition-transform duration-300 opacity-100";
const beforeClass = "before:content-[''] before:absolute before:inset-0 before:w-full before:h-full before:bg-[linear-gradient(rgba(0,0,0,0)_50%,rgba(0,0,0,0.5)_50%)] before:bg-[size:100%_4px] before:opacity-50 before:pointer-events-none";
const beforeExpand = "before:content-[''] before:absolute before:inset-0 before:w-full before:h-full"

const techStack = [
  { title: "Python", icon: <FaPython className={iconStyle} /> },
  { title: "C#", icon: <TbBrandCSharp className={iconStyle} /> },
  { title: "Django", icon: <SiDjango className={iconStyle} /> },
  { title: "Adobe", icon: <SiAdobe className={iconStyle} /> },
  { title: "React", icon: <FaReact className={iconStyle} /> },
  { title: ".NET", icon: <SiDotnet className={iconStyle} /> },
  { title: "Unity", icon: <FaUnity className={iconStyle} /> },
  { title: "Unreal Engine", icon: <SiUnrealengine className={iconStyle} /> },
];

const MySkills = () => {
  return (
    <div className={"relative w-full h-full font-retro text-white overflow-auto scrollbar-hide p-6" + beforeExpand}>
      <div className={"relative z-10 max-w-2xl mx-auto bg-[#1A0A2E] p-6 rounded-lg shadow-lg border-2 border-cyan-500 filter contrast-[1.2] saturate-[1.3] brightness-[0.9] hue-rotate-[-5deg] " + beforeClass} >
        <div className='mb-8'>
          <h1 className={"text-3xl font-bold text-cyan-300 text-center uppercase tracking-wider " + beforeClass}>My Skills</h1>
        </div>
        <div className='space-y-6'>
          <h2 className="text-2xl font-semibold mb-1 text-purple-300">Language Skills</h2>
          <ul className="list-disc list-inside">
            <li>English: C1</li>
            <li>Russian: C2</li>
            <li>French: B1</li>
          </ul>
          <h2 className="text-2xl font-semibold mb-1 text-purple-300">Hard Skills</h2>
          <ul className="list-disc list-inside">
            <li>Game Development</li>
            <li>Web Development</li>
            <li>Desktop Applications</li>
            <li>Cybersecurity</li>
          </ul>
          <h2 className="text-2xl font-semibold mb-2 text-purple-300">Tech Stack</h2>
          <div className="grid grid-cols-2 gap-6">
            {techStack.map((item) => (
              <div key={item.title} className={"group relative flex flex-col items-center justify-center aspect-square bg-cyan-600 p-6 rounded-lg border border-cyan-500 transition-transform duration-300 hover:scale-110 hover:bg-cyan-400" + beforeClass}>
                <div className="w-16 h-16 flex items-center justify-center">
                  {item.icon}
                </div>
                <h2 className="absolute inset-0 flex items-center justify-center text-center text-lg font-bold text-black opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  {item.title}
                </h2>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default MySkills;
