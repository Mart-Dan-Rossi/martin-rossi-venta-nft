import React from 'react'
import ItemCount from './ItemCount'
import {primeraLetraAMayusc} from '../utilidades/utilidades';

function ItemDetail({item, productosEnCarrito, onAdd}) {
    const {id, imgURL, nombre, lore, existentes, stock, precio} = item
    return (
      <>
      <div className="item-detail">
        <h4 className="card-title item-id">#{id}</h4>
        <img src={"../"+imgURL} className="item-detail-img-top" alt={nombre}/>
        <div className="item-detail-body">
          <h5 className="card-title">{primeraLetraAMayusc(nombre)}</h5>
          <p className="card-text lore">{lore}</p>
        </div>
        <ItemCount key={id} inicial={stock > 0 ? 1 : 0} producto={nombre} stock={stock} productosEnCarrito={productosEnCarrito} onAdd={onAdd} precio={precio}/>
      </div>
      </>
    )
}

export default ItemDetail