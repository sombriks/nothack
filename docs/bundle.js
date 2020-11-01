
(function(l, r) { if (l.getElementById('livereloadscript')) return; r = l.createElement('script'); r.async = 1; r.src = '//' + (window.location.host || 'localhost').split(':')[0] + ':35729/livereload.js?snipver=1'; r.id = 'livereloadscript'; l.getElementsByTagName('head')[0].appendChild(r) })(window.document);
var stage1 = _ => {
  const ret = [];
  let i = 19;
  while (i--) {
    let j = 55;
    let row = [];
    ret.push(row);
    while (j--) {
      row.push('.');
    }
  }
  return ret
};

// rollup is the new browserify

const mapa = stage1();

const player = {
  c: '@', y: 0, x: 0,
  up() { if (this.y > 0) this.y--; paint(); },
  down() { if (this.y < mapa.length-1) this.y++; paint(); },
  left() { if (this.x > 0) this.x--; paint(); },
  right() { if (this.x < mapa[0].length-1) this.x++; paint(); }
};

document.addEventListener("keydown", e => {
  switch (e.key) {
    case 'ArrowUp': return player.up()
    case 'ArrowDown': return player.down()
    case 'ArrowLeft': return player.left()
    case 'ArrowRight': return player.right()
  }
});

const paint = _ => {
  const mapa = stage1();
  const pre = document.getElementById("game");
  mapa[player.y][player.x] = player.c;
  pre.innerHTML = mapa.map(e => e.join("")).join("\n");
};

paint();
