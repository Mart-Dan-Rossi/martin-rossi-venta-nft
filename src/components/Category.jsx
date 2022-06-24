import React from 'react'
import {useEffect, useState, useContext} from 'react';
import ItemList from './ItemList';
import {useParams} from 'react-router-dom';
import {primeraLetraAMayusc} from '../utilidades/utilidades';
import Loading from './Loading';
import { ApiContext } from '../context/ApiContext';

function Category({greeting}) {
    const { arrayProductos } = useContext(ApiContext)
    const { categoryName } = useParams()

    const [arrayNftsFiltrados, setArrayNftsFiltrados] = useState()

    const [loading, setLoading] = useState(false)

  
    useEffect(() => {
      setLoading(true)
      setArrayNftsFiltrados(arrayProductos.filter(obj => {
        return obj.category === categoryName
      }))
      setLoading(false)
    }, [categoryName, arrayProductos])

    if(loading) {
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
        {/* Hago el siguiente if puesto que hasta que se hace el fetch arrayProductos es un array vacío lo que genera un error en el mapeo que sucede dentro de ItemList*/}
        {arrayNftsFiltrados != [] ? <ItemList arrayProductos={arrayNftsFiltrados} /> : <div className="noDisplay"></div>}
        
      </>
      )
    }
  }

export default Category