// TODO handle the fade in a graphic?
// https://p5js.org/examples/advanced-canvas-rendering-create-graphics/
import type p5Type from "p5";
import backgroundImageSrc from "../../images/background.jpg";
import logoImageSrc from "../../images/logo.png";

const canvasClass = "pointer-events-none absolute inset-0 z-0 size-full";

export function sketch(p5: p5Type) {
  function createCanvas() {
    const canvas = p5.createCanvas(
      document.body.clientWidth,
      document.body.clientHeight - 1,
    );
    canvas.class(canvasClass);
  }

  function setupMousePosition() {
    p5.mouseX = document.body.clientWidth / 2;
    p5.mouseY = document.body.clientHeight / 2;
  }

  let backgroundImage: p5Type.Image;
  let logoImage: p5Type.Image;
  p5.preload = function preload() {
    backgroundImage = p5.loadImage(backgroundImageSrc.src);
    logoImage = p5.loadImage(logoImageSrc.src);
  };

  p5.setup = function setup() {
    createCanvas();
    setupMousePosition();
    p5.imageMode("center");
  };

  p5.draw = function draw() {
    p5.tint(255, 2 ** 4 - 1);
    p5.image(backgroundImage, p5.width / 2, p5.height / 2, p5.width, p5.height);
    p5.tint(255, 255);
    p5.image(logoImage, p5.mouseX, p5.mouseY);
  };

  p5.windowResized = function windowResized() {
    p5.resizeCanvas(document.body.clientWidth, document.body.clientHeight - 1);
  };

  return p5;
}
