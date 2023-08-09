import React from 'react'

const Actividad = () => {

   const arrayProductos = [
        {nombre: "mate torpedo",
         precio:1000,
         stock: 10},
        {nombre: "mate camionero",
         precio:1500,
         stock: 15},
        {nombre: "mate imperial",
         precio:2000,
         stock: 5}
    ]

   const getProducts = () => {
    return new Promise((resolve, reject)=>{
        if (arrayProductos === 0){
            reject (new error("no hay productos"))
        } setTimeout (()=>{
            resolve (arrayProductos)
        },2000)
    })
   }
   
   async function fetchingProducts (){
    try{
        const productosFetched = await getProducts()
        console.log(productosFetched);
    }catch (error){
        console.error(error);
    }
   }  

   fetchingProducts()


  return (
<>

{arrayProductos.map((p)=>{
    return(
        <div>
            <h1>{p.nombre}</h1>
            <p>{p.precio}</p>
            <p>{p.stock}</p>
        </div>
     )
})}



</>  )
}

export default Actividad