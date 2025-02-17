import { useEffect, useRef } from "react";

const AboutMe = () => {
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

  return (
    <div id="about-me">
        
    </div>
  );
};

export default GameScene;
