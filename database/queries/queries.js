var knex = require('./knex.js');

function getAllVc () {
  return knex('vc').orderBy('name', 'asce')
}

function getAllStartups () {
  return knex('funded_startup').orderBy('name', 'asce')
}

function getAllInvestments () {
  return knex('vc_startup').orderBy('name', 'asce')
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

function getVc(id) {
  return getAllVc().where('id',id)
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
    date_added: new Date,
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

function addPortfolioCompany (id, name, facebook, twitter, linkedin, description, city, state, website, vertical) {
    return getAllStartups().insert({
      name: name,
      city: city,
      state: state,
      country: 'USA',
      website: website,
      facebook: facebook,
      twitter: twitter,
      linkedin: linkedin,
      description: description,
      date_added: new Date(),
      updated: new Date()
    })
  }

function addInvestment(vcId, startupId,
  round, date, lead) {
  return getAllInvestments().insert({
    vc_id: parseInt(vcId),
    startup_id: parseInt(startupId),
    lead: lead,
    date_of_investment: new Date(),
    financing_round: round,
    date_added: new Date()
  })
}

function getPorfolio(vcId) {
  const id = parseInt(vcId)
  console.log(id)
  return getAllStartups().join('vc_startup', 'funded_startup.id', 'vc_startup.startup_id' )
    .where('vc_startup.vc_id', id)
}



module.exports = {
  getAllVc,
  newVc,
  editVc,
  getVc,
  addPortfolioCompany,
  getAllStartups,
  getAllInvestments,
  addInvestment,
  getPorfolio
}
