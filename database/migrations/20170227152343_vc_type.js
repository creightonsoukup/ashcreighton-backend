exports.up = function(knex, Promise) {
  return knex.schema.createTable('vc_type', function(table) {
    table.integer('vc_id');
    table.integer('type_id');
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('vc_type');
};
