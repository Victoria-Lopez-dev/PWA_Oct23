const express =require("express");
const router=express.Router();
const{mostrarPlatos,mostrarUnPlato,cargarUnPlato,modificarPlato}=require('../controllers/platosControllers')
router.get('/',mostrarPlatos);


// router.get('/platos/:categoria/:id',(req,res)=>{
//     let parametros=req.params//objeto con todos los parametros agregados
//     console.log(parametros.categoria)
//     res.send("peticion Ok")
// })
router.get('/:categoria',mostrarUnPlato);

router.post('/nuevoPlato',cargarUnPlato);

router.put('/modificarPlato/:id',modificarPlato);

module.exports=router;