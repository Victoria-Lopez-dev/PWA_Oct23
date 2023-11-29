const express=require('express');
const route=express.Router();

const {traerAlumnos}=require("./controllersAlumnos")

route.get('/',traerAlumnos)

module.exports=route;