exports.up = function(knex, Promise) {
  return knex.schema.createTable('type', function(table) {
    table.increments('id').primary();
    table.string('type');
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('type');
};
