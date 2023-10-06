
let listaProd:Array<any>=[
    {
        prod:"buzo",
        precio:200},
    {
        prod:"remera",
        precio:100
    }
]

class Vendedor{

    nombreV:string
    usuarioV:string
    edadV:number
    correoV:string
    //uso el constructor para que al crear una instancia ,esta misma se cree con propiedades /caracteristicas propias.
    constructor(nombre:string,usuario:string,edad:number,correo:string){
        this.nombreV=nombre
        this.usuarioV=usuario
        this.edadV=edad
        this.correoV =correo
    }
  
    cobrar(productos:any[]){
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
//creando una instancia de un Vendedor
let vendedoraAna= new Vendedor("Ana","anaVend",30,"ana@vend.com");
console.log(vendedoraAna);
vendedoraAna.atenderCliente();
vendedoraAna.cobrar(listaProd)

//let correo:any="12312312@fsdij.com"