const dbConnection= require("../config/db");//traemos la coneccion hecha para utilizar el metodo query

//traer todas las peliculas
const mostrarPelis=(req,res)=>{
    //usando DB MySQL
    dbConnection.query("SELECT * FROM peliculas",(err,data)=>{
        if(data){
            res.status(200).send(data) 
        }else{
            console.log(err)
        }
       
    });

    
};

//cargar pelicula
const cargarNuevaPelicula=(req,res)=>{
    const{titulo,genero,duracion,tickets}=req.body;//recibir info del body
    const imagen="http://localhost:4300/imagen/" +req.file.filename;//recibiendo info que viene en el campo de tipo file

     //usando DB MySQL
    dbConnection.query("INSERT INTO peliculas(titulo, genero, duracion, tickets, imagen)VALUES(?,?,?,?,?)",[titulo, genero, duracion, tickets, imagen],(err,data)=>{
        if(data){
            res.status(201).json({"message":"pelicula cargada"})
        }else{
            res.status(500).json({"message":"error en carga "})
        }
    })
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