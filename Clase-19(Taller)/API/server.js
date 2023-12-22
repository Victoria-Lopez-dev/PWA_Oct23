require('dotenv').config();
const express=require('express');
const server=express();
const port= process.env.PORT || 4300;// que utilice el puerto asignado por el hosting de la api , o  el 4300
const cors=require('cors');
const routes=require("./routes/peliculasRoutes")

//coneccion a db

require("./config/db");

//middlewares
server.use(cors());//conflicto de cruce de puertos(seguridad de llamado a info desde otro puerto)

server.use(express.json());
server.use(express.urlencoded({extended:true}));// procesar datos enviados a la api que fueron enviarmos por medio de formularios(ver lo enviado por el body convierte en un formato utilizable)

server.use('/imagen',express.static("./imagenes"));//indicar el endpoint a donde redirge a la imagen

//vincular los routes
server.use('',routes)// http://localhost:4300 -> redirige a las peticiones del documento routes/peliculasRoutes.js

server.listen(port,()=>{
    console.log("Server corriendo en puerto "+ port)
});