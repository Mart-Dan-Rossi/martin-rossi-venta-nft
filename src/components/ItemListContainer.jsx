import React, { useContext, useEffect, useState } from 'react'
import ItemList from './ItemList'
import {primeraLetraAMayusc} from '../utilidades/utilidades';
import './ItemListContainer.css'
import Loading from './Loading';
import { ApiContext } from '../context/ApiContext';

function ItemListContainer({greeting}) {
  const { arrayProductos } = useContext(ApiContext)
  const categoryName = "todos los NFTs"

  const [loading, setLoading] = useState(false)

  
  useEffect(() => {
    setLoading(true)
    if(arrayProductos.length > 0){
      setLoading(false)
    }
  }, [arrayProductos])


  if(loading){
    return (
      <Loading />
    )
  } else {
    return (
      <>
        <div className='contenedor-encabezado'>
            <p>{greeting}</p>
           <h1>Martín NFT</h1>
           {/*La función primeraLetraAMatusc es propia de mi proyecto. Se encuentra en la carpeta utilidades.*/}
           <h2 className="categoryName">{primeraLetraAMayusc(categoryName)}</h2>
        </div>
        <ItemList arrayProductos={arrayProductos} />
      </>
    )
  }
}

export default ItemListContainer