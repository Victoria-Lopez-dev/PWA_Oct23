const express=require("express");
const route=express.Router();
const{mostrarPelis}=require("../controllers/peliculasControllers")


route.get("/todasLasPeliculas",mostrarPelis);
route.post("",(req,res)=>{});
route.put("",(req,res)=>{});
route.delete("",(req,res)=>{});


module.exports= route