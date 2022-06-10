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
        {console.log("arrayNfts: ",arrayNfts)}
        {arrayNfts != [] ? <ItemList arrayNfts={arrayNfts} /> : <div className="noDisplay"></div>}
        
      </>
    )
  }

export default Category