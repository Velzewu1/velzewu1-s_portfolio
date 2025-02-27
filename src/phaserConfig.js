import Phaser from "phaser";

const phaserConfig = {
  type: Phaser.AUTO,
  width: 800,
  height: 600,
  pixelArt: true,
  parent: "game-container",
  physics: {
    default: "arcade",
    arcade: {
      gravity: { y: 0 },
      debug: false,
    },
  },
  scene: {
    preload,
    create,
    update,
  },
};

function preload() {
  this.load.spritesheet("player", "/assets/images/mainPlayer.png", {
    frameWidth: 32,
    frameHeight: 32
  });

  this.load.tilemapTiledJSON("spaceMap", "assets/tilesets/spaceTiledMap.json");
  this.load.image("cosmicTiles", "assets/tilesets/CosmicLegacy_PetricakeGamesPNG.png");
  this.load.image("linkTiles", "assets/tilesets/linkObjects.png");
}

function create() {
  const map = this.make.tilemap({ key: "spaceMap" });
  const tilesets = {
    cosmic: map.addTilesetImage("CosmicLegacy_PetricakeGamesPNG", "cosmicTiles"),
    link: map.addTilesetImage("linkObjects", "linkTiles")
  };

  const layers = {
    ground: map.createLayer("Ground", tilesets.cosmic, 0, 0),
    walls: map.createLayer("Walls", tilesets.cosmic, 0, 0),
    wallObjects: map.createLayer("WallObjects", tilesets.cosmic, 0, 0),
    staticObjects: map.createLayer("StaticObjects", tilesets.cosmic, 0, 0),
    linkTiles: map.createLayer("LinkTiles", tilesets.link, 0, 0)
  };

  [layers.walls, layers.staticObjects, layers.linkTiles].forEach(layer => {
    layer.setCollisionByProperty({ collides: true });
  });

  this.player = this.physics.add.sprite(400, 300, "player").setOrigin(0, 0);
  this.player.body.setSize(32, 32);

  this.physics.add.collider(this.player, layers.walls);
  this.physics.add.collider(this.player, layers.staticObjects);
  this.physics.add.collider(this.player, layers.linkTiles);

  layers.linkTiles.forEachTile(tile => {
    if (tile.properties?.URL) {
      const worldX = tile.getCenterX() * 2;
      const worldY = tile.getCenterY() * 2;

      const zone = this.add.zone(worldX, worldY, tile.width, tile.height).setOrigin(0.5).setInteractive();
      
      zone.on("pointerup", () => window.open(tile.properties.URL, "_blank"));
      
      const textLabel = this.add.text(worldX, worldY - tile.height / 2, tile.properties.name, {
        fontSize: "16px",
        fill: "#ffffff",
        backgroundColor: "rgba(0, 0, 0, 0.5)"
      }).setOrigin(0.5).setAlpha(0);

      zone.on("pointerover", () => textLabel.setAlpha(1));
      zone.on("pointerout", () => textLabel.setAlpha(0));
    }
  });

  this.cursors = this.input.keyboard.createCursorKeys();
  this.stopFrame = 1;

  const animations = {
    left: [3, 5],
    right: [6, 8],
    up: [9, 11],
    down: [0, 2]
  };

  Object.entries(animations).forEach(([key, frames]) =>
    this.anims.create({
      key,
      frames: this.anims.generateFrameNumbers("player", { start: frames[0], end: frames[1] }),
      frameRate: 10,
      repeat: -1
    })
  );

  this.cameras.main.startFollow(this.player);
  this.cameras.main.setBounds(0, 0, map.widthInPixels * 2, map.heightInPixels * 2);
  this.cameras.main.setZoom(2);

  Object.values(layers).forEach(layer => layer.setScale(2));
}

function update() {
  const velocity = { x: 0, y: 0 };

  if (this.cursors.left.isDown) velocity.x = -160;
  if (this.cursors.right.isDown) velocity.x = 160;
  if (this.cursors.up.isDown) velocity.y = -160;
  if (this.cursors.down.isDown) velocity.y = 160;

  if (velocity.x !== this.player.body.velocity.x || velocity.y !== this.player.body.velocity.y) {
    this.player.setVelocity(velocity.x, velocity.y);
  }

  if (velocity.x < 0) {
    this.player.anims.play("left", true);
    this.stopFrame = 4;
  } else if (velocity.x > 0) {
    this.player.anims.play("right", true);
    this.stopFrame = 7;
  } else if (velocity.y < 0) {
    this.player.anims.play("up", true);
    this.stopFrame = 10;
  } else if (velocity.y > 0) {
    this.player.anims.play("down", true);
    this.stopFrame = 1;
  } else {
    this.player.setFrame(this.stopFrame);
  }
}

export default phaserConfig;
