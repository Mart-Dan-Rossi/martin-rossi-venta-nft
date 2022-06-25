import React from 'react'
import { Link } from 'react-router-dom'
import {primeraLetraAMayusc} from '../utilidades/utilidades';

function Item({nft}) {
  const {id,imgURL, nombre, existentes, stock, category} = nft
  return (
    <>
    <Link to={`/producto/${id}`}>
    <div className="card">
      <img src={"../"+imgURL} className="card-img-top" alt={nombre}/>
      <div className="card-body">
     {/*La función primeraLetraAMatusc es propia de mi proyecto. Se encuentra en la carpeta utilidades.*/}
        <h5 className="card-title">{primeraLetraAMayusc(nombre)}</h5>
        <h5 className="card-title">{primeraLetraAMayusc(category)}</h5>
        <p className='card-text'>En stock: {stock}/{existentes}</p>
        <p className="btn btn-primary">Detalles</p>
      </div>
    </div>
    </Link>
    </>
  )
}

export default Item