import { Fragment,useState } from "react";
import axios from "axios";

export default function Form(){

    const[messageOk,setMessageOk]=useState(false)
    const enviarAlumno=async(event)=>{
        event.preventDefault();//evito que ejecute su accion por defecto
        //console.log("se ejecuta la funcion enviarAlumno");
        //arme el objeto del contenido del form
        const form={
            "nombre":event.target[0].value,
            "apellido":event.target[1].value,
            "edad":event.target[2].value
        }

       // fetch -> modificado para un post -> con el envio de la info en formato JSON
        // await fetch("http://localhost:4000/cargaAlumno",{
        //     method:"post",
        //     body:JSON.stringify(form),
        //     headers:{
        //         'Content-type':"application/json"
        //     }
        // })
        // .then((res)=>console.log(res))
        // .then(data=> event.target.reset())
        // .catch((err)=>console.log(err))

        //alternativa con axios
        await axios.post("http://localhost:4000/cargaAlumno",form)
        .then((res)=>console.log(res))
        .then(()=> event.target.reset())
        .then(()=> {
            setMessageOk(true);
            setTimeout(()=>setMessageOk(false),2000)
        })
        .catch((err)=>console.log(err))

    }
    return(
        <Fragment>
        {messageOk === false?
            <form className="d-flex flex-column w-50 gap-4"  onSubmit={(event)=>enviarAlumno(event)}>
                <label htmlFor="nombre">Nombre</label>
                <input type="text" id="nombre" name="nombre"/>
                <label htmlFor="apellido">Apellido</label>
                <input type="text" id="apellido" name="apellido"/>
                <label htmlFor="edad">Edad</label>
                <input type="number" id="edad" name="edad"/>

                <input type="submit" value="Enviar"/>
            </form>:
             <p className="alert bg-primary fs-5">El alumno se cargo correctamente!</p> }
        </Fragment>
    )
}
