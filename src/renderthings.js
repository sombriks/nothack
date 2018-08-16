//
const camera = (board, map, pos, player) => {
  map.split("\n").map(e => {
    board.innerHTML += "<span>" + e + "</span><br/>";
  });

  board.style.width = `${window.innerWidth / 1.5}px`;
  board.style.height = `${window.innerHeight / 1.5}px`;
  document.body.style.height = `${window.innerHeight}px`;
};

module.exports = {
  camera
};
