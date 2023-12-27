let nombre="El señor de los anillos : las dos torres";
let palabras=nombre.split(" ");
if(palabras.length>4 ){
    palabras=palabras.slice(0,5);
    palabras.push("...")
    console.log(palabras.join(' '))
}

//guardar info en el localStorage
let data={perfil:"admin",token:"jashdkjshkjfhsdk"}

localStorage.setItem("info",JSON.stringify(data))// guardar la data en el componente de login

//componente de router, llamar a eso guardado

useEffect(()=>{
    let info=localStorage.getItem("info")

    setInfoUser(JSON.parse(info))
},[])


//navigate(/remeras)