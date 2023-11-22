let modelo= require("../schema/shemaPlato");

const traerPlatos= async (req,res)=>{
    let resultado= await modelo.find();
    res.send(resultado)
}

const traerEnsalada=async(req,res)=>{
    let info=req.params.categoria;//obtenemos la info de los parametros de la request
    let resultado=await modelo.find({categoria:info})
    res.send(resultado)
}

const cargarPlato= async(req,res)=>{
    let{plato,precioPlato,stockPlato,categoriaPlato}=req.body;//traemos la info de la request
   
    let nuevoPlato= new modelo({
        nombrePlato:plato,
        precio:precioPlato,
        stock:stockPlato,
        categoria:categoriaPlato
    })//creamos una instancia del plato 

   
    let resultado= await modelo.collection.insertOne(nuevoPlato);//mandamos a cargar el plato a la DB

    res.status(201).json({"id_plato":resultado.insertedId})
}



module.exports={traerPlatos,cargarPlato,traerEnsalada}