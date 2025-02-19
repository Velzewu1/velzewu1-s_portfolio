import Phaser from "phaser";

const phaserConfig = {
  type: Phaser.AUTO,
  width: 800,
  height: 600,
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
  const images = [
    { key: "background", path: "/assets/background_large.jpg" },
    { key: "foreground", path: "/assets/foreground.png" },
    { key: "clickableObject", path: "assets/clickable.png" },
  ];

  images.forEach(image => {
    if (!this.textures.exists(image.key)) {
      this.load.image(image.key, image.path);
    }
  });

  if (!this.textures.exists("player")) {
    this.load.spritesheet("player", "/assets/player.png", {
      frameWidth: 64,
      frameHeight: 64
    });
  }
}


function create() {
  this.background = this.add.tileSprite(0, 0, 10000, 10000, "background").setOrigin(0, 0);
  this.foreground = this.add.tileSprite(0, 0, 10000, 10000, "foreground").setOrigin(0, 0);

  this.player = this.physics.add.sprite(400, 300, "player").setOrigin(0, 0);

  this.clickable = this.add.sprite(200, 200, "clickableObject").setInteractive();

  this.cursors = this.input.keyboard.createCursorKeys();
  this.wasd = this.input.keyboard.addKeys("W,A,S,D");

  this.anims.create({
    key: "left",
    frames: this.anims.generateFrameNumbers("player", { start: 56, end: 61 }),
    frameRate: 10,
    repeat: -1,
  });

  this.anims.create({
    key: "right",
    frames: this.anims.generateFrameNumbers("player", { start: 48, end: 53 }),
    frameRate: 10,
    repeat: -1,
  });

  this.anims.create({
    key: "up",
    frames: this.anims.generateFrameNumbers("player", { start: 40, end: 45 }),
    frameRate: 10,
    repeat: -1,
  });

  this.anims.create({
    key: "down",
    frames: this.anims.generateFrameNumbers("player", { start: 32, end: 37 }),
    frameRate: 10,
    repeat: -1,
  });
  this.anims.create({
    key: "idle",
    frames: [{ key: "player", frame: 0 }],
    frameRate: 10,
    repeat: -1,
  });

  this.cameras.main.startFollow(this.player);
  this.cameras.main.setBounds(0, 0, 10000, 10000);

  this.clickable.on('pointerover', () => {
    console.log('Mouse is over the element!');
    this.clickable.setTint(0xff0000);
    this.input.setDefaultCursor("pointer");
  });

  this.clickable.on('pointerout', () => {
    console.log('Mouse left the element!');
    this.clickable.clearTint();
    this.input.setDefaultCursor('default');
  });

  this.clickable.on('pointerdown', () => {
    window.open('https://youtube.com', '_blank');
  })
}

function update() {
  let velocityX = 0;
  let velocityY = 0;

  if (this.wasd.A.isDown || this.cursors.isDown) velocityX -= 160;
  if (this.wasd.D.isDown || this.cursors.right.isDown) velocityX += 160;
  if (this.wasd.W.isDown || this.cursors.up.isDown) velocityY -= 160;
  if (this.wasd.S.isDown || this.cursors.down.isDown) velocityY += 160;

  this.player.setVelocity(velocityX, velocityY);

  if (velocityX < 0) {
    this.player.anims.play("left", true);
  } else if (velocityX > 0) {
    this.player.anims.play("right", true);
  } else if (velocityY < 0) {
    this.player.anims.play("up", true);
  } else if (velocityY > 0) {
    this.player.anims.play("down", true);
  } else {
    this.player.anims.play("idle", true);
  }
}

export default phaserConfig;
