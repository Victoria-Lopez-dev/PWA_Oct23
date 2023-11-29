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

module.exports={traerAlumnos}