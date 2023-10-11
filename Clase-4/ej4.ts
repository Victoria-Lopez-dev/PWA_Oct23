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
let pacientesPorAtender:Array <string>=[];//lo escribimos de otra manera para acordarnos de otra posibilidad
const historialP: Animal[]=[];

let gastosPaciente:string[]=[];//lista de medicamentos del paciente

//objeto - Animal

type Animal={
    idAnimal:number
    nombreAnimal:string
    tipo:string
    raza:string
    propietario:string
    ingreso:number
    notas:string
    vacunasAplicadas:string[]//Array <string>
    medicacion:string[]
}

// molde superclase

class PersonaVete{
    edad:number
    usuario:string
    correo:string
    constructor(edadR:number,usuarioR:string,correoR:string){
        this.edad=edadR
        this.usuario=usuarioR
        this.correo=correoR

    }

}


//molde
class Recepcion extends PersonaVete{
    //atributos(propiedades)
    //edad- usuario - correo ya los trae de PersonaVete
    diasDeTrabajo:string[]

    constructor(edadR:number,usuarioR:string,correoR:string,diasDeTrabajoR:string[]){
        super(edadR,usuarioR,correoR);
        this.diasDeTrabajo=diasDeTrabajoR
    }

    //metodos(funciones)
    ingresarPaciente(paciente:string){
        pacientesPorAtender.push(paciente)
    }

    agregarPacienteHistorial(paciente:Animal){
        historialP.push(paciente)
    }

    cobrarConsulta(id:number,consulta=1000){
        let total=0;
        let paciente= historialP.find((animal)=>animal.idAnimal === id)
        if(paciente !== undefined){
            let cantMedicamento=paciente.medicacion.length 
            if(cantMedicamento !== 0){
                total=cantMedicamento*800
            }
            total=total+consulta
            console.log("el total a pagar es de:$ "+ total);

            paciente.medicacion=[]
        }
        
       

      
        //let ultimoIndice=gastosPacientes.length -1
        // gastosPacientes.splice(0,ultimoIndice)
    }
  /*  
  puedo como alternativa indicarle que puede como no tener parametro
    cobrarConsultaBis(consulta=1000,cantMedicamento?:number){
        let total=0;
        if(cantMedicamento){
            total=cantMedicamento*800
        }
        total=total+consulta
        console.log("el total a pagar es de:$ "+ total)
    }
    */
}


//molde Veterinaria (subclase de PersonaVete)

class Veterinaria extends PersonaVete{
    //atributos - propiedades -> subclase de personaVete , toma los atributos de dicha superclase
    constructor(edadR:number,usuarioR:string,correoR:string){
        super(edadR,usuarioR,correoR);
    }

    //metodos - funciones
    atenderPaciente(paciente:string){
      let pacienteAtendido=pacientesPorAtender.find((pac)=> pac === paciente);
      if(pacienteAtendido !== undefined){
        let indice=pacientesPorAtender.indexOf(pacienteAtendido);
        pacientesPorAtender.splice(indice,1)
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

    agregarInfo(id:number,propiedadPaciente:string,info:any){
        //busquemos en el paciente 
        let paciente=historialP.find((animal)=>animal.idAnimal == id);

        //si lo encuentra,modificamos la informacion
        if(paciente !== undefined){
            //paciente.propiedadPaciente = info;
            switch(propiedadPaciente){
                case "nombreAnimal":
                    paciente.nombreAnimal=info
                break;

                case"tipo":
                paciente.tipo=info
                break;

                case "raza":
                    paciente.raza=info
                break;
                case"propietario":
                paciente.propietario=info
                break;
                case "ingreso":
                    paciente.ingreso=info
                break;
                case "notas":
                    paciente.notas=info
                break;
                default:
                    paciente.vacunasAplicadas.push(info)
                break;
            }

            /* if(propiedadPaciente === "vacunasAplicadas"){
               paciente.vacunasAplicadas.push(info);
             }else{
             paciente[propiedadPaciente]=info //a typescript no le gusto la antigua manera de llamar propiedades de Objetos como parametros de tipo string
            }*/
            
        }else{
            console.log("no se encuentra el paciente en el historial")
        }
    }

    indicarGastoExtra(listaMed:string[],id:number){

        let paciente=historialP.find((animal)=>animal.idAnimal === id);
          //alternativa utilizando spread operator
        if(paciente !== undefined){
            paciente.medicacion.push(...listaMed)
        }
        //alternativa utilizando spread operator
        //gastosPaciente=[...listaMed]

        /* alternativa
        listaMed.forEach((medicacion)=>{
            gastosPaciente.push(medicacion)
        })
        */
    }
}

//instancias de la clases (entidades)
//Recepcion : Sandra y  Juan

 const recepSandra= new Recepcion(40,"sandraOtaz","sandraotaz@recepcion.com",["Lunes","Miércoles", "Viernes"])
 console.log(recepSandra);

 //ejecucion metodos de Recepcion

 recepSandra.ingresarPaciente("Firulais")
 console.log(pacientesPorAtender)

 const animal1:Animal={
    idAnimal:2,
    nombreAnimal:"Michifus",
    tipo:"gato",
    raza:"mestizo",
    propietario:"Juanito",
    ingreso:2022,
    notas:"primera visita",
    vacunasAplicadas:["vacuna3"],
    medicacion:[]
 }
 const animal2:Animal={
    idAnimal:3,
    nombreAnimal:"Chico",
    tipo:"perro",
    raza:"mestizo",
    propietario:"Laura",
    ingreso:2018,
    notas:"ninguna...",
    vacunasAplicadas:["antirabia"],
    medicacion:[]
 }

 recepSandra.agregarPacienteHistorial(
    {
        idAnimal:1,
        nombreAnimal:"Firulais",
        tipo:"perro",
        raza:"golden",
        propietario:"Pedrita",
        ingreso:2020,
        notas:"ninguna...",
        vacunasAplicadas:["vacuna1","antirabia"],
        medicacion:[] }
    )
    recepSandra.agregarPacienteHistorial(animal1);
    console.log(historialP)


    // let cantidad:number=gastosPaciente.length
    
    recepSandra.cobrarConsulta(2)


// instancia de  Veterinaria

const veteAle= new Veterinaria(52,"alejandraRuiz","alejandraRuiz@veterinaria.com")


//Ejecucion de metodos de Veterinaria 
console.log(veteAle)
veteAle.atenderPaciente("Firulais")
//console.log(pacientesPorAtender)

veteAle.agregarInfo(2,'raza',"egipcio")
//console.log(historialP)

veteAle.indicarGastoExtra(["medicamento1","medicamento2"],2)
console.log(gastosPaciente)

//prueba de ejecucion de cobro con medicamentos
recepSandra.cobrarConsulta(2)
//----------------------------------------------------------------------

//objetos
//objeto.propiedad =valor
// alternativa si pasamos la propiedad como un string objeto['propiedad'] = valor