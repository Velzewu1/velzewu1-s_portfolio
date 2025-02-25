import React, { useEffect, useState, useRef } from 'react';
import SpaceObject from './SpaceObject';

function RandomSpaceObjects() {
  const [objects, setObjects] = useState([]);
  const timeoutRef = useRef(null);

  useEffect(() => {
    function spawnObject() {
      // Generate random x, y, and next spawn delay
      const randomX = Math.floor(Math.random() * window.innerWidth);  // anywhere horizontally
      const randomY = Math.floor(Math.random() * window.innerHeight); // anywhere vertically
      const randomDelay = Math.floor(Math.random() * 3000) + 2000;     // 2–5 seconds

      // Add a new object to the array
      setObjects(prev => [
        ...prev,
        { id: Date.now(), x: randomX, y: randomY }
      ]);

      // Queue up next spawn
      timeoutRef.current = setTimeout(spawnObject, randomDelay);
    }

    // Start the cycle
    spawnObject();

    // Cleanup if unmounts
    return () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    };
  }, []);

  return (
    <div className="relative w-screen h-screen bg-gray-900 overflow-hidden">
      {objects.map(obj => (
        <SpaceObject
          key={obj.id}
          xStart={obj.x}
          yStart={obj.y}
        />
      ))}
    </div>
  );
}

export default RandomSpaceObjects;
