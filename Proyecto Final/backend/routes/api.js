var express = require('express');
var router = express.Router();
var novedadesModel = require('./../models/novedadesModel')
var cloudinary = require('cloudinary').v2;
var nodemailer = require('nodemailer');

router.get('/novedades', async function (req, res, next) {
    let novedades = await novedadesModel.getNovedades();

        //this part is for frontend. 
        //above gets the array, then a map is made to check if theres an image in the sql (image_id2) if there is, a constant is made of the cloudi url of it, that constant is then used to show the image in NovedadesPage
    novedades = novedades.map(novedades => {
        if (novedades.image_id2) {
            const imageneep = cloudinary.url(novedades.image_id2, {
                width: 300,
                height: 300,
                crop: 'fill'
            });
            return {
                ...novedades,
                imageneep
            }
        } else {
            return {
                ...novedades,
                imageneep: ''
            }
        }
    });

    res.json(novedades);
});

router.post('/contactoEmp', async (req, res) => {
    const mail = {
        to: 'ContactoEmpresas@researchlab.achuu',
        subject: 'Contacto Empresas',
        html: `La Empresa: ${req.body.empresa}, se a contactado a traves de nuestra pagina.<br>
        Busca mas informacion sobre nuestros servicios y sus costos. <br>
        Ademas agrego una casilla de E-mail: ${req.body.emailEmp} y/o un Telefono: ${req.body.telefonoEmp} para ser contactado a. <br>
        Finalmente, dejo el siguiente comentario a ser valorado. <br>
        ${req.body.comentarioEmp} `
    }

    const transport = nodemailer.createTransport({
        host: process.env.SMTP_HOST,
        port: process.env.SMTP_PORT,
        auth: {
            user: process.env.SMTP_USER,
            pass: process.env.SMTP_PASS,
        }
    }); //cierra transp

    await transport.sendMail(mail)

    res.status(201).json({
        error: false,
        message: 'Mensaje enviado'
    });
}); //cierra post/api

router.post('/contactoPac', async (req, res) => {
    const mail2 = {
        to: 'Contacto@researchlab.achuu',
        subject: 'Consulta',
        html: `${req.body.nombre} ${req.body.apellido} con Dni: ${req.body.dni} se contacto a traves de la web con el siguiente comentario: <br>
        ${req.body.comentario} <br>
        Busca respuesta mediante los siguientes medios:<br>
        Telefono: ${req.body.telefono} <br>
        E-mail: ${req.body.email} <br>`
    }

    const transport2 = nodemailer.createTransport({
        host: process.env.SMTP_HOST,
        port: process.env.SMTP_PORT,
        auth: {
            user: process.env.SMTP_USER,
            pass: process.env.SMTP_PASS,
        }
    }); //cierra transp

    await transport2.sendMail(mail2)

    res.status(201).json({
        error: false,
        message: 'Mensaje enviado'
    });
}); //cierra post/api

module.exports = router;