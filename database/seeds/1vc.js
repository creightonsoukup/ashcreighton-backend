const vcData = require('../vc_data')

const data = []

exports.seed = function(knex, Promise) {
  vcData.forEach(function (vcData) {
       data.push(knex('vc').insert({
       name: vcData.name,
       website: vcData.website,
       investment_range_low: vcData.investment_range_low,
       investment_range_high: vcData.investment_range_high,
       last_fund_size: vcData.last_fund_size,
       city: vcData.city,
       state: vcData.state,
       country: vcData.country,
       investments_last_twelve: vcData.investments_last_twelve,
       active_portfolio: vcData.active_portfolio,
       investments: vcData.investments,
       dry_powder: vcData.dry_powder,
       last_fund_date: vcData.last_fund_date,
       year_founded: vcData.year_founded,
       description: vcData.description
     }))
  })
    // Deletes ALL existing entries
  return knex('vc').del()
    .then(function () {
      return Promise.all(data);
    });
};
