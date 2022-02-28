var express = require('express');
var router = express.Router();
var adminModel = require('./../../models/adminModel')
var md5 = require('md5');


router.get('/', function (req, res, next) {
  res.render('admin/userconfig', {
    layout: 'admin/layout',
    usuario: req.session.nombre,
    apellido: req.session.apellido,
    mensjenvio: req.session.mensjenvio,
    mensjenviofail: req.session.mensjenviofail,
    mensjenviodel: req.session.mensjenviodel,
    mensjenviofaildel: req.session.mensjenviofaildel
  });
});

router.get('/userlist', async function (req, res, next) {
  var users = await adminModel.fetchUsers();
  res.render('admin/userlist', {
    layout: 'admin/layout',
    usuario: req.session.nombre,
    apellido: req.session.apellido,
    users
  });
});

// router.post('/bdadd', function (req, res) {

//   if (req.body.bdnombre && req.body.bdapellido && req.body.bdedad && req.body.bdmail && req.body.bdclave) {

//     var obj = {
//       nombre: req.body.bdnombre,
//       apellido: req.body.bdapellido,
//       edad: req.body.bdedad,
//       mail: req.body.bdmail,
//       password: md5(req.body.bdclave),
//       clearance: 0
//     }

//     pool.query('insert into usuarioslab set ?', [obj]);
//     req.session.mensjenvio = 'gracias por registrarte'
//     req.session.mensjenviofail = null
//     // req.session.mensjenviofaildel = null
//     // req.session.mensjenviodel = null
//     res.redirect('/admin/userconfig')

//   } else {
//     req.session.mensjenviofail = 'ingrese datos en todos los campos.'
//     req.session.mensjenvio = null
//     // req.session.mensjenviofaildel = null
//     // req.session.mensjenviodel = null
//     res.redirect('/admin/userconfig')
//   }
// });

router.get('/deleteuser/:id', async (req, res, next) => {
  var usur = req.params.id;
  await adminModel.deleteUserById(usur);
  res.redirect('/admin/userconfig/userlist')
});

router.get('/adduser', (req, res, next) => {
  res.render('admin/adduser', {
    layout: 'admin/layout'
  })
});

router.post('/adduser', async (req, res, next) => {
  var usu = {
    nombre: req.body.nombre,
    apellido: req.body.apellido,
    edad: req.body.edad,
    mail: req.body.mail,
    password: md5(req.body.clave),
    clearance: 0
  }
  try {
    if (req.body.nombre != "" && req.body.apellido != "" && req.body.edad != "" && req.body.mail != "" && req.body.clave != "") {
      await adminModel.insertUsers(usu);
      res.redirect('/admin/userconfig/userlist')
    } else {
      res.render('admin/adduser', {
        layout: 'admin/layout',
        error: true,
        message: 'Todos los campos son requeridos'
      })
    }
  } catch (error) {
    console.log(error)
    res.render('admin/adduser', {
      layout: 'admin/layout',
      error: true,
      message: 'No se cargo el usuario'
    })
  }
});


router.get('/edituser/:id', async (req, res, next) => {
  var usur = req.params.id;
  console.log(req.params.id);
  var users = await adminModel.fetchUserById(usur);

  res.render('admin/edituser', {
    layout: 'admin/layout',
    users
  });
});


router.post('/edituser', async (req, res, next) => {
  try {
    let obj = {
      nombre: req.body.nombre,
      apellido: req.body.apellido,
      edad: req.body.edad,
      mail: req.body.mail,
      clearance: req.body.clearance
    }
    console.log(obj)

    await adminModel.modifyUserById(obj, req.body.usu_num);
    res.redirect('/admin/userconfig/userlist');
  }
  catch (error) {
    console.log(error)
    res.render('admin/edituser', {
      layout: 'admin/layout',
      error: true,
      message: 'No se modifico el usuario'
    })
  }
})

module.exports = router;



// INSERT INTO `usuarioslab` (`id_usu`, `nombre`, `apellido`, `edad`, `mail`, `password`, `clearance`) VALUES (NULL, 'Federico', 'Serra', '28', 'federico@researchlab.achuu', MD5('utnrocks'), '2');