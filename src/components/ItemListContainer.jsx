import React from 'react'
import './ItemListContainer.css'

function ItemListContainer({greeting}) {
  return (
    <div className='contenedor-encabezado'>
        <p>{greeting}</p>
        <h1>Martín NFT</h1>
    </div>
  )
}

export default ItemListContainer