let p1;
let p2;
let ruido;

function setup() {
  createCanvas(innerWidth, innerHeight);

  background(0);
}

function draw() {
  background(0);

  stroke(255, 15);
  strokeWeight(4);
  translate(width / 2, height / 2);
  rotate(radians(frameCount * 0.5 * ruido));
  p1 = sin(radians(frameCount)) * 100;
  p2 = cos(radians(frameCount)) * 210;
  ruido = noise(frameCount * 0.0025);
  for (var i = 0; i < 1500; i++) {
    push();
    rotate(radians(i));
    translate(0, 200);
    rotate(radians(i * ruido));
    translate(ruido * 100, 250 * ruido);
    rotate(radians(frameCount / 10 + i));
    blendMode(ADD);
    line(0, 0, 250, 0);
    pop();
  }
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}
