const express =require("express");
const router=express.Router();//manejador de rutas -> redireccion

router.get('/',(req,res)=>{
    res.send("mandamos usuarios")
});

router.get('/infoForm',(req,res)=>{
    console.log(req.query);// obtengo info del query del head
     res.send("se ingreso por el get de infoForm")
 });
 
router.post('/infoForm',(req,res)=>{
     console.log(req.body)
     console.log(typeof(req.body))
     res.status(200).send("info recibida ")
 });


 module.exports=router;