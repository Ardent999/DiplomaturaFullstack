var express = require('express');
var router = express.Router();
var adminModel = require('./../../models/adminModel')
var md5 = require('md5');


// router.get('/', function (req, res, next) {
//   res.render('admin/userconfig', {
//     layout: 'admin/layout',
//     usuario: req.session.nombre,
//     apellido: req.session.apellido,
//     mensjenvio: req.session.mensjenvio,
//     mensjenviofail: req.session.mensjenviofail,
//     mensjenviodel: req.session.mensjenviodel,
//     mensjenviofaildel: req.session.mensjenviofaildel
//   });
// });

router.get('/', async function (req, res, next) {
  var users = await adminModel.fetchUsers();
  res.render('admin/userlist', {
    layout: 'admin/layout',
    usuario: req.session.nombre,
    apellido: req.session.apellido,
    users
  });
});

router.get('/deleteuser/:id', async (req, res, next) => {
  var usur = req.params.id;
  await adminModel.deleteUserById(usur);
  res.redirect('/admin/userconfig')
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
      res.redirect('/admin/userconfig')
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
  console.log(users)

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
    res.redirect('/admin/userconfig');
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

router.get('/editpass/:id', async (req, res, next) => {
  var usur = req.params.id;
  console.log(req.params.id);
  var users = await adminModel.fetchUserById(usur);
  console.log(users)

  res.render('admin/editpass', {
    layout: 'admin/layout',
    users
  });
});

//change pass
router.post('/editpass', async (req, res, next) => {
  
  //var clavevieja = req.body.clavevieja
  //const clavevieja222 = req.body.clavevieja222
  //console.log(clavevieja)
 // console.log(clavevieja222)
  //if (md5(clavevieja) === clavevieja222 ) {
    try {
      if (req.body.clavenueva) {
      let obj2 = {
        password: md5(req.body.clavenueva),
      }
      console.log(req.session.password)
    

      await adminModel.modifyUserById(obj2, req.body.usu_num2);
      res.redirect('/admin/userconfig');
    } else {
      res.render('admin/editpass', {
        layout: 'admin/layout',
        error: true,
        message: 'Debe ingresar una Clave'
      })
    }
    }
    catch (error) {
      console.log(error)
      res.render('admin/editpass', {
        layout: 'admin/layout',
        error: true,
        message: 'No se modifico la clave'
      })
    }
  //} else {
   // res.render('admin/editpass', {
     // layout: 'admin/layout',
     // error: true,
     // message: 'Clave incorrecta'
   // })
  //};
});


module.exports = router;



// INSERT INTO `usuarioslab` (`id_usu`, `nombre`, `apellido`, `edad`, `mail`, `password`, `clearance`) VALUES (NULL, 'Federico', 'Serra', '28', 'federico@researchlab.achuu', MD5('utnrocks'), '2');