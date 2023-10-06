"use strict";
console.log("hola!!!");
//tipos de datos
//string
//number
//boolean
//Array<tipo> | tipo []
//any
let nombreA = "Joaco"; // creo la variable con contenido dentro
nombreA = "ana";
//nombreA=true -> nos tira error ya que no permite agregar otro tipo de dato que no sea el compilado;
//dos maneras de definir type array
//var lista:Array < string>=["juan","marta","matias"];
let listaUno = ["juan", "marta", "matias"];
//var otraLista:string []=["juan","marta","matias"]
const otraLista = ["juan", "marta", "matias"];
//lista.push(333) -> nos tira error ya que no se encuentra declarado el tipo de dato en lo permitido dentro del array
//any -> cualqiuera 
let otroDato = "";
otroDato = 32;
//void -> vacio 
//Funciones
//definimos en los parametros el tipo de datos que se va a permitir
//coloco el signo ? si es un parametro que puede como no llevar.
//variable por default variable=valor
function suma(num1, num2, num3) {
    console.log(num3);
    return console.log(num1 + num2);
}
function saludos(nombre) {
    alert("hola " + nombre);
}
suma(2, 2);
suma(23, 4, 5);
saludos("ANA");
const calculoEdad = (nacimiento) => {
    let edad = 2023 - nacimiento;
    console.log("tiene " + edad + " años");
};
const calculoEdadOtra = (nacimiento, nombre, year = 2023) => {
    let edad = year - nacimiento;
    console.log("tiene " + edad + " años");
    if (nombre) {
        console.log("y se llama " + nombre);
    }
};
calculoEdadOtra(1994, "Laura");
calculoEdadOtra(2000);
