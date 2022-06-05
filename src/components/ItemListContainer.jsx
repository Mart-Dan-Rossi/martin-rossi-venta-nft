import React, { useEffect, useState } from 'react'
import ItemList from './ItemList'
import './ItemListContainer.css'

function ItemListContainer({greeting}) {
  const [arrayNfts, setArrayNfts] = useState([])

  
  useEffect(() => {
    setTimeout(()=>{
      fetch("nfts.json")
        .then(res => res.json())
        .then(json => setArrayNfts(json))
        .catch(err => console.error("Error al importar nfts.json:", err))
    }, 2000)
  }, [])

  return (
    <>
      <div className='contenedor-encabezado'>
          <p>{greeting}</p>
         <h1>Martín NFT</h1>
      </div>
      <ItemList arrayNfts={arrayNfts}/>
    </>
  )
}

export default ItemListContainer