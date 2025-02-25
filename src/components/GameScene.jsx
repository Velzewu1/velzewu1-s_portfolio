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
      console.log("Destroying game instance");
      if (gameRef.current) {
        gameRef.current.destroy(true);
        gameRef.current = null;
      }
    };
  }, []);

  useEffect(() => {
    if (isResized && gameRef.current) {
      console.log("Resizing game canvas...");
      gameRef.current.scale.resize(window.innerWidth, window.innerHeight);
    }
  }, [isResized]);

  return <div id="game-container" className="w-full"></div>;
};

export default GameScene;
