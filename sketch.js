function setup() {
  createCanvas(windowWidth, windowHeight);
  background(220);
}

function draw() {
  textSize(64);
  fill(220);
  stroke(0);
  strokeWeight(4);
  textAlign(CENTER, CENTER);
  text("Hipermedia", mouseX, mouseY)
}