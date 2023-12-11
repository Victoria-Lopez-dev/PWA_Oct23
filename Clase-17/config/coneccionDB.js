const mysql2=require('mysql2');
require("dotenv").config();

const infoDB={
    host:process.env.HOST,
    user:process.env.HOST_USER,
    database:process.env.HOST_DB,
    password:process.env.HOST_PASS//agregamos el campo de la password
}
const dbConnection=mysql2.createConnection(infoDB);

dbConnection.connect((error)=>{
    if(error){
        if(error.code ==='ER_BAD_DB_ERROR' ){
            console.log("error con la coneccion con la DB: "+ error.sqlMessage)
        }else{
            console.log(error)
        }
    }else{
        console.log("Coneccion con DB MySQL exitosa")
    }
});

module.exports=dbConnection;
