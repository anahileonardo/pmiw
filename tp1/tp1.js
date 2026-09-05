let fondo;
let framesBrazos = [];
let framesCamina = [];

let frameActual = 0;
let velocidad = 8;

let frameCamina = 0;
let estado = 0;

let posX = 15;


function preload() {
  fondo = loadImage("fondo.jpeg");

  for (let i = 0; i < 10; i++) {
    framesBrazos[i] = loadImage("framesBrazos/frame_" + nf(i, 3) + ".png");
  }

  for (let i = 0; i < 10; i++) {
    framesCamina[i] = loadImage("framesCamina/frame_" + nf(i, 3) + ".png");
  }
}


function setup() {
  createCanvas(800, 600);
}


function draw() {

  image(fondo, 0, 0, width, height);


  // estado 0: mover brazos

  if (estado === 0) {

    mostrarPersonaje(
      framesBrazos[frameActual], 15, 330, 100, 180);

    if (frameCount % velocidad === 0) {
      frameActual++;
    }

    if (frameActual >= 10) {
      frameActual = 9;
      estado = 1;
    }
  }


  // estado 1: caminar

  if (estado === 1) {

    mostrarPersonaje(
      framesCamina[frameCamina], posX, 330, 100, 180);

    if (posX < 480) {
      posX += 1;

      if (frameCount % velocidad === 0) {
        frameCamina = avanzarFrame (frameCamina, 10);
      }
    }
  }
}


// reinicia con tecla w/W

function keyPressed() {

  if (key === 'w' || key === 'W') {

    estado = 0;
    posX = 15;
    frameActual = 0;
    frameCamina = 0;
  }
}


function mostrarPersonaje(imagen, x, y, ancho, alto) {

  image(imagen, x, y, ancho, alto);
}

function avanzarFrame (frame, cantidad) {
  frame++;

  if (frame >= cantidad ) {
    frame = 0;
  }

  return frame;
}
