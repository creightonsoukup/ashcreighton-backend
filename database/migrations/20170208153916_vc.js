exports.up = function(knex, Promise) {
  return knex.schema.createTable('vc', function(table) {
    table.increments('id').primary();
    table.string('name');
    table.string('type');
    table.string('city');
    table.string('state');
    table.string('country')
    table.string('website');
    table.text('description');
    table.dateTime('date_added');
    table.integer('investments_last_twelve');
    table.integer('active_portfolio');
    table.string('last_fund_size');
    table.dateTime('last_fund_date');
    table.string('dry_powder');
    table.integer('exits');
    table.integer('year_founded')
    table.float('investment_range_low')
    table.float('investment_range_high')
    table.integer('investments')
    table.timestamp('created_at').defaultTo(knex.fn.now());
    table.timestamp('updated').defaultTo(knex.fn.now());
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('vc');
};
