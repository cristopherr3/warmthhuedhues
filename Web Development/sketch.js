// Original variables
var sandy = 0;
var seb = 300;

// Pause state
var paused = false;

function setup() {
  createCanvas(500, 500);
}

// Draw loop
function draw() {
  if (!paused) {
    background(242, 143, 22); // orange bg

    // Circle
    stroke(255, 255, 127); // stroke color
    strokeWeight(2);
    fill(255, 255, mouseY, 150); // yellow inside circle
    ellipse(150, 300, sandy, sandy);
    sandy = sandy + 2;

    // Rectangle
    fill(mouseX, 235, 167);
    stroke(93, 100, 148);
    strokeWeight(5);
    rect(mouseX, mouseY, 100, 55);

    // Triangle
    strokeWeight(2);
    triangle(200, 150, 325, 400, mouseX);

    // Line
    stroke(148, 145, 93);
    line(75, 75, 450, 300, seb);
    seb = seb - 2;
  }
}

// Wait until DOM loaded to attach buttons
document.addEventListener('DOMContentLoaded', () => {
  const pauseBtn = document.getElementById('pause-btn');
  const replayBtn = document.getElementById('replay-btn');

  // Pause/Play button
  pauseBtn.addEventListener('click', () => {
    paused = !paused;
    if (paused) {
      pauseBtn.textContent = 'Play';
      noLoop();
    } else {
      pauseBtn.textContent = 'Pause';
      loop();
    }
  });

  // Replay button
  replayBtn.addEventListener('click', () => {
    sandy = 0; // reset your variables
    seb = 300;
    paused = false;
    loop();
    pauseBtn.textContent = 'Pause';
  });
});