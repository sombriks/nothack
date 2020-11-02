// rollup is the new browserify
import "./main.scss";
import stage1 from "./maps/stage1";

const mapa = stage1();

const player = {
  c: "@",
  y: 0,
  x: 0,
  up() {
    if (this.y > 0) this.y--;
    paint();
  },
  down() {
    if (this.y < mapa.length - 1) this.y++;
    paint();
  },
  left() {
    if (this.x > 0) this.x--;
    paint();
  },
  right() {
    if (this.x < mapa[0].length - 1) this.x++;
    paint();
  },
};

document.addEventListener("keydown", (e) => {
  switch (e.key) {
    case "ArrowUp":
      return player.up();
    case "ArrowDown":
      return player.down();
    case "ArrowLeft":
      return player.left();
    case "ArrowRight":
      return player.right();
  }
});

document.getElementById("up").addEventListener("click", (e) => player.up());
document.getElementById("down").addEventListener("click", (e) => player.down());
document.getElementById("left").addEventListener("click", (e) => player.left());
document
  .getElementById("right")
  .addEventListener("click", (e) => player.right());

const paint = (_) => {
  const mapa = stage1();
  const pre = document.getElementById("game");
  mapa[player.y][player.x] = player.c;
  pre.innerHTML = mapa.map((e) => e.join("")).join("\n");
};

paint();
