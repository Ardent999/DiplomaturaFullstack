var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next) {
  res.render('admin/home', {
      layout:'admin/layout',
      usuario: req.session.email,
  });
});


module.exports = router;