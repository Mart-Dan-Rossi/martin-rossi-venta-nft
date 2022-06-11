import React from 'react'
import {useEffect, useState} from 'react';
import ItemList from './ItemList';
import {useParams} from 'react-router-dom';
import {primeraLetraAMayusc} from '../utilidades/utilidades';

function Category({greeting}) {
    const [arrayNfts, setArrayNfts] = useState([])
    const { categoryName } = useParams()

  
    useEffect(() => {
      setTimeout(()=>{
        fetch("../nfts.json")
          .then(res => res.json())
          //Utilizo el .filter para retornar sólo los obj que contienen la categoría igual a la pasada en categoryName
          .then(json => setArrayNfts(json.filter(obj => {
            return obj.category === categoryName}))
            )
          .catch(err => console.error("Error al importar nfts.json:", err))
      }, 2000)
    }, [categoryName])
  
    return (
      <>
        <div className='contenedor-encabezado'>
            <p>{greeting}</p>
           <h1>Martín NFT</h1>
           <h2 className="categoryName">{primeraLetraAMayusc(categoryName)}</h2>
        </div>
        {/* Hago el siguiente if puesto que hasta que se hace el fetch arrayNfts es un array vacío lo que genera un error en el mapeo que sucede dentro de ItemList*/}
        {arrayNfts != [] ? <ItemList arrayNfts={arrayNfts} /> : <div className="noDisplay"></div>}
        
      </>
    )
  }

export default Category