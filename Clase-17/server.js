require("dotenv").config();

const express=require('express');
const server=express();
const port=process.env.PORT;//la info del port que se encuentra en las variables de entorno
const cors=require('cors');

//coneccion a la DB
require('./config/coneccionDB')
//middlewares
server.use(express.json());
server.use(cors());
server.use("/imagenes",express.static("./imagenes"));
//server.use("/endpoint",express.static("/carpetaApiImagenes"))

server.use('/alumnos',require('./routes/alumnosRoutes'))


server.listen(port,()=>{
    console.log("Server corriendo en el puerto "+ port)
});