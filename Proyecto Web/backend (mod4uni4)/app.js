var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var session = require('express-session');

var indexRouter = require('./routes/index');
var homeRouter = require('./routes/home')
var recursosRouter = require('./routes/recursos');
var novedadesRouter = require('./routes/novedades');
var loginRouter = require('./routes/admin/login');
var portalRouter = require('./routes/admin/portal');
const req = require('express/lib/request');

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
  secret: 'qwertyuioplkjhgfdsazxcvbnm',
  resave: false,
  saveUninitialized: true
}));

app.post('/logon', function (req, res) {
  
  if (req.body.nombre && req.body.apellido && req.body.password.length >= 8) {
    req.session.nombre = req.body.nombre
    req.session.apellido = req.body.apellido
    res.redirect('/portal')
  } else {
    if (req.body.nombre == 0){
      req.session.nombre = 'Debe ingresar un nombre'
    } else {
      req.session.nombre = ''
    }
    if (req.body.apellido == 0){
      req.session.apellido = 'Debe ingresar un apellido'
    } else {
      req.session.apellido = ''
    }
    if (req.body.password.length < 8){
      req.session.password = 'Debe ingresar una contrasena con por lo menos 8 caracteres'
    } else {
      req.session.password = ''
    }
    res.redirect('/login&fail')
    
  }
});

app.get('/portal', function (req, res) {
  var success = Boolean(req.session.nombre && req.session.apellido)

  res.render('admin/portal', {
    title: 'Sesion Research Lab',
    success: success,
    nombre: req.session.nombre,
    apellido: req.session.apellido,
    layout:'admin/layout'
  })
});

app.get('/login&fail', function (req, res) {
  
  res.render('admin/login', {
    mensjfail: 'No todos los datos ingresados son correctos',
    nombrefail: req.session.nombre,
    apellidofail: req.session.apellido,
    passfail: req.session.password
  })
});

// app.get('/loginfail', function (req, res) {
//   var nomfail = Boolean(req.session.nombre)
//   var apefail = Boolean(req.session.apellido)
//   var pasfail = Boolean(req.session.password)
  
//   res.render('admin/login', {
//     mensjfail: 'No todos los datos ingresados son correctos',
//     nombrefail: nomfail,
//     apellidofail: apefail,
//     passfail: pasfail
//   })
// });

app.get('/salir', function (req, res) {
  req.session.destroy()
  res.redirect('/login')
});

app.use('/', indexRouter);
app.use('/home', homeRouter)
app.use('/recursos', recursosRouter);
app.use('/novedades', novedadesRouter);
app.use('/login', loginRouter);
app.use('/admin/portal', portalRouter);


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
