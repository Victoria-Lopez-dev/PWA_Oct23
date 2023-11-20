let lista=["Juan","Pedro","Marta","Josefa"];
const infoProd=require('../infoProd.json');

const funcionInicial=(req,res)=>{
    res.render('pages/index.ejs',{
        listaAlumnos:lista
    })
}

const llamadoHojaProd=(req,res)=>{
    res.render('pages/products.ejs',{
        titulo:"Clase 14",
        tituloH1:"cambio el h1",
        data:infoProd
    })
}

const recibirData=(req,res)=>{
    console.log(req.body);
    res.status(200).json({mensaje:"info recibida "})
   // res.render('pages/respOk.ejs')
}

module.exports={funcionInicial,llamadoHojaProd,recibirData}