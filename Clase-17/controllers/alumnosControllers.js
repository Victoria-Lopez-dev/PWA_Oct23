const dbConnection=require('../config/coneccionDB');
const bcrypt=require("bcrypt");

const saludo=(req,res)=>{
    let fecha= Date.now()//en milisegundos la fecha actual
    console.log(fecha)
    res.send("hola")
}

const recibirInfo=(req,res)=>{
    let {nombre,apellido}= req.body;//info del body
    let imagen=req.file;//informacion (imagen) que viene en la peticion 
    console.log(imagen)
    console.log(req.file.path)//nombre actual del documento
    //comandos de la DB la carga de dichos datos //como texto plano con la ruta de la imagen
    res.send("info recibida")
}

const cargarAlumno=async(req,res)=>{
    //recibir la info de la peticion
    let {nombre,apellido,edad,password}=req.body;

    // encriptar la constraseña

    let passwordEncriptada= await bcrypt.hash(password,10); // -> sin manejar los errores posibles;

    // let passwordEncriptada= bcrypt.hash(password,10,(err,hash)=>{
    //     if(err){res.send(err)
    //     }else{
    //         console.log(hash)
    //         return hash
    //     }
    // })
    console.log(passwordEncriptada)
    //mandar a la DB

    dbConnection.query('INSERT INTO alumnos(nombre,apellido,edad,password) VALUES(?,?,?,?)',[nombre,apellido,edad,passwordEncriptada],(err,data)=>{
       
        //mandar la respuesta
        if(err){
            res.status(500).json({'mensaje':err})
        }else{
            res.status(201).json({'alumno':"creado"})
        }
    })
   

}

const compararPassword=(req,res)=>{
    //obtenemos info de la peticion
    const pass=req.params.pass;
    const idAlumno=req.params.id;

    //buscamos la data de la DB
    dbConnection.query('SELECT * FROM alumnos WHERE id=?',[idAlumno],async (err,data)=>{
        //mandar la respuesta
        if(err){
            res.status(500).json({'mensaje':err})
        }else{
            //comparar la info recibida con la de la DB
            //enviar respuesta 
            let dataDB=data[0].password//de toda la data recibida de la DB , busco el valos de la password
            let info= await bcrypt.compare(pass,dataDB);
            //compare() -> devuelve un booleano 
            if(info === true){
                res.status(200).json({message:"comparacion hecha, contraseña correcta"})
            }else{
                res.status(401).json({message:"comparacion hecha, contraseña incorrecta no puede ingresa"})
            }
            
        }
    })
   
    
   
}
module.exports={saludo,recibirInfo,cargarAlumno,compararPassword}

//dos metodos bcrypt 
//-> hash(dato,salt)-> encriptar info |
// podemos agregar un tercer parametro -> callback para manejar cualquier error en los procesos (encriptacion como de comparacion)
// -> compare(datoReq,datoEncriptado) -> verificar dicha info (devuelve un booleano)

//PROXIMA CLASE!!

//demostracion de llamado a la imagen (multer)
// dotenv 
//JWT 
//front vinculado con todo esto