import React from 'react'
import { Flex } from '@chakra-ui/react'
import ItemList from './itemList.jsx'
import ItemDetailContainer from '../itemDetailContainer/ItemDetailContainer.jsx'
import { useParams } from 'react-router-dom'

const ItemListContainer = () => {
  
  const {categoria} = useParams()
  

  const productos = [
    { id:1,
      nombre: "mate torpedo",
      description: "",
     precio:1000,
     categoria:"cat1",
     stock: 10},
    { id:2,
      nombre: "mate camionero",
      description: "",
     precio:1500,
     categoria:"cat1",
     stock: 15},
    { id:3,
      nombre: "mate imperial",
      description: "",
     precio:2000,
     categoria:"cat1",
     stock: 5},
     { id:4,
      nombre: "mate torpedo",
      description: "",
     precio:1000,
     categoria:"cat2",
     stock: 10},
    { id:5,
      nombre: "mate camionero",
      description: "",
     precio:1500,
     categoria:"cat2",
     stock: 15},
    { id:6,
      nombre: "mate imperial",
      description: "",
     precio:2000,
     categoria:"cat2",
     stock: 5},
     { id:7,
      nombre: "mate torpedo",
      description: "",
     precio:1000,
     categoria:"cat3",
     stock: 10},
    { id:8,
      nombre: "mate camionero",
      description: "",
     precio:1500,
     categoria:"cat3",
     stock: 15},
    { id:9,
      nombre: "mate imperial",
      description: "",
     precio:2000,
     categoria:"cat3",
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
    
  } )
  .catch ((error)=>{
    console.log(error);
  })


const filteredProducts = productos.filter ((producto)=> producto.categoria === categoria)

  return (
    <>
     
    <Flex>
      <ItemList productos = {filteredProducts}/>
      <div>
          { categoria ? <ItemList productos = {filteredProducts}/> : <ItemList productos={productos}/> }
      </div>
    
    </Flex>
    
    </>
  )
}

export default ItemListContainer