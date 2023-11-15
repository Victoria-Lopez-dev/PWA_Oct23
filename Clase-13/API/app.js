const express =require("express");
const server=express();
const port=4000;
const routerUsuarios=require('./routes/routesUsuarios');
const routerPlatos=require('./routes/routesPlatos');

server.use(express.json());//middlewares - proceso previo
server.use(express.urlencoded({extended:true}))// procesar datos enviados a la api que fueron enviarmos por medio de formularios(ver lo enviado por el body convierte en un formato utilizable)

server.use("/usuarios",routerUsuarios)//reciba peticion que inicie con el endpoint "/usuarios" utilice los ruteos del archivo "routesUsuarios.js"

server.use("/platos",routerPlatos)//recibe una peticion con el endpoint "/platos" utilice las rutas que figuran en "routesPlatos.js"


server.listen(port,()=>{
    console.log("server escuchando en el puerto "+port)
});



// orden de carpetas -> rutas - controllers(callbacks)


