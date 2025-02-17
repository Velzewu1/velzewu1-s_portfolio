import Phaser from "phaser";

const phaserConfig = {
  type: Phaser.AUTO,
  width: 800,
  height: 600,
  parent: "game-container", // Привязываем к div в React
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

// Функция загрузки ресурсов
function preload() {
  this.load.image("background", "/assets/background_large.jpg");
  this.load.image("foreground", "/assets/foreground.png");
  this.load.spritesheet("player", "/assets/player.png", {
    frameWidth: 64,
    frameHeight: 64,
  });
}

// Функция создания объектов
function create() {
  this.background = this.add.tileSprite(0, 0, 10000, 10000, "background").setOrigin(0, 0);
  this.foreground = this.add.tileSprite(0, 0, 10000, 10000, "foreground").setOrigin(0, 0);

  this.player = this.physics.add.sprite(400, 300, "player");

  this.cursors = this.input.keyboard.createCursorKeys();

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
  this.cameras.main.setZoom(2)
  this.cameras.main.setBounds(0, 0, 10000, 10000);
}

// Функция обновления (игровой цикл)
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
