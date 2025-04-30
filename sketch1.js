let bgMusic;
let isPlaying = false;

function preload() {
  bgMusic = loadSound("Come-hither.mp3");
}

function setup() {
  bgMusic.loop(); 
  bgMusic.setVolume(0.5);
}

function setup() {
    createCanvas(1300, 2000);
}

function mousePressed() {
  if(bgMusic.isPlaying()) {
    bgMusic.stop();
  } else {
    bgMusic.play();
  }
}