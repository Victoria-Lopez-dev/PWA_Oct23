require("dotenv").config();
const mongoose= require("mongoose");

// const host="127.0.0.1:27017";
// const database='lugar-comidas';

const user=process.env.USER//proyectoPlatos
const pass=process.env.PASS

//mongoose connect()

const main=async()=>{
  await  mongoose.connect(`mongodb+srv://proyectoPlatos:${pass}@cluster0.omdwmip.mongodb.net/?retryWrites=true&w=majority`);
}

main().then(()=>{
    console.log("coneccion exitosa a DB MongoDB")
})
.catch((error)=>{
    console.log(error)
})
//otra alternativa

// import mongoose from "mongoose"; No olvidar en el package.json agregar el type:module

// const host = "127.0.0.1:27017";
// const database = "Santiago-db";

// export const connectDB = async () => {
//     try {
//         await mongoose.connect(`mongodb://${host}/${database}`);
//         console.log(">> Connected succesfully to the database");
//     } catch (error) {
//         console.log(">> Connection to database failed: " + error);
//     }
// }