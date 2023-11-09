const express=require('express');
const app= express();
const port=4000;

app.use(express.json())//indicarle el uso de JSON en la info recibiendo

let platos=[{
    nombrePlato: "hamburguesa completa",
    precio: 3500,
    stock: 15,
    categoria: "hamburguesas"
  },
  {
    nombrePlato: "pizza napolitana",
    precio: 5100,
    stock: 23,
    categoria: "pizzas"
  },]

//ruteos de peticiones

app.get("/saludar",(req,res)=>{
    console.log(res);
    res.send("HOLAAAA ")
});

app.get("/platos/:stock",(req,res)=>{
    let infoParametros=req.params;//los parametros que mandamos por medio del head y podemos utilizarlos...
    console.log(infoParametros.stock)
    res.send(platos)
})
app.get("/platos/stock",(req,res)=>{
    res.send("entramos por el endpoint '/platos/stock' ")
})

app.post("/cargarPlato",(req,res)=>{
    //info del formulario -> body
    let plato=req.body
    console.log(plato)//me muestre por consola lo que figure en el body
    if(plato.stock <50){
        res.send("se carga el plato pero cuidado que nos quedan pocos..")
    }else{
       res.send("se recibio el plato de nombre " +plato.nombrePlato) 
    }
    
});

app.post("/platos",(req,resp)=>{
   console.log(req.body)//....
    resp.status(201).send("info recibida")
});
//indicando por que puerto estamos comunicados

app.listen(port,()=>{
    console.log(`corriendo en puerto ${port}`)
});

// ruteo de la peticion app.pet("endpoint",(req,res)=>{})

//si vamos a recibir info en formato JSON -> app.use(express.json())
//para que pueda interpretarlo y transformarlo a JS

//podemos tener distintos tipos de peticiones con un mismo nombre de endpoint 

//podemos en la respuesta agregarle si queremos ( se recomienda) un codigo de estado(statusCode)HTTP  -> podemos agregarlo a la respuesta por medio del metodo status()
//Rangos del status code

//100 ... -> informacion (no se usa en APIs)
//200... -> respuesta satisfactoria (204 - No Content)
//300... -> Indica redireccionamientos (No lo vamos a usar)
//400... -> Indican error en la peticion(request)
//500... ->Indican error que viene del lado del servidor.