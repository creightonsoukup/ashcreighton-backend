var express = require('express');
var router = express.Router();
var queries = require('../database/queries/queries.js')

/* GET home page. */
router.get('/vc', function(req, res, next) {
    queries.getVc()
      .then((data) => {
        res.send(data)
      })
});

module.exports = router;
