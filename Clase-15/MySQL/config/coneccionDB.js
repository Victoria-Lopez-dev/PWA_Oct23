//coneccion a la DB relacional
//import mysql2 from 'mysql2'
const mysql2=require('mysql2');
const infoDB={
    host:'localhost',
    user:'root',
    database:'clase-15',
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

// dbConnection.connect().then(()=>{
//         console.log("Coneccion con DB MySQL exitosa")
//     }).catch((error)=>{
//         console.log(error)
//     }); ERROR , metodo connect necesita el parametro callback