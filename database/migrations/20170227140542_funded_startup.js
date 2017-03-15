exports.up = function(knex, Promise) {
  return knex.schema.createTable('funded_startup', function(table) {
    table.increments('id').primary();
    table.string('name');
    table.string('city');
    table.string('state');
    table.string('country');
    table.string('domain');
    table.string('website');
    table.string('facebook');
    table.string('twitter');
    table.string('linkedin');
    table.text('description');
    table.string('profile_image');
    table.timestamp('date_added').defaultTo(knex.fn.now());
    table.timestamp('updated').defaultTo(knex.fn.now());
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('funded_startup');
};
