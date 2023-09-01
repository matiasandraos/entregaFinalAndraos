import React from 'react'
import { Flex } from '@chakra-ui/react'
import ItemList from './itemList.jsx'
import ItemDetailContainer from '../itemDetailContainer/ItemDetailContainer.jsx'
import { useParams } from 'react-router-dom'

const ItemListContainer = () => {
  
  const {categoria} = useParams()
  console.log(categoria);

  const productos = [
    { id:1,
      nombre: "mate torpedo",
      description: "",
     precio:1000,
     categoria:"A",
     stock: 10},
    { id:2,
      nombre: "mate camionero",
      description: "",
     precio:1500,
     categoria:"A",
     stock: 15},
    { id:3,
      nombre: "mate imperial",
      description: "",
     precio:2000,
     categoria:"A",
     stock: 5},
     { id:4,
      nombre: "mate torpedo",
      description: "",
     precio:1000,
     categoria:"B",
     stock: 10},
    { id:5,
      nombre: "mate camionero",
      description: "",
     precio:1500,
     categoria:"B",
     stock: 15},
    { id:6,
      nombre: "mate imperial",
      description: "",
     precio:2000,
     categoria:"B",
     stock: 5},
     { id:7,
      nombre: "mate torpedo",
      description: "",
     precio:1000,
     categoria:"C",
     stock: 10},
    { id:8,
      nombre: "mate camionero",
      description: "",
     precio:1500,
     categoria:"C",
     stock: 15},
    { id:9,
      nombre: "mate imperial",
      description: "",
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
     
    <Flex>
      <ItemList productos = {productos}/>
     
    </Flex>
    
    </>
  )
}

export default ItemListContainer