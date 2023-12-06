const express=require('express');
const route= express.Router();
const {logIn,verData}= require('./controller')

route.post("/login",logIn)//autenticacion del usuario registrado

route.get("/accederInfo",verData)//que nos muestre cosas que solo alguien autorizado puede ver 

module.exports=route;