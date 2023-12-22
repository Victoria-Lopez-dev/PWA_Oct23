require('dotenv').config();
const mysql2 =require("mysql2");

const dbInfo={
    host:process.env.DB_HOST,
    user:process.env.DB_USER,
    database:process.env.DB_DATABASE,
    password:process.env.DB_PASS
}

const dbConnection=mysql2.createConnection(dbInfo);


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
})
    ;

module.exports=dbConnection;