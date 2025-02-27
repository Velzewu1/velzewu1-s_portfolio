import React from 'react';
import { TypeAnimation } from 'react-type-animation';

function TypingText() {
  return (
    <TypeAnimation
      sequence={[
        'Software Engineer', 
        1000,                
        'FrontEnd Developer',
        1000,
        'Backend Developer',
        1000,
        'Game Developer',
        1000
      ]}
      wrapper="span"
      cursor={true}
      repeat={Infinity}
      className="text-[1.5em] inline-block font-bold"
    />
  );
}

export default TypingText;
