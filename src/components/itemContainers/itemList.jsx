import React from 'react'
import Item from './item.jsx'

const itemList = ({productos}) => {
  return (
    <>
        {productos.map((p)=>{
            return(
                <Item 
                key={p.id}
                    id={p.id}
                    nombre={p.nombre}
                    precio={p.precio}
                    stock = {p.stock}
                    />
            )
        })}
    </>
  )
}

export default itemList 