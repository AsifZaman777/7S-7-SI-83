import zim from "/zim.js";

const {
  Frame,
  Circle,
  Button,
  Label,
  Rectangle,
  GlowEffect,
  Pic,
  Ticker,
  Emitter,
  Sprite,
} = zim;

const canvasWidth = 1920;
const canvasHeight = 1080;

new Frame(
  zim.FIT,
  canvasWidth,
  canvasHeight,
  "white",
  "#333",
  ready,
  interstellar,
  "assets/",
  new zim.Waiter()
);

function ready() {
  
}
