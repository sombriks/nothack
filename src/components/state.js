//
const Dexie = require("dexie");
const { Store } = require("vuex");


const state = {};

const store = new Store({
  state
});

const db = new Dexie("nothack");

db.version(1).stores({
  player: '++id,name,race,job1,job2'
});

module.exports = {
  store,
  db
};
