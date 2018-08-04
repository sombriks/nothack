<template>
  <div id="app">
    <game-canvas></game-canvas>
    <hud-bar></hud-bar>
  </div>
</template>

<script>
module.exports = {
  name: "App"
}
</script>

<style scoped>
#app {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
}
</style>
