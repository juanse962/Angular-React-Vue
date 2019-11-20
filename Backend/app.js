'use strict'

//Cargar modulos de node para cargar el server
var express = require("express");
var bodyParser = require("body-parser");

//ejecutar express (http)
var app = express();

//Cargar ficheros rutas

//Middlewares
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

//CORS

//Añadir prefijos

//Ruta o metodo para el API REST
app.get('/probando', (req,res)=> {
    return res.status(200).send({
        curso: 'Master en Frameworks JS',
        autor: 'Juan Sebastian Gomez'
    });
});

//Exportar monulos actuales
module.exports = app;