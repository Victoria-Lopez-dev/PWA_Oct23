//import express from 'express';
 //en el package.json debemos agregar "type": "module", si queremos utilizar el import from, en vez del require
const express=require('express');
const server=express();
const port=4000;

require('./config/coneccionDB');//traer el modulo de la coneccion
//import './config/coneccionDB.js'

//middlewares
server.use(express.json());
//vinculacion a las rutas
server.use("",require('./alumnos/alumnosRoutes'));

server.listen(port,()=>{
    console.log("Server corriendo en el puerto "+ port)
});