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
  if (!this.textures.exists("player")) {
    this.load.spritesheet("player", "/assets/images/mainPlayer.png", {
      frameWidth: 32,
      frameHeight: 32
    });
  }

  this.load.tilemapTiledJSON("spaceMap", "assets/tilesets/spaceTiledMap.json");
  this.load.image("cosmicTiles", "assets/tilesets/CosmicLegacy_PetricakeGamesPNG.png");
  this.load.image("linkTiles", "assets/tilesets/linkObjects.png");
}


function create() {
  const map = this.make.tilemap({ key: "spaceMap" });
  const cosmicTiles = map.addTilesetImage("CosmicLegacy_PetricakeGamesPNG", "cosmicTiles");
  const linkTiles = map.addTilesetImage("linkObjects", "linkTiles");

  const groundLayer = map.createLayer("Ground", cosmicTiles, 0, 0);
  const wallsLayer = map.createLayer("Walls", cosmicTiles, 0, 0);
  const wallObjectsLayer = map.createLayer("WallObjects", cosmicTiles, 0, 0);
  const staticObjectsLayer = map.createLayer("StaticObjects", cosmicTiles, 0, 0);
  const linkTileLayer = map.createLayer("LinkTiles", linkTiles, 0, 0);

  wallsLayer.setCollisionByProperty({ collides: true });
  staticObjectsLayer.setCollisionByProperty({ collides: true });
  linkTileLayer.setCollisionByProperty({ collides: true })

  this.player = this.physics.add.sprite(400, 300, "player").setOrigin(0, 0);

  this.player.body.setSize(32, 32);

  this.physics.add.collider(this.player, wallsLayer);
  this.physics.add.collider(this.player, staticObjectsLayer);
  this.physics.add.collider(this.player, linkTileLayer)

  linkTileLayer.forEachTile((tile) => {
    if (tile.properties && tile.properties.URL) {
      const worldX = tile.getCenterX() * 2;
      const worldY = tile.getCenterY() * 2;
      const zone = this.add.zone(worldX, worldY, tile.width, tile.height).setOrigin(0.5);
      zone.setInteractive();
      zone.on("pointerup", () => {
        window.open(tile.properties.URL, "_blank");
      });
      zone.on("pointerover", () => {
        if (!tile.label) {
          tile.label = this.add.text(worldX, worldY - tile.height / 2, tile.properties.name, {
            fontSize: "16px",
            fill: "#ffffff",
            backgroundColor: "rgba(0, 0, 0, 0.5)"
          }).setOrigin(0.5);
        }
      });
      zone.on("pointerout", () => {
        if (tile.label) {
          tile.label.destroy();
          tile.label = null;
        }
      });
    }
  });

  this.cursors = this.input.keyboard.createCursorKeys();
  this.stopFrame = 1;

  this.anims.create({
    key: "left",
    frames: this.anims.generateFrameNumbers("player", { start: 3, end: 5 }),
    frameRate: 10,
    repeat: -1,
  });
  this.anims.create({
    key: "right",
    frames: this.anims.generateFrameNumbers("player", { start: 6, end: 8 }),
    frameRate: 10,
    repeat: -1,
  });
  this.anims.create({
    key: "up",
    frames: this.anims.generateFrameNumbers("player", { start: 9, end: 11 }),
    frameRate: 10,
    repeat: -1,
  });
  this.anims.create({
    key: "down",
    frames: this.anims.generateFrameNumbers("player", { start: 0, end: 2 }),
    frameRate: 10,
    repeat: -1,
  });

  this.cameras.main.startFollow(this.player);
  this.cameras.main.setBounds(0, 0, map.widthInPixels * 2, map.heightInPixels * 2);
  this.cameras.main.setZoom(2);

  groundLayer.setScale(2);
  wallsLayer.setScale(2);
  wallObjectsLayer.setScale(2);
  staticObjectsLayer.setScale(2);
  linkTileLayer.setScale(2);
}

function update() {
  let velocityX = 0;
  let velocityY = 0;

  if (this.cursors.left.isDown) velocityX -= 160;
  if (this.cursors.right.isDown) velocityX += 160;
  if (this.cursors.up.isDown) velocityY -= 160;
  if (this.cursors.down.isDown) velocityY += 160;

  this.player.setVelocity(velocityX, velocityY);

  if (velocityX < 0) {
    this.player.anims.play("left", true);
    this.stopFrame = 4;
  } else if (velocityX > 0) {
    this.player.anims.play("right", true);
    this.stopFrame = 7;
  } else if (velocityY < 0) {
    this.player.anims.play("up", true);
    this.stopFrame = 10;
  } else if (velocityY > 0) {
    this.player.anims.play("down", true);
    this.stopFrame = 1;
  } else {
    this.player.setFrame(this.stopFrame);
  }
}
export default phaserConfig;
