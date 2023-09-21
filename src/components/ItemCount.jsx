import React from 'react'
import {useState, useEffect} from 'react'
import ItemDetail from './itemDetailContainer/ItemDetail'

const ItemCount = () => {
    const [mensaje, setMensaje]= useState('mensaje inicial')
    const [contador, setContador]= useState(0)
    
    useEffect(()=>{
    
        console.log("efecto secundario");
    },[contador])

    const sumar =()=>{
        setContador(contador+1)
    }

    const restar =()=>{
        if (contador != 0){
            setContador(contador - 1)
        } else
        setContador (contador - 0)
    }  
    
    const reset =()=>{
        setContador (0)
    }
  
    return (
    <>
    
        <ItemDetail sumar={sumar} restar={restar} reset={reset}/>

    </>
  )
}

export default ItemCount