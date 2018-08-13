//
require("./main.css");
//
console.log(`This is NotHack version ${require("../package.json").version}`);
//
const Vue = require("vue");
Vue.use(require("vuex"));

Vue.component("game-canvas", require("./components/templates/game-canvas.vue"));
Vue.component("hud-bar", require("./components/templates/hud-bar.vue"));

const { store } = require("./components/state");

window.nothackvm = new Vue({
  el: "#app",

  render: r => r(require("./App.vue"))
});
