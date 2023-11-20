const express=require('express');
const server=express();
const port=4000;
const path=require('path')//traemos el modulo path que ya viene con express.

server.use(express.json());//middlewares - acciones intermedias
server.use(express.urlencoded({extended:true}))//para la info recibida por formularios


//configuracion EJS
server.set('views',path.join(__dirname,"views"))//configuramos donde se encuentran las vistas ("paginas" que queremos mostrar)
server.set('view engine','ejs')//le indicamos que las vistas estan utilizando ejs

server.use(express.static(path.join(__dirname ,'public')))//indicamos en donde se encuentran los documentos estaticos


//indicamos la ruta a las peticiones
server.use('',require('./routes/alumnosRoutes'));

server.listen(port,()=>{
    console.log("Api conectada en puerto "+ port)
});


//EJS
//<> % - =

//<%- include("ruta") %> -> incluir una seccion creada en partials u otro ladonen otra
//<%= %> -> imprimimos valores que pasamos 
// <% %> -> incluyo metodos y funciones de JS (codigo JS)
