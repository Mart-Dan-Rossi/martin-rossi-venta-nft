import React from 'react'
import ItemCount from './ItemCount'
import {primeraLetraAMayusc} from '../utilidades/utilidades';

function ItemDetail({item, productosEnCarrito, onAdd}) {
    const {id, imgURL, nombre, lore, stock} = item
    return (
      <>
      <div className="item-detail">
        <h4 className="card-title item-id">#{id}</h4>
        <img src={"../"+imgURL} className="item-detail-img-top" alt={"imágen " + nombre}/>
        <div className="item-detail-body">
          <h5 className="card-title">{primeraLetraAMayusc(nombre)}</h5>
          <p className="card-text lore">{lore}</p>
        </div>
        <ItemCount key={id} inicial={stock > 0 ? 1 : 0} item={item} productosEnCarrito={productosEnCarrito} onAdd={onAdd}/>
      </div>
      </>
    )
}

export default ItemDetail