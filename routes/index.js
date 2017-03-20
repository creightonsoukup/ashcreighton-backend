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

router.get('/vc/:id', function(req, res, next) {
  queries.getVc(req.params.id)
    .then((data) => {
      res.send(data)
    })
})

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

router.post('/vc/delete', function(req,res,next) {
  let vcs = req.body.rows
  queries.deleteVCs(vcs)
    .then(() => {
      queries.getAllVc()
      .then((data) => {
        res.send(data)
      })
    })
})

router.get('/portfolio/:id', function (req, res, next) {
  queries.getPortfolio(req.params.id)
    .then((data) => {
      res.send(data)
    })
})

router.post('/portfolio/add', function(req, res, next) {

  queries.searchFundedStartups(req.body.name)
    .then((data) => {
      if(data.length == 0){
        queries.addPortfolioCompany(req.body.name, req.body.facebook,
        req.body.twitter, req.body.linkedin, req.body.description, req.body.city,
        req.body.state, req.body.website, req.body.domain, req.body.profile_image, req.body.country)
          .then((data) => {
            console.log(req.body.id, data[0])
            const startupId = parseInt(data[0])
            const vcId = parseInt(req.body.id)
            queries.addInvestment(vcId, startupId)
              .then((data) => {
                res.send(data)
              })
          })
          .catch((err) => console.error(err))
      } else {
        const startupId = data[0].id
        const vcId = parseInt(req.body.id)
        queries.addInvestment(vcId, startupId)
          .then((data) => {
            res.send(data)
          })
      }
    })

})

router.post('/portfolio/delete', function(req,res,next) {
  let startups = req.body.startups
  let VCId = req.body.vcId
  queries.deleteInvestments(startups, vcId)
    .then(() => {
      queries.getPortfolio(vcId)
        .then((data) => {
          res.send(data)
        })
    })
})

router.post('/portfolio/investment/add', function (req, res, next) {
  queries.addInvestment(req.body.id, req.body.startups)
    .then((data) => {
        res.send('success')
    })
    .catch((err) => console.error(err))
})

router.get('/startup/all', function(req, res, next ) {
  console.log('hello')
  queries.getAllStartups()
    .then((data) => {
      res.send(data)
    })
})

module.exports = router;
