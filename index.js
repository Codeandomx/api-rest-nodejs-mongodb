"use strict"

// Importamos las librerias
const express = require('express');
const bodyParser = require('body-parser');

// Creamos una aplicacion de express
const app = express();
// Asignamos un puerto
const port = process.env.port || 3000;

// configuracion de la app
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

// Creamos un servidor y accedemos desde el puerto 3000
app.listen(port, () => {
	console.log(`API REST corriendo en el puerto ${port}`);
});