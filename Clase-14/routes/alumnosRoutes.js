const express=require('express');
const route=express.Router();
const{funcionInicial,llamadoHojaProd,recibirData}=require('../controllers/alumnosController')

route.get("/",funcionInicial);
route.get("/products",llamadoHojaProd);
route.post("/infoForm",recibirData)
module.exports=route