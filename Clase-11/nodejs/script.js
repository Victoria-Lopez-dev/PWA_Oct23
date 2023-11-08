// let info=document.querySelector("h1").textContent;
let producto={
    nombre:"pantalon",
    precio:2000
}
//traernos un paquete -> require
const validator=require('validator');//traer el paquete de validator
console.log(validator.isEmail('foo@bar.com'))//utilizar sus funciones

//traer metodos 

const moduloSumar=require("./sumar");//traigo un modulo creado por nosotros y lo aplico en este js.
console.log(producto)
moduloSumar.sumar()