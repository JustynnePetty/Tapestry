let img1, img2, img3; // Background, Trees, Ground
let bgMusic;

function preload() {
  img1 = loadImage("Background.png");
  img2 = loadImage("Trees.png");
  img3 = loadImage("Ground.png");
  bgMusic = loadSound("Tapestry_mixdown.mp3");
}

function setup() {
  createCanvas(1000, 800);
  imageMode(CENTER);
  noStroke();
  bgMusic.loop(); 
}

function draw() {
  background(0); 
  image(img1, width / 2, height / 2, 1000, 800); // Background
  image(img2, width / 2, 600, 1000, 2000);       // Trees
  image(img3, width / 2, 700, 1500, 800);        // Ground
}