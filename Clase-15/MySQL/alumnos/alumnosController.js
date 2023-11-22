const dbConnection= require('../config/coneccionDB');

const todosLosAlumnos =(req,res)=>{
    dbConnection.query("SELECT * FROM alumnos",(err,data)=>{
        if(err){
            res.status(500).json({'mensaje':err})
        }else{
            res.send(data)
        }
    })
}

const unAlumno =(req,res)=>{
    let nombreAlumno=req.params.nombre;//obtenemos la informacion enviada por medio de los parametros 
  

    dbConnection.query("SELECT * FROM alumnos WHERE nombre=?",[nombreAlumno],(err,data)=>{
        if(err){
            console.log(err)
            res.status(500).json({'mensaje':"error interno ,problemas en las peticiones con el servidor"})
        }else{
            res.send(data)
        }
    })
}
const cargarAlumno=(req,res)=>{
    let {nombreAlumno,edadAlumno,apellidoAlumno}= req.body;//destructing


    dbConnection.query("INSERT INTO alumnos (nombre,apellido,edad) VALUES(?,?,?)",[nombreAlumno,apellidoAlumno,edadAlumno],(error,data)=>{
        if(error){
            console.log(error)
            res.status(500).json({'mensaje':"error en el server..."})
        }else{
            console.log(data)
            res.status(201).json({"mensaje":"alumno cargado en la DB "})
        }
    })
   
}

module.exports={todosLosAlumnos,cargarAlumno,unAlumno}

//metodo mysql2 -> dbConnection.query('peticion SQL',(err,ok)=>{})

//metodo mysql2 -> dbConnection.query('peticion SQL',[variables],(err,ok)=>{})