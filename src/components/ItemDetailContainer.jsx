import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import ItemDetail from './ItemDetail'
import './ItemDetailContainer.css'

const getItem = (setFunction, nombre)=> {
    setTimeout(()=>{
        fetch("../nfts.json")
        .then(res => res.json())
        .then(json => setFunction(json.find(obj => {
            return obj.nombre === nombre}))
            )
        .catch(err => console.error("Error al importar nfts.json en ItemDetailContain.jsx:", err))
        }, 2000)
    }
    
function ItemDetailContainer({productosEnCarrito, onAdd}) {
    const [item, setItem] = useState({})
    const { nombre } = useParams()

    useEffect(() => {
        getItem(setItem, nombre)
      }, [])

  return (
    <div className='item-detail-container'>
        <ItemDetail item={item} productosEnCarrito={productosEnCarrito} onAdd={onAdd}/>
    </div>
  )
}

export default ItemDetailContainer