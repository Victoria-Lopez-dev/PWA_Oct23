require('dotenv').config();
//con DB SQL
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

//con MongoDB
// const mongoose= require("mongoose");


// const user=process.env.USER//proyectoPlatos
// const pass=process.env.PASS

// //mongoose connect()

// const main=async()=>{
//   await  mongoose.connect(`mongodb+srv://proyectoPlatos:${pass}@cluster0.omdwmip.mongodb.net/?retryWrites=true&w=majority`);
// }

// main().then(()=>{
//     console.log("coneccion exitosa a DB MongoDB")
// })
// .catch((error)=>{
//     console.log(error)
// })