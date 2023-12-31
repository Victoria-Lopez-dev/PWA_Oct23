const dbConnection= require("../config/db");//traemos la coneccion hecha para utilizar el metodo query

//let modelo= require("../schema/shemaPeliculas");

//traer todas las peliculas
const mostrarPelis= async(req,res)=>{
    //usando DB MySQL
    // dbConnection.query("SELECT * FROM peliculas",(err,data)=>{
    //     if(data){
    //         res.status(200).send(data) 
    //     }else{
    //         console.log(err)
    //     }
       
    // });

    //usando DB MongoDB

    let resultado= await modelo.find();
    if(resultado){
        res.status(200).send(resultado) 
    }else{
        res.status(500)
    }

    
};

//cargar pelicula
const cargarNuevaPelicula=async (req,res)=>{
    const{titulo,genero,duracion,tickets}=req.body;//recibir info del body
    const imagen="http://localhost:4300/imagen/" +req.file.filename;//recibiendo info que viene en el campo de tipo file

     //usando DB MySQL
    // dbConnection.query("INSERT INTO peliculas(titulo, genero, duracion, tickets, imagen)VALUES(?,?,?,?,?)",[titulo, genero, duracion, tickets, imagen],(err,data)=>{
    //     if(data){
    //         res.status(201).json({"message":"pelicula cargada"})
    //     }else{
    //         res.status(500).json({"message":"error en carga "})
    //     }
    // })

    //con MongoDB

    //le colocamos el async a la funcion 
    let nuevaPelicula= new modelo({
        titulo:titulo,
        genero:genero,
        duracion:duracion,
        tickets:tickets,
        imagen:imagen
    })
    let resultado= await modelo.collection.insertOne(nuevaPelicula);//mandamos a cargar el plato a la DB

    if(resultado){
        res.status(201).json({"id_pELICULA":resultado.insertedId})
    }else{
        res.send("error en el ingreso de la nueva pelicula...")
    }

}




//eliminar pelicula
const eliminarPelicula=(req,res)=>{
    const idParams=req.params.id;
    const{id}=req.body;


       //usando DB MySQL
       dbConnection.query("DELETE FROM peliculas WHERE id=?",[id],(err,data)=>{
        if(data){
            res.status(200).json({"message":"pelicula eliminada"})
        }else{
            res.status(500).json({"massege":"error en server"})
        }
       })

   // res.status(200).json({"message":"pelicula eliminada"})
}

const modificarPelicula=(req,res)=>{
    
    const id=req.params.id;//obtengo la referencia de los params;
    const{titulo,genero,duracion,tickets}=req.body;//recibir info del body

    console.log(req.body)
// const {campo,valor}=req.body
//"UPDATE peliculas SET ?=? WHERE id=?",[campo,valor,id]

    dbConnection.query("UPDATE peliculas SET titulo=?,genero=?,duracion=?,tickets=? WHERE id=?",[titulo,genero,duracion,tickets,id],(err,data)=>{
        if(data){
            res.status(201).json({"message":"pelicula modificada"})
        }else{
            res.status(500).json({"message":"error en carga "})
        }
    })
}

//si al put le agregamos el cambio de imagen

const modificarPeliculaConImg=(req,res)=>{
    const id=req.params.id;//obtengo la referencia de los params;
    const{titulo,genero,duracion,tickets}=req.body;//recibir info del body

    const imagen="http://localhost:4300/imagen/" +req.file.filename;

    dbConnection.query("UPDATE peliculas SET titulo=?,genero=?,duracion=?,tickets=?, imagen=? WHERE id=?",[titulo,genero,duracion,tickets,imagen,id],(err,data)=>{
        if(data){
            res.status(201).json({"message":"pelicula modificada"})
        }else{
            res.status(500).json({"message":"error en carga "})
        }
    })
}


module.exports={mostrarPelis,cargarNuevaPelicula,eliminarPelicula,modificarPelicula,modificarPeliculaConImg}