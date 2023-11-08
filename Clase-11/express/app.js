//llamar a un modulo express que necesito para armar la API.
const express =require("express");

const app=express(); // nos va a dar acceso a todas las funciones?metodos que probee express

//lista de peticiones

app.get("/saludo",(req,res)=>{
    res.send("respuesta a la peticion de tipo get '/saludo' ")
});
//req -> request-> peticion :head y body(en este caso como es peticion GET solamente me va a mandar info en el head)
//res -> response -> respuesta que le vamos a devolver


app.listen(3000,()=>{
    console.log("Server - Api corriendo en el puerto 3000")
});//metodo de express

/// puertos 3000 o mayores 
