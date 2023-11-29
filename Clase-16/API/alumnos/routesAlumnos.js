const express=require('express');
const route=express.Router();

const {traerAlumnos,cargarAlumno}=require("./controllersAlumnos")

route.get('/',traerAlumnos)
route.post('/cargaAlumno',cargarAlumno)
module.exports=route;