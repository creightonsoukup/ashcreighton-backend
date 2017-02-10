var express = require('express');
var router = express.Router();
var queries = require('../database/queries/queries.js')

/* GET home page. */
router.get('/vc', function(req, res, next) {
    queries.getAllVc()
      .then((data) => {
        res.send(data)
      })
});

router.post('/vc/update', function(req, res, next) {
  queries.editVc(req.body.id, req.body.name,
    req.body.type, req.body.city, req.body.state,
    req.body.country, req.body.webiste, req.body.description,
    req.body.date_added, req.body.investments_last_twelve,
    req.body.active_portfolio, req.body.last_fund_size,
    req.body.last_fund_date, req.body.dry_powder,
    req.body.exits, req.body.year_founded,
    req.body.investment_range_low, rec.body.investment_range_high,
    req.body.investments)
      .then((data) => {
        res.send('success')
      })
})

router.post('/vc/new', function(req, res, next) {
  queries.newVc(req.body.name,
    req.body.type, req.body.city, req.body.state,
    req.body.country, req.body.webiste, req.body.description,
    req.body.date_added, req.body.investments_last_twelve,
    req.body.active_portfolio, req.body.last_fund_size,
    req.body.last_fund_date, req.body.dry_powder,
    req.body.exits, req.body.year_founded,
    req.body.investment_range_low, req.body.investment_range_high,
    req.body.investments)
      .then((data) => {
        res.send('success')
      })
})

module.exports = router;
