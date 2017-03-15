
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('funded_startup').del()
    .then(function () {
      // Inserts seed entries
      return knex('funded_startup').insert([
      {
        name: 'test',
        city: 'test',
        state: 'test',
        country: 'test',
        description: 'test',
        website: 'data.homepage_url',
        domain: 'data.homepage_domain',
        facebook: 'data.facebook_url',
        twitter:' data.twitter_url',
        linkedin: 'data.linkedin_url',
        profile_image: 'data.profile_image_url'
      }
      ]);
    });
};
