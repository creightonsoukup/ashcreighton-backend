exports.up = function(knex, Promise) {
  return knex.schema.createTable('startup_vertical', function(table) {
    table.increments('startup_id')
    table.string('vertical_id');
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('startup_vertical');
};
