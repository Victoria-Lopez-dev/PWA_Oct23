const jwt=require("jsonwebtoken");
require("dotenv").config();

const verificacionUsuario=(req,res,next)=>{

    //obtener el token que nos manda la peticion
    const autorizacionUsuario=req.headers.authorization;

    const token= autorizacionUsuario.split(" ").pop()


    //implementar el metodo verify() a ver si corresponde o no 
    jwt.verify(token,process.env.pass_jwt,(err,data)=>{
        if(err){
            if(err.name =="TokenExpiredError"){
                res.json({"message":"Expiro el token"})
            }
            res.json({"message":"Error en la autorizacion","error":err})
        }else{
            console.log(data)
              //continue con las demas funciones indicadas en el ruteo 
                next()  
        }
    })


}
//metodo de jwt -> verify()
module.exports=verificacionUsuario;