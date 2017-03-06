exports.up = function(knex, Promise) {
  return knex.schema.createTable('vc_startup', function(table) {
    table.increments('id').primary();
    table.integer('vc_id');
    table.integer('startup_id');
    table.string('lead');
    table.dateTime('date_of_investment');
    table.string('financing_round')
    table.timestamp('date_added').defaultTo(knex.fn.now());
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('vc_startup');
};
