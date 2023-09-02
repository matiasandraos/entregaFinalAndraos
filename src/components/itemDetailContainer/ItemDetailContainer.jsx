import React from 'react'
import ItemDetail from './ItemDetail.jsx'
import { useEffect, useState} from 'react'
import { useParams } from 'react-router-dom'


//en este componente, tengo que filtrar por id los productos para que cuando haga click en details, me muestre la card del producto seleccionado, despues puedo mapear aca o en el componente de itemDetail, para que me haga la card con la info seleccionada. 

 
const ItemDetailContainer = () => {
  

   
const productos = [
  { id:1,
    nombre: "mate torpedo",
    description: "descripcion",
   precio:1000,
   categoria:"A",
   stock: 10},
  { id:2,
    nombre: "mate camionero",
    description: "descripcion",
   precio:1500,
   categoria:"A",
   stock: 15},
  { id:3,
    nombre: "mate imperial",
    description: "descripcion",
   precio:2000,
   categoria:"A",
   stock: 5},
   { id:4,
    nombre: "mate torpedo",
    description: "descripcion",
   precio:1000,
   categoria:"B",
   stock: 10},
  { id:5,
    nombre: "mate camionero",
    description: "descripcion",
   precio:1500,
   categoria:"B",
   stock: 15},
  { id:6,
    nombre: "mate imperial",
    description: "descripcion",
   precio:2000,
   categoria:"B",
   stock: 5},
   { id:7,
    nombre: "mate torpedo",
    description: "descripcion",
   precio:1000,
   categoria:"C",
   stock: 10},
  { id:8,
    nombre: "mate camionero",
    description: "descripcion",
   precio:1500,
   categoria:"C",
   stock: 15},
  { id:9,
    nombre: "mate imperial",
    description: "descripcion",
   precio:2000,
   categoria:"C",
   stock: 5}
]


const getProducts = () => {
  return new Promise((resolve, reject)=>{
    if(productos.length >0){
      setTimeout(()=>{
        resolve (productos)
      }, [])
    } else {
      reject (new error ("No hay datos"))
    }
  })}
  
  getProducts ()
    .then((res)=>{
      console.log(res);
    } )
    .catch ((error)=>{
      console.log(error);
    })

    
  return (
    <> 


      <ItemDetail productos={productos}/>
    </>
  )
}

export default ItemDetailContainer
/* 

{productosDetail.map((p)=>{
  return(
      <ItemDetail 
          key={p.id}
          nombre={p.nombre}
          description={p.description}
          precio={p.precio}
          stock = {p.stock}
          />
  )
})} */