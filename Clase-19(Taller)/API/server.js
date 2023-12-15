const express=require('express');
const server=express();
const port=4300;
const cors=require('cors');
const routes=require("./routes/peliculasRoutes")

//middlewares
server.use(express.json());
server.use(cors());//conflicto de cruce de puertos(seguridad de llamado a info desde otro puerto)
server.use(express.urlencoded({extended:true}));// procesar datos enviados a la api que fueron enviarmos por medio de formularios(ver lo enviado por el body convierte en un formato utilizable)

//vincular los routes

server.use('',routes)// http://localhost:4300 -> redirige a las peticiones del documento routes/peliculasRoutes.js

server.listen(port,()=>{
    console.log("Server corriendo en puerto "+ port)
});