import React, { useEffect } from 'react';

const ParticleBackground = () => {
  useEffect(() => {
    if (window.particlesJS) {
      window.particlesJS('particles-js', {
        particles: {
          number: {
            value: 160,
            density: {
              enable: true,
              value_area: 800,
            },
          },
          color: { value: '#ffffff' },
          shape: {
            type: 'star',
            stroke: { width: 0, color: '#000000' },
            polygon: { nb_sides: 5 },
          },
          opacity: {
            value: 1,
            random: true,
            anim: {
              enable: true,
              speed: 1,
              opacity_min: 0,
              sync: false,
            },
          },
          size: {
            value: 3,
            random: true,
            anim: {
              enable: false,
              speed: 4,
              size_min: 0.3,
              sync: false,
            },
          },
          line_linked: {
            enable: false,
            distance: 48,
            color: '#cf0000',
            opacity: 0.4,
            width: 1,
          },
          move: {
            enable: true,
            speed: 2,
            direction: 'top',
            random: true,
            straight: true,
            out_mode: 'out',
            bounce: false,
          },
        },
        interactivity: {
          detect_on: 'canvas',
          events: {
            onhover: { enable: true, mode: 'bubble' },
            onclick: { enable: false, mode: 'repulse' },
            resize: true,
          },
          modes: {
            grab: { distance: 400, line_linked: { opacity: 1 } },
            bubble: {
              distance: 250,
              size: 0,
              duration: 2,
              opacity: 0,
              speed: 3,
            },
            repulse: { distance: 400, duration: 0.4 },
          },
        },
        retina_detect: true,
      });
    } else {
      console.error('particlesJS is not available on window.');
    }
  }, []);

  return (
    <div
      id="particles-js"
      className="absolute inset-0 z-[-1]"
    />
  );
};

export default ParticleBackground;
