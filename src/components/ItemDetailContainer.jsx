import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import ItemDetail from './ItemDetail'
import './ItemDetailContainer.css'

const getItem = (setFunction, nombreAFiltrar)=> {
    setTimeout(()=>{
        fetch("../nfts.json")
            .then(res => res.json())
            //setFunction viene por parámetro y es la función utilizada para cambiar un estado
            //Utilizo el .find para recorrer el json. Por cada nft sólo retorno sólo el nft con nombre igual al que paso en la variable nombreAFiltrar
            .then(json => setFunction(json.find(nft => {
                return nft.nombre === nombreAFiltrar}))
                )
            .catch(err => console.error("Error al importar nfts.json en ItemDetailContain.jsx:", err))
    }, 2000)
}
    
function ItemDetailContainer({cantidadProductosEnCarrito, onAdd}) {
    const [item, setItem] = useState({})
    const { nombre } = useParams()

    useEffect(() => {
        getItem(setItem, nombre)
      }, [])

  return (
    <div className='item-detail-container'>
        <ItemDetail item={item} cantidadProductosEnCarrito={cantidadProductosEnCarrito} onAdd={onAdd}/>
    </div>
  )
}

export default ItemDetailContainer