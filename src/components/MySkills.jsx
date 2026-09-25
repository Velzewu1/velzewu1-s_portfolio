import React from 'react';

import {
  FaPython,
  FaReact,
  FaJs,
  FaHtml5,
  FaGithub
} from 'react-icons/fa';

import {
  SiFastapi,
  SiOpenai,
  SiPostgresql
} from 'react-icons/si';

const iconStyle =
  "w-16 h-16 text-white transition-transform duration-300 opacity-100";

const beforeClass =
  "before:content-[''] before:absolute before:inset-0 before:w-full before:h-full before:bg-[linear-gradient(rgba(0,0,0,0)_50%,rgba(0,0,0,0.5)_50%)] before:bg-[size:100%_4px] before:opacity-50 before:pointer-events-none";

const beforeExpand =
  "before:content-[''] before:absolute before:inset-0 before:w-full before:h-full";

const techStack = [
  {
    title: "Python",
    icon: <FaPython className={iconStyle} />
  },
  {
    title: "JavaScript",
    icon: <FaJs className={iconStyle} />
  },
  {
    title: "React",
    icon: <FaReact className={iconStyle} />
  },
  {
    title: "FastAPI",
    icon: <SiFastapi className={iconStyle} />
  },
  {
    title: "Git / GitHub",
    icon: <FaGithub className={iconStyle} />
  },
  {
    title: "OpenAI API",
    icon: <SiOpenai className={iconStyle} />
  },
  {
    title: "HTML / CSS",
    icon: <FaHtml5 className={iconStyle} />
  },
  {
    title: "PostgreSQL",
    icon: <SiPostgresql className={iconStyle} />
  }
];

const MySkills = () => {
  return (
    <div
      className={
        "relative w-full h-full font-retro text-white overflow-auto scrollbar-hide p-6 " +
        beforeExpand
      }
    >
      <div
        className={
          "relative z-10 max-w-2xl mx-auto bg-[#1A0A2E] p-6 rounded-lg shadow-lg border-2 border-cyan-500 filter contrast-[1.2] saturate-[1.3] brightness-[0.9] hue-rotate-[-5deg] " +
          beforeClass
        }
      >
        <div className="mb-8">
          <h1
            className={
              "text-3xl font-bold text-cyan-300 text-center uppercase tracking-wider " +
              beforeClass
            }
          >
            My Skills
          </h1>
        </div>

        <div className="space-y-6">
          <div>
            <h2 className="text-2xl font-semibold mb-1 text-purple-300">
              Language Skills
            </h2>

            <ul className="list-disc list-inside">
              <li>English: C2</li>
              <li>Russian: C2</li>
              <li>Kazakh: Basic</li>
            </ul>
          </div>

          <div>
            <h2 className="text-2xl font-semibold mb-1 text-purple-300">
              Hard Skills
            </h2>

            <ul className="list-disc list-inside">
              <li>Full-Stack Development</li>
              <li>AI / LLM Integration</li>
              <li>Backend Development</li>
              <li>Cybersecurity</li>
              <li>API Integration</li>
              <li>Automation</li>
              <li>Data Processing / ETL</li>
              <li>Product Prototyping</li>
            </ul>
          </div>

          <div>
            <h2 className="text-2xl font-semibold mb-2 text-purple-300">
              Tech Stack
            </h2>

            <div className="grid grid-cols-2 gap-6">
              {techStack.map((item) => (
                <div
                  key={item.title}
                  className={
                    "group relative flex flex-col items-center justify-center aspect-square bg-cyan-600 p-6 rounded-lg border border-cyan-500 transition-transform duration-300 hover:scale-110 hover:bg-cyan-400 " +
                    beforeClass
                  }
                >
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
    </div>
  );
};

export default MySkills;