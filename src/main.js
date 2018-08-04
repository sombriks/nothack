require("./main.css");
console.log(`This is NotHack version ${require("../package.json").version}`);
const Vue = require("vue");

Vue.component("game-canvas",require("./components/game-canvas.vue"));
Vue.component("hud-bar",require("./components/hud-bar.vue"));

new Vue({
  el: "#app",
  render: r => r(require("./App.vue"))
});
