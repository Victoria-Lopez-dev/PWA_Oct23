"use strict";

function cobrar2(productos){
    let total=0;
    console.log("realizo una venta")
    console.log("sacar del stock lo vendido")
    productos.forEach((prod)=>{
        total=total+prod.precio
    })
    console.log("total a pagar: "+ total)

}

//------------------------------------------------

/* Molde Vendedor  */
class Vendedor{
    //uso el constructor para que al crear una instancia ,esta misma se cree con propiedades /caracteristicas propias.
    constructor(nombre,usuario,edad,correo){
        this.nombreV=nombre
        this.usuarioV=usuario
        this.edadV=edad
        this.correoV =correo
    }
  
    cobrar(productos){
        let total=0;
        console.log("realizo una venta")
        console.log("sacar del stock lo vendido")
        productos.forEach((prod)=>{
            total=total+prod.precio
        })
        console.log("total a pagar: "+ total)

    }
    atenderCliente(){
        console.log("el vendedor "+this.nombreV+" esta atendiendo")
    }

}

class Supervisor{
    constructor(){
        this.nombreS="Julia",
        this.usuario="juliaSup"
        this.email="julia@sup.com"
    }
    actualizarStock(){
        console.log("pedir a fabrica mas productos")
    }
    calificarVendedor(nombre){
        console.log("califico a "+nombre+ "vendedor")
    }
}

/* objeto a partir del molde -> instancia de la clase */
let listaProd=[{precio:100,prod:"zapatilla"},{precio:220,prod:"remera"}]

const vendedorAna= new Vendedor("ana","anaVend",30,"ana@vendedora.com");
const vendedorSantiago= new Vendedor("Santiago","SantiVend",60,"santi@vendedor.com")

console.log(vendedorAna)

vendedorAna.cobrar(listaProd);

vendedorAna.atenderCliente()
//cobrar2(listaProd)
console.log("---------")
console.log(vendedorSantiago);
vendedorSantiago.atenderCliente()