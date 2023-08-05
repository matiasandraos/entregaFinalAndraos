import React from 'react'
import NavBar from './components/navBar'
import ItemListContainer from './components/ItemListContainer'


const App = () => {
  return (
    <>
    <NavBar/>
    <ItemListContainer
    greeting='Bienvenidos a mi tienda'
    />
    
    
    </>
  )
}

export default App