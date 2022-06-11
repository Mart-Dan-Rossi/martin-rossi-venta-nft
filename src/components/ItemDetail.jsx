import React from 'react'
import ItemCount from './ItemCount'
import {primeraLetraAMayusc} from '../utilidades/utilidades';

function ItemDetail({item, cantidadProductosEnCarrito, onAdd}) {
    const {id, imgURL, nombre, lore, stock, category} = item
    return (
      <>
      <div className="item-detail">
        <div className="item-header">
          <h4 className="card-title">#{id}</h4>
          {/*La función primeraLetraAMatusc es propia de mi proyecto. Se encuentra en la carpeta utilidades.*/}
          <h4 className="card-title">{primeraLetraAMayusc(category)}</h4>
        </div>
        <img src={"../"+imgURL} className="item-detail-img-top" alt={"imágen " + nombre}/>
        <div className="item-detail-body">
          <h5 className="card-title">{primeraLetraAMayusc(nombre)}</h5>
          <p className="card-text lore">{lore}</p>
        </div>
        <ItemCount key={id} inicial={stock > 0 ? 1 : 0} item={item} cantidadProductosEnCarrito={cantidadProductosEnCarrito} onAdd={onAdd}/>
      </div>
      </>
    )
}

export default ItemDetail