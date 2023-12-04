const express=require('express');
const server=express();
const port=4000;
const cors=require('cors');

//coneccion a la DB
require('./config/coneccionDB')
//middlewares
server.use(express.json());
server.use(cors());

server.use('/alumnos',require('./routes/alumnosRoutes'))


server.listen(port,()=>{
    console.log("Server corriendo en el puerto "+ port)
});