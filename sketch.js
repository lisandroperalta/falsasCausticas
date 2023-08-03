let p1;
let p2;
let ruido;
let cantidadDeRayos = 1000;
function setup() {
  createCanvas(1080,1080);

  background(0);
}

function draw() {
  background(0);

  translate(width / 2, height / 2);
  rotate(radians(frameCount * 0.5 * ruido));
  ruido = noise(frameCount * 0.0025);
  strokeWeight(4);

  for (var i = 0; i < cantidadDeRayos; i++) {
    push();
    var posicion = i / cantidadDeRayos;

    var largo;
    if (posicion < 0.5) largo = easeOutCubic(posicion) * 300;
    if (posicion > 0.5) largo = easeOutCubic(1 - posicion) * 300;

    var opacidad;
    if (posicion < 0.5) opacidad = easeOutCubic(posicion) * 40;
    if (posicion > 0.5) opacidad = easeOutCubic(1 - posicion) * 40;

    rotate(radians(i));
    translate(0.5, 200);
    rotate(radians(i * ruido));
    translate(ruido * 100, 250 * ruido);
    rotate(radians(frameCount / 10 + i));
    blendMode(ADD);
    stroke(255, opacidad);
    line(0, 0, largo, 0);
    pop();
  }

  if (frameCount % 20 == 0) console.log(frameRate());
}

function easeOutCubic(x) {
  return 1 - Math.pow(1 - x, 3);
}

function keyPressed() {
  if (key == " ") {
    saveCanvas("screenshot" + frameCount, "png");
  }
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}
