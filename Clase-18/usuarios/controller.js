const jwt=require("jsonwebtoken");
require("dotenv").config();

const logIn=(req,res)=>{
    const{user,pass}=req.body;

    //1ero buscar la info en la DB y traerla (SQL -> SElECT | MongoDB -> find())
    const userRegister={
        usuario:"Pepe",
        password:"Admin123",
        profile:"admin"
    }
    //2do comparar la misma 
    //autenticacion
    if(user === userRegister.usuario && pass === userRegister.password){
        if(userRegister.profile === 'admin'){
            //le voy a mandar un token que creamos con JWT

            // jwt.sign(infoEncriptar,contraseña secreta,iat(tiempo de duracion token),(error,token)=>{
            //     if(error){

            //     }else{
            //         res.send(token)
            //     }
            // })


            jwt.sign(userRegister,process.env.pass_jwt,{expiresIn:'30m'},(error, token)=>{

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

    
}

const verData=(req,res)=>{}


module.exports={logIn,verData}