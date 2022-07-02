import { collection, getDocs, getFirestore } from 'firebase/firestore';
import { useEffect, useState } from 'react';
import { primeraLetraAMayusc } from '../utilidades/utilidades';
import ItemList from './ItemList';
import './ItemListContainer.css';
import Loading from './Loading';

function ItemListContainer({greeting}) {
  const categoryName = "todos los NFTs"

  const [arrayProductos, setArrayProductos] = useState([])

  let categoryDisplayeable = primeraLetraAMayusc(categoryName)

  
  useEffect(() => {
    const coleccionProductos = collection(getFirestore(), "items")

    getDocs(coleccionProductos)
    .then((res)=> {
      setArrayProductos(res.docs.map((doc)=> ({id: doc.id, ...doc.data()})))
    })      
  }, [])

  if(arrayProductos==0){
    return (
      <div className="loading-container">
        <Loading />
      </div>
    )
  } else {
    return (
      <>
        <div className='contenedor-encabezado'>
            <p>{greeting}</p>
           <h1>Martín NFT</h1>
           <h2 className="categoryName">{categoryDisplayeable}</h2>
        </div>
        <ItemList arrayProductos={arrayProductos} />
      </>
    )
  }
}

export default ItemListContainer