const express=require('express');
const server=express();
const port=4000;
const platosRoutes=require("./platos/platosRoutes.js");

require('./config/db.js')//nos traemos la coneccion a la DB MongoDB

server.use(express.json())
server.use("",platosRoutes)

server.listen(port,()=>{
    console.log("Server corriendo en el puerto "+ port)
})