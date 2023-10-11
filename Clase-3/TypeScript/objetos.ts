//tipos
//string
//number
//boolean
//any
//array ->Array <tipo|tipo> | (tipo|tipo)[];
//molde del objeto

//Objetos ??
const nombre:string="Juan";
//molde del objeto (type) -> instancia que es el objeto;

//Molde -> solo lo cra en typescript y no lo compila

type Indumentaria={
    marca:string,
    stock:number,
    talles:string[],
    colores:string[],
    coleccion?:string//creo una propiedad optativa, no obligatoria de crear con cada objeto
}

//crear el objeto en base a ese molde
const remera:Indumentaria={
    marca:"Pepito",
    stock:234,
    talles:["X","S","L"],
    colores:["rojo","azul","verde"],
    coleccion:"verano"
   // descuento:true comparando con el molde "Indumentaria" y como no tiene asignado esta propiedad no me la permite agregar

}

const pantalon:Indumentaria={
    marca:"Fulanito",
    stock:24,
    talles:["X","XXL"],
    colores:["rojo","verde"],
   
}
console.log(remera,pantalon)

//remera.descuento=true me tira error ya que quiero agregar una propiedad en un objeto que es parte un tipo.

//lista de alumnos de un curso
type Direccion={
     localidad:string
    calle:string
    altura:number
}

type Alumno = {
    nombre:string,
    apellido:string,
   readonly email:string,
    descuento:boolean,
    direccion?:Direccion
}

const alumno1:Alumno={
    nombre:"Juan",
    apellido:"Perez",
    email:"jp@email.com",
    descuento:true
}

const alumno2:Alumno={
    nombre:"Ana",
    apellido:"Gomez",
    email:"ag@email.com",
    descuento:false,
    direccion:{
        localidad:"Munro",
        calle:"Calle Falsa",
        altura:222
    }
}

alumno1.nombre="Julian"
//alumno1.email="email@email.com" propiedad que sea solo de lectura por lo que no me deja modificarlo
const listaAlumn :Alumno[]=[];//una lista que solo permita objetos de tipo Alumno

listaAlumn.push(alumno1,alumno2)
console.log(listaAlumn)
//listaAlumn.push({nombre:"Ana"})//limitar que tipo de objetos agregar a una lista incluso

//Resumen

// Con type creamos el molde (primera letra del nombre del molde en mayuscula)
// creamos el objeto en base a ese molde

//mod. de acceso
//readonly limitamos que no nos permita modificar el valor de una propiedad de un objeto
//si tiene public o ningun modificador de acceso,me va a poder permitir modificar su contenido