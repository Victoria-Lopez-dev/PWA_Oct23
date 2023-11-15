const express =require("express");
const server=express();
const port=4000;
const todosLosPlatos=require('./lugar-comidas.platos.json');

server.use(express.json());//middlewares

//escuchas.. ruteos controllers

server.get('/platos',(req,res)=>{
    res.send(todosLosPlatos)
});
server.get('/usuarios',(req,res)=>{
    res.send("mandamos usuarios")
});

// server.get('/platos/:categoria/:id',(req,res)=>{
//     let parametros=req.params//objeto con todos los parametros agregados
//     console.log(parametros.categoria)
//     res.send("peticion Ok")
// })
server.get('/platos/:categoria',(req,res)=>{
    let parametros=req.params//objeto con todos los parametros agregados
    console.log(parametros.categoria)
    res.send("peticion Ok")
})


server.post('/nuevoPlato',(req,res)=>{
    console.log(req.body)
    res.status(201).send("plato cargado");
    if(req.body === undefined){
        res.status(500).send("error en server");
    }
});

server.put('/modificarPlato/:id',(req,res)=>{
    console.log(req.body)
    console.log("parametros recibidos en el head: "+ req.params.id)

    res.status(200).send("Se recibio la modificacion del plato...")

});


server.listen(port,()=>{
    console.log("server escuchando en el puerto "+port)
});

//vemos a la vuelta

// orden de carpetas
// modificacion de JSON 
//info de un formulario HTML 
// motores de templates 