"use strict";
//dos actores en este sistema : La Recepción (Sandra y Julian ) ; y la Veterinaria (Alejandra).
//manejo de pacientes : perros y gatos
//class : Recepcion 
/*
    funciones - metodos

    -Ingresar pacientes a la lista de espera

    -Agregar un paciente con su información a la lista del historial de pacientes

    - Cobrar la consulta

*/
//class: Veterinaria 
/*
    funciones - metodos
    - Sacar los pacientes de la lista

    - Agregar información al objeto del paciente
    - Indicar lo que se debe facturar
*/
//Objeto -> type y a partir de ello al objeto
/*
- NombreAnimal(string)
- Tipo(perro o gato :string)
- Raza(string)
- Dueño(string)
- AñoDeIngreso(number)
- Notas(string)
- VacunasAplicadas(array de strings)
*/
/* para crear la instancia de recepcionista y veterinaria utilizamos la informacion final del PDF */
let pacientesPorAtender = []; //lo escribimos de otra manera para acordarnos de otra posibilidad
const historialP = [];
const gastosPaciente = []; //lista de medicamentos del paciente
// molde superclase
class PersonaVete {
    constructor(edadR, usuarioR, correoR) {
        this.edad = edadR;
        this.usuario = usuarioR;
        this.correo = correoR;
    }
}
//molde
class Recepcion extends PersonaVete {
    constructor(edadR, usuarioR, correoR, diasDeTrabajoR) {
        super(edadR, usuarioR, correoR);
        this.diasDeTrabajo = diasDeTrabajoR;
    }
    //metodos(funciones)
    ingresarPaciente(paciente) {
        pacientesPorAtender.push(paciente);
    }
    agregarPacienteHistorial(paciente) {
        pacientesPorAtender.push(paciente);
    }
    cobrarConsulta(consulta = 1000, cantMedicamento) {
        let total = 0;
        if (cantMedicamento !== 0) {
            total = cantMedicamento * 800;
        }
        total = total + consulta;
        console.log("el total a pagar es de:$ " + total);
    }
}
//molde Veterinaria (subclase de PersonaVete)
class Veterinaria extends PersonaVete {
    //atributos - propiedades -> subclase de personaVete , toma los atributos de dicha superclase
    constructor(edadR, usuarioR, correoR) {
        super(edadR, usuarioR, correoR);
    }
    //metodos - funciones
    atenderPaciente(paciente) {
        let pacienteAtendido = pacientesPorAtender.find((pac) => pac === paciente);
        if (pacienteAtendido !== undefined) {
            let indice = pacientesPorAtender.indexOf(pacienteAtendido);
            pacientesPorAtender.splice(indice, 1);
        }
        /*
        let indice=pacientesPorAtender.findIndex((pac)=> pac === paciente)
          if(indice !== -1){
              pacientesPorAtender.splice(indice,1)
          }
        */
        /*
        let nuevaLista=pacientesPorAtender.filter((pac)=> pac !== paciente);
        pacientesPorAtender =nuevaLista
        */
    }
    agregarInfo(id, propiedadPaciente, info) {
        //busquemos en el paciente 
        let paciente = historialP.find((animal) => animal.idAnimal == id);
        //si lo encuentra,modificamos la informacion
        if (paciente !== undefined) {
            //paciente.propiedadPaciente = info;
            if (propiedadPaciente === "vacunasAplicadas") {
                paciente.vacunasAplicadas.push(info);
            }
            else {
                paciente[propiedadPaciente] = info;
            }
        }
        else {
            console.log("no se encuentra el paciente en el historial");
        }
    }
}
/*

type Animal={
    nombreAnimal:string
    tipo:string
    raza:string
    propietario:string
    ingreso:number
    notas:string
    vacunasAplicadas:string[]//Array <string>
}

- Indicar lo que se debe facturar ( si solo consulta o si se agregan medicamentos)
*/
//objetos
//objeto.propiedad =valor
// alternativa si pasamos la propiedad como un string objeto['propiedad'] = valor
