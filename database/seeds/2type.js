
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('type').del()
    .then(function () {
      // Inserts seed entries
      return knex('table_name').insert([
        {type: 'Pre-Seed'},
        {type: 'Seed'},
        {type: 'Series A'},
        {type: 'Series B'}
      ]);
    });
};
