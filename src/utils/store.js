const engine = require('store/src/store-engine');

const storages = [require('store/storages/localStorage')];

const plugins = [
  require('store/plugins/defaults'),
  require('store/plugins/expire')
];

const store = engine.createStore(storages, plugins);

export default store;
