import React from 'react'
import NavBar from './components/navBar'
import ItemListContainer from './components/ItemListContainer'

import UseEffect from './components/UseEffect'
import Actividad from './components/Actividad'


const App = () => {
  //promise 

  const aplicarDescuento = new Promise((resolve, reject) => {
    const descuento = true;

    if (descuento) {
      resolve('descuento aplicado');
    } else {
      reject('no se pudo aplicar el descuento');
    }
  });
  console.log(aplicarDescuento);

  aplicarDescuento
  .then ((resultado)=>{
   console.log(resultado);
  })
  .catch((error)=>{
    console.log(first);
  })

  return (
    <>
    <NavBar/>
    <ItemListContainer
    greeting='Bienvenidos a mi tienda'
    />
    <UseEffect/>
    <Actividad/>
    
    </>
  )
}

export default App