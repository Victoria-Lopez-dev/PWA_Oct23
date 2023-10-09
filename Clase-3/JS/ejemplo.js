"use strict";
//proyecto ecommerce local de ropa
let listaProd = [];
let boton = document.querySelector("button");
//supervisor puede cargar productos a las lista
class Supervisor {
    constructor(usuS, nomS, diasAtencion) {
        this.nombre = nomS;
        this.usuario = usuS;
        this.diasAtencion = diasAtencion;
    }
    //metodos
    cargarProductos(prod) {
        listaProd.push(prod);
        console.log(listaProd);
    }
    indicarDiasDeAtencion() {
        console.log(this.diasAtencion);
    }
}
//instancia de una clase
const diasDisponible = {
    atencionMañana: ["Lunes", "Jueves"],
    atencionTarde: ["Martes", "Miercoles"]
};
const unSupervisor = new Supervisor("martaSup", "Marta Perez", diasDisponible);
//creamos un objeto en base a un tipo
let producto1 = {
    marca: "pepito",
    stock: 22,
    talles: ["X", "L", "S"],
    colores: ["verde", "rosa"]
};
//ejemplo de como podemos hacer un evento
boton.addEventListener('click', () => { unSupervisor.cargarProductos(producto1); });
