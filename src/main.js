// start me up
console.log(`This is NotHack version ${require("../package.json").version}`);
// css
require("./main.css");
// the thing
const renderthings = require("./renderthings");
// our canvas
const app = document.getElementById("app");
// maps to use on debug time. well generate them, remember?
const map1 = require("./static-maps/world1.txt");
const map2 = require("./static-maps/world2.txt");

const pos = { x: 0, y: 0 }

renderthings.camera(app, map1, pos);
