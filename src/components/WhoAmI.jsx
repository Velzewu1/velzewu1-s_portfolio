import React from "react";
import { useEffect, useRef } from "react";

const WhoAmI = () => {
    return (
        <div className="p-6">
          <h1 className="text-2xl font-bold">Who Am I</h1>
          <p className="mt-4">
            Here you can find all my social media links and additional personal information.
          </p>
          <ul className="mt-2">
            <li>
              <a href="https://github.com/your-profile" target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline">
                GitHub
              </a>
            </li>
            <li>
              <a href="https://linkedin.com/in/your-profile" target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline">
                LinkedIn
              </a>
            </li>
          </ul>
        </div>
    );
};

export default WhoAmI;
