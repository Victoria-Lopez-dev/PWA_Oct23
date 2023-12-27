require('dotenv').config();
const express=require('express');
const server=express();
const port= process.env.PORT || 4300;// que utilice el puerto asignado por el hosting de la api , o  el 4300
const cors=require('cors');
const routesUsuarios=require("./routes/routesUsuarios");
const routesReparaciones=require("./routes/routesReparaciones");

//coneccion a db

require("./config/db");

//middlewares

//vincular los routes
server.use('/usuarios',routesUsuarios)
server.use('/reparaciones',routesReparaciones)


server.listen(port,()=>{
    console.log("Server corriendo en puerto "+ port)
});