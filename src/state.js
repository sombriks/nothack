//
const Dexie = require("dexie");
const uuid4 = require("uuid/v4");

const db = new Dexie("nothack");

db.version(1).stores({
  player: "++id,name,race,job1,job2"
});

db.on("populate", _ => {
  db.player.add({
    name: `local-player-${uuid4()}`,
    character:"\U+0424",
    race: "human",
    job1: "warrior",
    job2: "cooker"
  });
});

module.exports = {
  db
};
