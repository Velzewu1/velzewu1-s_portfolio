import React, { useEffect, useState, useRef } from 'react';
import SpaceObject from './SpaceObject';

function RandomSpaceObjects() {
  const [objects, setObjects] = useState([]);
  const timeoutRef = useRef(null);

  useEffect(() => {
    function spawnObject() {
      const randomX = Math.floor(Math.random() * window.innerWidth);
      const randomY = Math.floor(Math.random() * window.innerHeight);
      const randomDelay = Math.floor(Math.random() * 3000) + 2000;

      setObjects(prev => [
        ...prev,
        { id: Date.now(), x: randomX, y: randomY }
      ]);

      timeoutRef.current = setTimeout(spawnObject, randomDelay);
    }

    spawnObject();

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
