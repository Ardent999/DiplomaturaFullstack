var express = require('express');
var router = express.Router();


router.get('/', function(req, res, next) {
    res.render('admin/recursos', {
        layout: 'admin/layout',
        usuario: req.session.nombre,
        apellido: req.session.apellido,
        clearance:  req.session.clearance,
        clear1: req.session.clearance >= 1,
        clear2: req.session.clearance >= 2
      });
    });

module.exports = router;
