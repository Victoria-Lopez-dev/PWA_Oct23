const jwt=require("jsonwebtoken");
require("dotenv").config();

let modelUser= require("../schema/shemaUsuario");

const logIn=async(req,res)=>{
    const{user,pass}=req.body;

    //1ero buscar la info en la DB y traerla (SQL -> SElECT | MongoDB -> find())
    const resultado={
        usuario:"Pepe",
        password:"Admin123",
        profile:"admin"
    }

    //Con MongoDB

    //     let resultado=await modelUser.find({_usuario:user});

    //     let resultado=resultado[0]
    // console.log(resultado)
    //2do comparar la misma 
    //autenticacion
    if(user === resultado.usuario && pass === resultado.password){
        if(resultado.profile === 'admin'){
            //le voy a mandar un token que creamos con JWT

            // jwt.sign(infoEncriptar,contraseña secreta,iat(tiempo de duracion token),(error,token)=>{
            //     if(error){

            //     }else{
            //         res.send(token)
            //     }
            // })


            jwt.sign(resultado,process.env.pass_jwt,{expiresIn:'30m'},(error, token)=>{

                if(error){
        
                    res.status(500).send(error)
                }else{
                     res.status(200).json({message:"usuario ok","token":token})
                }
            })
           
        }else{
             res.status(200).json({message:"usuario ok"})
        }
       
    }else{
        res.status(200).send("usuario o contraseña erronea")
    }


    //con SQL 

    // dbConnection.query("SELECT * FROM usuarios WHERE nombre=?",[user],(err,data)=>{
    //     if(err){
    //         console.log(err)
    //         res.status(500).json({'mensaje':"error interno ,problemas en las peticiones con el servidor"})
    //     }else{
    //          if(user === data.usuario && pass === data.password){
                // if(data.profile === 'admin'){
                        //le voy a mandar un token que creamos con JWT

            //         jwt.sign(resultado,process.env.pass_jwt,{expiresIn:'30m'},(error, token)=>{

            //             if(error){
            //                 res.status(500).send(error)
            //             }else{
            //                  res.status(200).json({message:"usuario ok","token":token})
            //             }
            //         })
                
            //     }else{
            //          res.status(200).json({message:"usuario ok, no es administrador"})
            //     }
            
            // }else{
            //     res.status(200).send("usuario o contraseña erronea")
            // }
    //     }
    // })
    
}

const verData=async(req,res)=>{
    let data1=await modelUser.find({});
    res.send(data1)
}


module.exports={logIn,verData}