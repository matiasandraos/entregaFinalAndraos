import React from 'react'
import {useEffect, useState} from 'react'
import NavBar from './components/navBar'
import ItemListContainer from './components/itemContainers/ItemListContainer'
import Item from './components/itemContainers/item'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

import ItemDetailContainer from './components/itemDetailContainer/ItemDetailContainer'
import Home from './components/Home'
import About from './components/About.jsx'
import Contact from './components/Contact'
import Cart from './components/Cart'

import ItemDetail from './components/itemDetailContainer/ItemDetail'
import ShoppingCartContext from './context/CartContext'
import ComponenteA from './components/ComponenteA'

//minuto 37 aprox para retomar, estoy colocando la rutas para poder implementar routing en mi proyecto
const App = () => {
  
  return (
   
   
    
   
    <BrowserRouter>
 <ShoppingCartContext>
    <NavBar/>




<Routes>
 
<Route exact path="/" element={<ItemListContainer/>}/>
<Route exact path="/about" element={<About />}/>
<Route exact path="/contact" element={<Contact/>}/>
<Route exact path="/cart" element={<Cart/>}  />  

<Route exact path="/categoria/:id" element={<ItemListContainer/>}/>  
<Route exact path="/item/:id" element={<ItemDetailContainer/>}/>   

/<Route exact path="/itemDetailContainer/itemDetail/:id" element={<ItemDetail/>}/> 
 </Routes>
  
    <ComponenteA/>
    <Cart/>
 


  </ShoppingCartContext>

    </BrowserRouter> 
  )
}

export default App