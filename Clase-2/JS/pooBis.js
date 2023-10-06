"use strict";
let listaProd = [
    {
        prod: "buzo",
        precio: 200
    },
    {
        prod: "remera",
        precio: 100
    }
];
class Vendedor {
    //uso el constructor para que al crear una instancia ,esta misma se cree con propiedades /caracteristicas propias.
    constructor(nombre, usuario, edad, correo) {
        this.nombreV = nombre;
        this.usuarioV = usuario;
        this.edadV = edad;
        this.correoV = correo;
    }
    cobrar(productos) {
        let total = 0;
        console.log("realizo una venta");
        console.log("sacar del stock lo vendido");
        productos.forEach((prod) => {
            total = total + prod.precio;
        });
        console.log("total a pagar: " + total);
    }
    atenderCliente() {
        console.log("el vendedor " + this.nombreV + " esta atendiendo");
    }
}
let vendedoraAna = new Vendedor("Ana", "anaVend", 30, "ana@vend.com");
console.log(vendedoraAna);
vendedoraAna.atenderCliente();
vendedoraAna.cobrar(listaProd);
//let correo:any="12312312@fsdij.com"
