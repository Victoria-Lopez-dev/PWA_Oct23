const todosLosPlatos=require('../lugar-comidas.platos.json');

const mostrarPlatos=(req,res)=>{
    res.send(todosLosPlatos)
};

const mostrarUnPlato=(req,res)=>{
    let parametros=req.params//objeto con todos los parametros agregados
    console.log(parametros.categoria)
    res.send("peticion Ok")
};
const cargarUnPlato=(req,res)=>{
    console.log(req.body);

    todosLosPlatos.push(req.body);//simulamos el agregar el plato a la lista 
    res.status(201).send(todosLosPlatos);
    if(req.body === undefined){
        res.status(500).send("error en server");
    }

}

const modificarPlato=(req,res)=>{
    console.log(req.body)
    console.log("parametros recibidos en el head: "+ req.params.id)

    res.status(200).send("Se recibio la modificacion del plato...")

}

module.exports={mostrarPlatos,mostrarUnPlato,cargarUnPlato,modificarPlato}