import React, { useEffect, useRef } from "react";
import Phaser from "phaser";
import phaserConfig from "../phaserConfig";

const GameScene = ({ isResized }) => {
  const gameRef = useRef(null);

  useEffect(() => {
    console.log("GameScene mounted");

    if (!gameRef.current) {
      gameRef.current = new Phaser.Game(phaserConfig);
    }

    return () => {
      console.log("Destroying game instance...");
      if (gameRef.current) {
        if (gameRef.current.scene) {
          gameRef.current.destroy(true);
        }
        gameRef.current = null;
      }
    };
  }, []);

  useEffect(() => {
    if (isResized && gameRef.current?.scale) {
      console.log("Resizing game canvas...");
      const resizeTimeout = setTimeout(() => {
        gameRef.current.scale.resize(window.innerWidth, 1080);
      }, 100);

      return () => clearTimeout(resizeTimeout);
    }
  }, [isResized]);

  return <div id="game-container" className="w-full"></div>;
};

export default GameScene;
