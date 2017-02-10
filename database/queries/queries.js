var knex = require('./knex.js');

function getAllVc () {
  return knex('vc').orderBy('name', 'asce')
}

function editVc (id, name, type, city, state, country, website, description, date_added, investments_last_twelve, active_portfolio, last_fund_size, last_fund_date, dry_powder, exits, year_founded, investment_range_low, investment_range_high, investments) {
  return getAllVc().where('id', id).update({
    name : name,
    type: type,
    city: city,
    state: state,
    country: country,
    website: website,
    description: description,
    date_added: date_added,
    investments_last_twelve: investments_last_twelve,
    active_portfolio: active_portfolio,
    last_fund_size: last_fund_size,
    last_fund_date: last_fund_date,
    dry_powder: dry_powder,
    exits: exits,
    year_founded: year_founded,
    investment_range_low: investment_range_low,
    investment_range_high: investment_range_high,
    investments: investments,
    updated: new Date()
  })
}

function newVc (name, type, city, state, country, website, description, date_added, investments_last_twelve, active_portfolio, last_fund_size, last_fund_date, dry_powder, exits, year_founded, investment_range_low, investment_range_high, investments) {
  return getAllVc().insert({
    name: name,
    type: type,
    city: city,
    state: state,
    country: country,
    website: website,
    description: description,
    date_added: date_added,
    investments_last_twelve: investments_last_twelve,
    active_portfolio: active_portfolio,
    last_fund_size: last_fund_size,
    last_fund_date: last_fund_date,
    dry_powder: dry_powder,
    exits: exits,
    year_founded: year_founded,
    investment_range_low: investment_range_low,
    investment_range_high: investment_range_high,
    investments: investments,
    updated: new Date()
  })
}


module.exports = {
  getAllVc,
  newVc,
  editVc
}
