
const saludo=(req,res)=>{
    let fecha= Date.now()//en milisegundos la fecha actual
    console.log(fecha)
    res.send("hola")
}

const recibirInfo=(req,res)=>{
    let {nombre,apellido}= req.body;//info del body
    let imagen=req.file.path;//nombre (imagen) que viene en la peticion 
    console.log(imagen,nombre,apellido)
    res.send("info recibida")
}

module.exports={saludo,recibirInfo}