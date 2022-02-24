var express = require('express');
var router = express.Router();

router.get('/', function (req, res, next) {
  res.render('admin/portal', {
    layout: 'admin/layout'
  });
});


module.exports = router;



// INSERT INTO `usuarioslab` (`id_usu`, `nombre`, `apellido`, `edad`, `mail`, `password`) VALUES (NULL, 'Federico', 'Serra', '28', 'federico@researchlab.achoo', MD5('utnrocks'));