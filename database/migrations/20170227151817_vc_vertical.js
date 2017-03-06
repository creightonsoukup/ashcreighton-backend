exports.up = function(knex, Promise) {
  return knex.schema.createTable('vc_vertical', function(table) {
    table.integer('vc_id');
    table.integer('vertical_id');
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('vc_vertical');
};
