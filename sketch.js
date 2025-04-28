let img1, img2, img3; // Background, Trees, Ground
let bgMusic;
let isPlaying = false;

function preload() {
  img1 = loadImage("Background.png");
  img2 = loadImage("Trees.png");
  img3 = loadImage("Ground.png");
  
}

function setup() {
  bgMusic = loadSound("Tapestry_mixdown.mp3");
  createCanvas(1000, 800);
  imageMode(CENTER);
  noStroke();
  bgMusic.loop(); 
  bgMusic.setVolume(0.5);
}

function draw() {
  background(0); 
  image(img1, width / 2, height / 2, 1000, 800); // Background
  image(img2, width / 2, 600, 1000, 2000);       // Trees
  image(img3, width / 2, 700, 1500, 800);        // Ground
}

function mousePressed() {
  if(bgMusic.isPlaying()) {
    bgMusic.stop();
  } else {
    bgMusic.play();
  }
}