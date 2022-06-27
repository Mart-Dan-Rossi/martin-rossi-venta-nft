import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import {primeraLetraAMayusc} from '../utilidades/utilidades';
import {doc, getDoc, getFirestore} from 'firebase/firestore';
import { useState } from 'react';
import Loading from './Loading';

function Item({nft}) {
  const {id} = nft

  const [item, setItem] = useState({})
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    setLoading(true)
        let producto = doc(getFirestore(), "items", id)
        getDoc(producto)        
        .then(doc => {
          setItem({id: doc.id, ...doc.data()})
        })
        .finally(setLoading(false))
      }, [])      
      
    if(loading) {
      return (<Loading />
      )
    } else {
    return (
      <>
      <Link to={`/producto/${id}`}>
        <div className="card">
          <img src={"../"+item.imgURL} className="card-img-top" alt={primeraLetraAMayusc(item.nombre)}/>
          <div className="card-body">
         {/*La función primeraLetraAMatusc es propia de mi proyecto. Se encuentra en la carpeta utilidades.*/}
            <h5 className="card-title">{primeraLetraAMayusc(item.nombre)}</h5>
            <h5 className="card-title">{primeraLetraAMayusc(item.category)}</h5>
            <p className='card-text'>En stock: {item.stock}/{item.existentes}</p>
            <p className="btn btn-primary">Detalles</p>
          </div>
        </div>
      </Link>
      </>
    )
  }
}

export default Item