var express = require('express');
var router = express.Router();
var novedadesModel = require('./../../models/novedadesModel'); 
var util = require('util');
var cloudinary = require('cloudinary').v2;
const uploader = util.promisify(cloudinary.uploader.upload);
const destroy = util.promisify(cloudinary.uploader.destroy);

router.get('/', async function(req, res, next) {
  var novedades2 = await novedadesModel.getNovedades();

  novedades2 = novedades2.map(novedad2 => {
    if (novedad2.image_id2) {
      const imagen = cloudinary.image(novedad2.image_id2, {
        width: 100,
        height: 100,
        crop: 'fill' //or 'pad'
      });
    return {
        ...novedad2,
        imagen
    }
    } else {
      return {
        ...novedad2,
        imagen: ''
      }
    }
  });

  res.render('admin/novedades', {
      layout:'admin/layout',
      usuario: req.session.nombre,
      apellido: req.session.apellido,
      novedades2
  });
});

router.get('/agregar', (req, res, next) => {
  res.render('admin/agregar', {
    layout: 'admin/layout'
  })
});

router.post('/agregar', async (req, res, next) => {
  try {

    var image_id2 = '';
    if (req.files && Object.keys(req.files).length > 0) {
      imagen = req.files.imagen;
      image_id2 = (await uploader(imagen.tempFilePath)).public_id;
    }

    if (req.body.title != "" && req.body.content != "") {
      await novedadesModel.insertNovedad({
        ...req.body,
        image_id2
      });
      res.redirect('/admin/novedades')

    } else {
      res.render('admin/agregar', {
        layout: 'admin/layout',
        error: true,
        message: 'Todos los campos son requeridos'
      })
    }
  } catch (error) {
    console.log(error)
    res.render('admin/agregar', {
      layout: 'admin/layout',
      error: true,
      message: 'No se cargo la novedad'
    })
  }
});

router.get('/eliminar/:id', async (req, res, next) => {
  var id = req.params.id;

  let novedad1 = await novedadesModel.getNovedadById(id);
  if (novedad1.image_id2) {
    await (destroy(novedad1.image_id2));
  }

  await novedadesModel.deleteNovedadById(id);
  res.redirect('/admin/novedades')
}); //es get porque es una a que manda, no es un formulario

/*Modificar > formulario + traer los datos de 1 sola novedad*/
router.get('/modificar/:id', async (req, res, next) => {
  var id = req.params.id;
  console.log(req.params.id);
  var novedad2 = await novedadesModel.getNovedadById(id);

  res.render('admin/modificar', {
    layout: 'admin/layout',
    novedad2
  });
});

/*Para modificar la novedad*/
router.post('/modificar', async (req, res, next) => {
  try {

    let image_id2 = req.body.img_original;
    let borrar_img_vieja = false;

    if(req.body.img_delete === "1") {
      image_id2 = null;
      borrar_img_vieja = true;
    } else {
      if (req.files && Object.keys(req.files).length > 0) {
        imagen = req.files.imagen;
        image_id2 = (await uploader(imagen.tempFilePath)).public_id;
        borrar_img_vieja = true;
      }
    }
    if (borrar_img_vieja && req.body.img_original) {
      await (destroy(req.body.img_original));
    }

    let obj = {
      title: req.body.title,
      content: req.body.content,
      image_id2
    }
    console.log(obj)

    await novedadesModel.modificarNovedadById(obj, req.body.id);
    res.redirect('/admin/novedades');
  }
  catch(error) {
    console.log(error)
    res.render('admin/modificar', {
      layout: 'admin/layout',
      error: true,
      message: 'No se modifico la novedad'
    })
  }
})

module.exports = router;