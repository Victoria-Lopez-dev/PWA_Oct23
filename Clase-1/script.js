//variables
//globales - locales

//const - let



const nombre="Juan"//globales

console.log(nombre)
//datos: Strings ("",'',``)- numbers - boolans(true - false)

//funciones 
//tradicional
 function suma() {
    let numeroA =10;//locales
    console.log(20+numeroA)
    
 }
// funciones flecha

const suma2=(dato)=>{
    23+324+dato
};
 
//suma2(324)
 //repeticion de acciones
 //operaciones:

 //aritmeticas -> + - * / ....

 //Math -> propio de JS  que nos permite hacer operaciones aritmeticas mas complejas

 2+ 234 //236

 //comparacion -> booleans (true - false)
 // === == ,!== !=, > <, <= ,>=

 // == -> comparaba solo valores 
 //=== -> comparaba datos y tipo de dato

 "Juan" == "juan"//false
 3242 === "3242" //false
 3242 === 3242 //true

 // logicos -> && ,|| ,! -> comparar operaciones : 
 //&& -> se cumplen ambas operacinoes
 //|| -> se cumple alguna de ellas
 //! -> si no se cumple .

 //Ejemplo

// usuario ===usuarioRegistrado && password === passwordRegistrada

 //condicionales -> la condicion tiene que dar como resultado : true o false

 //operador ternario

 //condicion? accionSiSeCumple : accionSiNoSeCumple ;
//  const usuario=prompt("Ingrese usuario");
 const usuarioRegistrado="Juan Perez";
//  const password=prompt("ingrese password");
 const passwordRegistrada="Admin123"

//  usuario ===usuarioRegistrado && password === passwordRegistrada ? suma(): console.log("no esta registrado,no puede ingresar");

//if/else

/* puedo tener como no el else .
if(condicion){
    accion/es a realizar si se cumple la condicion
}else{
    accion/es a realizar si no se cumple la condicion
}
*/

// if(usuario === usuarioRegistrado){
//     alert("Usuario correcto")
//     if(passwordc === passwordRegistrada){
//         alert("Usuario tiene acceso..")
//     }
// }

// array -> lista , usamos corchetes 

//indice   0                1       2       3
let lista=[usuarioRegistrado,342423,true,suma];


//console.log(lista[2])

//metodos
//array.push(dato), array.unshift(dato,dato2)

lista.push("Ana",34)

// array.pop() array.shif() -> sacar el ultimo o el primer item
//splice(indice,cantidad,nuevoValor)-> sacar un item de cualquier lado de la lista o reemplazarlo
lista.splice(1,1,"nuevo dato");

//slice(indiceInicio,indiceFinal) -> porciona  a la lista 

//console.log(lista.slice(0,2))

let frase="una oracion de un cierto tamaño";

//console.log(frase[2])//devuelve "a" ya que toma al string como un array de caracteres

//console.log(frase.split(" "))//armar un array a partir de un string teniendo en cuanta algun dato que colocamos dentro del split , para separar cada item de la lista

//let remera=[3242,coloresDisponibles,talles,]

// objetos
/*
    propiedad:valor,
    propiedad:valor
*/

let remera={
    precio:2342,
    coloresDisplibles:["rojo",'azul'],
    talles:["X","S","XL"]
}
//console.log(remera.coloresDisplibles)

//agregar  o modificar una propiedad

//objeto.propiedad= nuevoValor

remera.descuento=true;
remera.precio=3333
//console.log(remera)

//eliminar propiedad
//delete objeto.propiedad

delete remera.talles

//console.log(lista)


 //DOM -> Document Object Model
 //console.dir

console.log(document)
console.dir(document)

//llamar a elementos del HTMl desde JS -> llamamos al nodo 

//varios metodos -> querySelector() -> trae el primer nodo que cumple con ese selector |querySelectorAll() -> trae un array con todos los selectores que cumplen con esa condicion 
//selectores -> #id .class etiqueta

let titulo= document.querySelector(".titulo");
let titulos=document.querySelectorAll(".titulo");
console.dir(titulo)
console.dir(titulo.innerText)
titulo.textContent="Cambiando el titulo"
titulo.style="background-color:green";

//eventos
//en que nodo (elemento) ocurre el evento
//el nombre del evento
//accion/es a realizar cuando este evento ocurra

//atributo que colocamos en el HTML + funcion en eJS
//on+evento como atributo y como valor la ejecucion de la funcion
//objeto event -> el objeto como resultado de la accion, que nos da informacion sobre la accion que ocurrio

//this -> el objeto (nodo) en el que ocurre el evento que estamos generando
const mostrar=(evento)=>{
    evento.preventDefault()//"cancelamos" su accion por defecto
    console.log(evento)//info sobre el evento que acaba de ocurrir (objeto)
    let input=evento.target.childNodes[3]//navegando por este objeto accedemos a l input para obtener su valor
    console.log(input.value)//usamos la propiedad "value" de este nodo para ver que contenido agrego el usuario
}

//this -> en el nodo (elemento) en el que ocurrio el evento
const info=(nodo)=>{
    console.dir(nodo)
}




//metodo addEventLister -> todo desde JS

titulo.addEventListener("mouseover",()=>{
    titulo.style="background-color:salmon";
    console.log("se acciono un evento mouseover")
})

//lista de eventos js:
//https://developer.mozilla.org/es/docs/Web/Events