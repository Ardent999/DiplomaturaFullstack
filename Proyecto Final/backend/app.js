var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var session = require('express-session');
var md5 = require('md5');

require('dotenv').config();
var pool = require('./models/bd')

var fileUpload = require('express-fileupload');
var cors = require('cors');

var indexRouter = require('./routes/index');
var loginRouter = require('./routes/admin/login');
var recursosAdmRouter = require('./routes/admin/recursos');
var configAdmRouter = require('./routes/admin/userconfig');
var homeAdmRouter = require('./routes/admin/home');
var novedadesAdmRouter = require('./routes/admin/novedades');
var apiRouter = require('./routes/api');


// const req = require('express/lib/request');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'hbs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use(session({
  secret: '13rhr7g23o75tyoXH38RTG376TRGia3nxg3rf6',
  resave: false,
  saveUninitialized: true
}));

secured = async(req,res,next) => {
  try{
    console.log(req.session.mail);
    if (req.session.mail){
      next();
    } else {
      res.redirect('/login');
    }
  } catch(error){
    console.log(error);
  }
}

app.use(fileUpload({
  useTempFiles: true,
  tempFileDir: '/tmp/',
  // folder: 'transportesX'
}));




// app.get('/admin/home', function (req, res) {
//   res.render('admin/home', {
//     title: 'Sesion Research Lab',
//     nombre: req.session.nombre,
//     apellido: req.session.apellido,
//     layout: 'admin/layout',
//   })
// });




// app.post('/bdadd', function (req, res) {

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
//     res.redirect('/userconfig')
//   }
// });

///bddel no funciona 

// app.post('/bddel', function (req, res) {
//   var nom = req.body.bdnom;
//     var ape = req.body.bdape;

//   if (nom && ape) {
    

//     pool.query('delete from usuarioslab where nombre=? and apellido=? ', [nom, ape]);
//     req.session.mensjenviodel = 'Has deleteado a ' + nom + ' ' + ape + '.'
//     req.session.mensjenviofaildel = null
//     req.session.mensjenvio = null
//     req.session.mensjenviofail = null
//     res.redirect('/userconfig')
//   } else {
//     req.session.mensjenviofaildel = 'esto ha fallido test.'
//     req.session.mensjenviodel = null
//     req.session.mensjenvio = null
//     req.session.mensjenviofail = null
//     res.redirect('/userconfig')
//   }

// });


// var nam = 'juan';
// var apa = 'ram';
// pool.query('delete from empleados where nombre=? and apellido=?', [nam, apa]).then(function (resultados) {
//   console.log(resultados)
// });

//borrar
// var id = 26;
// pool.query('delete from empleados where id_emp=?', [id]).then(function(resultados){
//     console.log(resultados)
//   });

// app.get('/salir', function (req, res) {
//   req.session.destroy()
//   res.redirect('/login')
// });

// app.get('/salir', function(req,res) {
//   req.session.destroy()
//   res.redirect('/')
// });

app.use('/', indexRouter);
app.use('/login', loginRouter);
app.use('/admin/recursos', secured, recursosAdmRouter);
app.use('/admin/userconfig', secured, configAdmRouter);
app.use('/admin/home', secured, homeAdmRouter);
app.use('/admin/novedades', secured, novedadesAdmRouter);
app.use('/api', cors(), apiRouter);


// catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404));
});

// error handler
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
