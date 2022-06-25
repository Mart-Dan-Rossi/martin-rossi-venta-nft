import React from 'react'
import ItemCount from './ItemCount'
import {primeraLetraAMayusc} from '../utilidades/utilidades';
import { Link } from 'react-router-dom';
import { useState } from 'react';

function ItemDetail({item}) {
    const {id, imgURL, nombre, lore, stock, category} = item
    const [mostrarItemCount, onAdd] = useState(true)
    
    return (
      <>
      <div className="item-detail">
        <div className="item-header">
          <h4 className="card-title">{primeraLetraAMayusc(nombre)} <span className="subtitulo">#{id}</span></h4>
          {/*La función primeraLetraAMatusc es propia de mi proyecto. Se encuentra en la carpeta utilidades.*/}
          <Link to={`/categoria/${category}`}>
            <h4 className="card-title">{primeraLetraAMayusc(category)}</h4>
          </Link>
        </div>
        <img src={"../"+imgURL} className="item-detail-img-top" alt={"imágen " + nombre}/>
        <div className="item-detail-body">
          <h5 className="card-title">{primeraLetraAMayusc(nombre)}</h5>
          <p className="card-text lore">{lore}</p>
        </div>
        {mostrarItemCount ? 
           <ItemCount key={id} inicial={stock > 0 ? 1 : 0} item={item} onAdd={onAdd}/>
           : 
           <Link to="/miCarrito" className='btn btn-primary'>Ir al carrito</Link>
        }        
      </div>
      </>
    )
}

export default ItemDetail