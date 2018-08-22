// start me up
console.log(`This is NotHack version ${require("../package.json").version}`);
// css
require("./main.css");
//
const { db } = require("./state");
//
const Phaser = require("phaser");
//
const measue = _ => {
  let w = window.innerWidth;
  let h = window.innerHeight;
  let l = w < h ? w : h;
  return l;
};

let l = measue();
window.game = new Phaser.Game({
  canvas: document.getElementById("nothack"),
  type: Phaser.AUTO,
  width: l,
  height: l,
  physics: {
    default: "arcade",
    arcade: {
      gravity: { y: 200 }
    }
  },
  scene: {
    preload() {},
    create() {}
  }
});

window.addEventListener("resize", () => {
  let l = measue();
  window.game.resize(l, l);
});
