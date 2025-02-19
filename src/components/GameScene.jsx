import Phaser from "phaser";
import { useEffect, useRef } from "react";
import phaserConfig from "../phaserConfig";

const GameScene = () => {
  const gameRef = useRef(null);

  useEffect(() => {
    console.log("GameScene mounted");
    // if (gameRef.current) return;

    const game = new Phaser.Game(phaserConfig);
    gameRef.current = game;

    return () => {
      console.log("Destroying game instance");
      game.destroy(true);
    };
  }, []);

  return <div id="game-container"></div>;
};

export default GameScene;
