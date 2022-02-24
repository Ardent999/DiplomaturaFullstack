var express = require('express');
var router = express.Router();
var loginModel = require('./../../models/loginModel')

router.get('/', function(req, res, next) {
  res.render('admin/login');
});

router.post('/', async (req, res, next) => {
  try {
    var usuario = req.body.email;
    var password = req.body.password;
  
    var data = await loginModel.getUserByUsernameAndPassword(usuario, password);
  
    if (data != undefined) {
      req.session.mail = data.mail; //This is used with the secured command. Calls 'mail' from sql
      req.session.nombre = data.nombre; //This is used with the secured command Calls 'nombre' from sql
      req.session.apellido = data.apellido;
      res.redirect('/admin/home');
    } else {
      res.render('admin/login', {
        error: true
      });
    }
  } catch (error){
    console.log(error);
  }
  });
  
  router.get('/logout', function(req, res, next){
    req.session.destroy();
    res.render('admin/login');
  });

module.exports = router;