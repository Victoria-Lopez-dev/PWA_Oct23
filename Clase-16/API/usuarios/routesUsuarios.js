const express=require('express');
const route=express.Router();

route.post('/nuevoUsuarios',cargarUsuario)

//en controllers..
//const cargarUsuario=(req,res)=>{
// let{nombre,apellido,edad}=req.body//traemos la info de la request
   
//     let nuevoAlumno= new modelo({
//         nombre:nombre,
//         apellido:apellido,
//         edad:edad,
//     })//creamos una instancia del alumno 

   
//     let resultado= await modelo.collection.insertOne(nuevoAlumno);//mandamos a cargar el plato a la DB

//     res.status(201).json({'alumno':"creado"})
    

module.exports=route;