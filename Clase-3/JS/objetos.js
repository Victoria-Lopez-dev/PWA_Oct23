"use strict";
//tipos
//string
//number
//boolean
//array ->Array <tipo|tipo> | (tipo|tipo)[];
//molde del objeto
//Objetos ??
const nombre = "Juan";
//crear el objeto en base a ese molde
const remera = {
    marca: "Pepito",
    stock: 234,
    talles: ["X", "S", "L"],
    colores: ["rojo", "azul", "verde"],
    coleccion: "verano"
    // descuento:true comparando con el molde "Indumentaria" y como no tiene asignado esta propiedad no me la permite agregar
};
const pantalon = {
    marca: "Fulanito",
    stock: 24,
    talles: ["X", "XXL"],
    colores: ["rojo", "verde"],
};
console.log(remera, pantalon);
const alumno1 = {
    nombre: "Juan",
    apellido: "Perez",
    email: "jp@email.com",
    descuento: true
};
const alumno2 = {
    nombre: "Ana",
    apellido: "Gomez",
    email: "ag@email.com",
    descuento: false,
    direccion: {
        localidad: "Munro",
        calle: "Calle Falsa",
        altura: 222
    }
};
alumno1.nombre = "Julian";
//alumno1.email="email@email.com" propiedad que sea solo de lectura por lo que no me deja modificarlo
const listaAlumn = []; //una lista que solo permita objetos de tipo Alumno
listaAlumn.push(alumno1, alumno2);
console.log(listaAlumn);
//listaAlumn.push({nombre:"Ana"})//limitar que tipo de objetos agregar a una lista incluso
//Resumen
// Con type creamos el molde (primera letra del nombre del molde en mayuscula)
// creamos el objeto en base a ese molde
//mod. de acceso
//readonly limitamos que no nos permita modificar el valor de una propiedad de un objeto
//si tiene public o ningun modificador de acceso,me va a poder permitir modificar su contenido
