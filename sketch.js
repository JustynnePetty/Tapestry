let img1, img2, img3; // Background, Trees, Ground
let bgMusic;
let isPlaying = false;

function preload() {
  img1 = loadImage("Background.png");
  img2 = loadImage("Trees.png");
  img3 = loadImage("Ground.png");
  bgMusic = loadSound("Tapestry_mixdown.mp3");
}

function setup() {
  createCanvas(1300, 2000);
  /*imageMode(CENTER);*/
  noStroke();
  bgMusic.loop(); 
  bgMusic.setVolume(0.5);
}

function draw() {
  background(0); 
  image(img1, 0, 0, 1300, 2000); // Background
  image(img2, 0, 0, 1300, 2000);       // Trees
  image(img3, 0, 0, 1300, 2000);        // Ground
}

function mousePressed() {
  if(bgMusic.isPlaying()) {
    bgMusic.stop();
  } else {
    bgMusic.play();
  }
}