const express=require('express');
const server=express();
const port=4000;


require('./config/db.js')//nos traemos la coneccion a la DB MongoDB

server.use(express.json())
server.use("/usuario",require("./usuarios/router.js"))

server.listen(port,()=>{
    console.log("Server corriendo en el puerto "+ port)
})