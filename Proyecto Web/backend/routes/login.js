var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next) {
  res.render('login');
});

router.get('/logon', function(req, res, next) {
  res.redirect('portal');
});

module.exports = router;