"use strict";
//moldes - superclase
class Persona {
    constructor(nombreP, apellidoP, edad, dni) {
        this.nombre = nombreP;
        this.apellido = apellidoP;
        this.edad = edad;
        this.dni = dni;
        this.nacionalidad = "Argentina";
    }
    saberDNI() {
        console.log("su DNI es: " + this.dni);
    }
    calcularPrecio(listaPrecio) {
        let total = 0;
        for (let precio of listaPrecio) {
            //total=+precio
            total = total + precio;
        }
        return total;
    }
    indicarTotal(listaPrecio) {
        let totalApagar = this.calcularPrecio(listaPrecio);
        alert("debe pagar :" + totalApagar);
    }
}
//moldes - subclase
class Recepcion extends Persona {
    //constructor en herencia (subclase), uso super()
    constructor(nombreP, apellidoP, edad, dni, usuarioR) {
        super(nombreP, apellidoP, edad, dni); //traemos estos atribugos de la superclase(Persona)
        this.usuario = usuarioR;
    }
    registrarPaciente(paciente) {
        console.log("la recepcion de nombre " + this.nombre + " registra pacientes " + paciente);
    }
    cobrarPaciente() {
        console.log("proceso de cobro..");
    }
}
class Medico extends Persona {
    cargaFichaPaciente() {
        console.log("ingresa datos del paciente y lo atiende...");
    }
}
//instancia de una clase -> objeto que hacemos a partir de un molde 
const unaPersona = new Persona("Ana", "Gomez", 33, 111111);
const otraPersona = new Persona("Juan", "Perez", 22, 22222);
const recepcionistaSemana = new Recepcion("Marta", "Recepcion", 66, 7777, 'usuarioR@consultorio.com');
const medico = new Medico("Julia", "Ruiz", 44, 4444);
//console.log(unaPersona)
//console.log(otraPersona)
console.log(recepcionistaSemana);
console.log(recepcionistaSemana.nombre); // me permite acceder al atributo ya que es publico
//recepcionistaSemana.registrarPaciente("Un Paciente..")
//console.log(recepcionistaSemana.usuario) como el atributo es privado no puedo utilizarlo ni verlo por fuera de la clase (en este caso no puedo usarlo en la instancia)
recepcionistaSemana.saberDNI();
//unaPersona.indicarTotal([1,2,3,3])
medico.apellido = "Ortiz"; //me permite modificarlo por que el atributo es public
//medico.nacionalidad="Chilena" me tira error por que el atributo es readonly
console.log(medico);
//modificadores de acceso
//usar atributos como metodos
//se aplican en clases
//permiten o impiden (public o private) que la instancia tenga acceso a esa informacion o a esa accion,metodo
//impiden que se puedan cambiar los valores de los atributos (readonly)
