var knex = require('./knex.js');

function getVc () {
  return knex('vc').orderBy('name', 'asce')
}


module.exports = {
  getVc
}
