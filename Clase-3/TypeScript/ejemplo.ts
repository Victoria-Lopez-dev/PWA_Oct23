//proyecto ecommerce local de ropa

type Producto={
    marca:string,
    stock:number,
    talles:string[],
    colores:string[],
}
type Dias={
    atencionMañana:string[],
    atencionTarde:string[]
}

let listaProd:Producto[]=[];
let boton:any=document.querySelector("button")
//supervisor puede cargar productos a las lista

class Supervisor{
    //atributos
    usuario:string
    nombre:string
    diasAtencion:Dias
    constructor(usuS:string,nomS:string,diasAtencion:Dias){
        this.nombre=nomS
        this.usuario=usuS
        this.diasAtencion=diasAtencion
    }

    //metodos

    cargarProductos(prod:Producto){
        listaProd.push(prod)
        console.log(listaProd)
    }
    indicarDiasDeAtencion(){
        console.log(this.diasAtencion)
    }
}
//instancia de una clase
const diasDisponible:Dias={
    atencionMañana:["Lunes","Jueves"],
    atencionTarde:["Martes","Miercoles"]
}

const unSupervisor= new Supervisor("martaSup","Marta Perez",diasDisponible)

//creamos un objeto en base a un tipo
let producto1:Producto={  
    marca:"pepito",
    stock:22,
    talles:["X","L","S"],
    colores:["verde","rosa"]
}

//ejemplo de como podemos hacer un evento
boton.addEventListener('click',()=>{unSupervisor.cargarProductos(producto1)});
