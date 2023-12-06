require("dotenv").config();
const mongoose= require("mongoose");

const host=process.env.host_dir;
const database=process.env.host_db;

//mongoose connect()

const main=async()=>{
  await  mongoose.connect(`mongodb://${host}/${database}`);
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