import React, { useEffect, useState } from 'react';

function SpaceObject({ xStart, yStart }) {
  const [yPos, setYPos] = useState(yStart);

  useEffect(() => {
    setYPos(prev => prev - 50);
  }, []);

  return (
    <div
      style={{
        position: 'absolute',
        left: `${xStart}px`,
        top: `${yPos}px`,
        width: '50px',
        height: '50px',
        backgroundColor: 'red',
        transition: 'all 2s ease',
      }}
    />
  );
}

export default SpaceObject;
