const express=require('express');
const server=express();
const port=4000;
const cors=require('cors');

require('./config/coneccionDB')

//middlewares
server.use(express.json());
server.use(cors());

server.use("",require("./alumnos/routesAlumnos"));

server.listen(port,()=>{
    console.log("Server corriendo en el puerto "+ port)
});

