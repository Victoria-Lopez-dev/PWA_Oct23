// import express from 'express';// otra manera de llamar a los paquetes y modulos
//import {todosLosAlumnos,cargarAlumno} from './alumnosController'

const express=require('express');
const route=express.Router();
const {todosLosAlumnos,cargarAlumno,unAlumno}=require('./alumnosController');
const dbConnection = require('../config/coneccionDB');

route.get("/",todosLosAlumnos);
route.get("/alumno/:nombre",unAlumno);//peticion que da como informacion el nombre de un alumno para que podamos buscar al mismo.Al ser de tipo get lo pasamos por el head
route.post("/",cargarAlumno);//peticion que contiene la informacion en el body

//route.delete("/eliminar/:dni",(req,res)=>{
//  dbConnection.query("DELETE FROM alumnos WHERE dni=?"...)
// })

//route.put("/actualizar",(req,res)=>{
//  dbConnection.query("UPDATE ...."...)
// })

module.exports=route