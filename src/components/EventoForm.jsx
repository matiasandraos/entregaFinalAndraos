import React from 'react'
import { useState } from 'react'




const EventoForm = () => {

    const [nombre, setNombre]=useState()

    console.log(nombre);

    const handleSubmit = (e) =>{
        e.preventDefault ()
        nombre === "" ? alert ("Campo vacio") : alert(nombre)
        console.log(`Enviando ${nombre}`);
    }




  return (
    <>
   {/*  <Carrito/>

    carrito.length > 0 ? */}


    <form onSubmit={handleSubmit}>
        <input type="text" onChange={(e=>{setNombre(e.target.value)})}/>
        <button >Enviar</button>

    </form>
    
{/*     <h6>Regresar a mi catalog</h6> */}
    
    </>
  )
}

export default EventoForm