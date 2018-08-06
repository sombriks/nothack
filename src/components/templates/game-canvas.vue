<template>
  <div id="game" v-html="map"></div>
</template>

<script>
const mapdata = require("./static-maps/world1")
module.exports = {
  name: "GameCanvas",
  data: _ => ({ map: "", localplayer: "@" }),
  created() {
    this.map = mapdata;
  }
}
</script>

<style scoped>
#game {
  border: 1px solid lightgreen;
  width: 40em;
  height: 40em;
}
</style>
