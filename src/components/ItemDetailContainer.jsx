import React, { useEffect, useState } from 'react'
import ItemDetail from './ItemDetail'
import './ItemDetailContainer.css'

const getItem = (setFunction, itemId)=> {
    setTimeout(()=>{
        fetch("nfts.json")
        .then(res => res.json())
        .then(json => setFunction(json.find(obj => {
            return obj.id === itemId}))
            )
        .catch(err => console.error("Error al importar nfts.json:", err))
        }, 2000)
    }
    
function ItemDetailContainer({itemId, productosEnCarrito, onAdd}) {
    const [item, setItem] = useState({})

    useEffect(() => {
        getItem(setItem, itemId)
      }, [])

  return (
    <div className='item-detail-container'>
        <ItemDetail item={item} productosEnCarrito={productosEnCarrito} onAdd={onAdd}/>
    </div>
  )
}

export default ItemDetailContainer