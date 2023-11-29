const dbConnection=require('../config/coneccionDB');

const traerAlumnos=(req,res)=>{
    dbConnection.query("SELECT * FROM alumnos",(err,data)=>{
        if(err){
            res.status(500).json({'mensaje':err})
        }else{
            res.status(200).send(data)
        }
    })
}

const cargarAlumno=(req,res)=>{
    let{nombre,apellido,edad}=req.body
    console.log(req.body)
    dbConnection.query("INSERT INTO  alumnos(nombre,apellido,edad) VALUES(?,?,?)",[nombre,apellido,edad],(err,data)=>{
        if(err){
            res.status(500).json({'mensaje':err})
        }else{
            res.status(201).json({'alumno':"creado"})
        }
    })
//con mongoDB
// let{nombre,apellido,edad}=req.body//traemos la info de la request
   
//     let nuevoAlumno= new modelo({
//         nombre:nombre,
//         apellido:apellido,
//         edad:edad,
//     })//creamos una instancia del alumno 

   
//     let resultado= await modelo.collection.insertOne(nuevoAlumno);//mandamos a cargar el plato a la DB

//     res.status(201).json({'alumno':"creado"})
    
}

module.exports={traerAlumnos,cargarAlumno}


//con MongoDB -> archivo de Schema, el archivo de la coneccion(carpeta config)