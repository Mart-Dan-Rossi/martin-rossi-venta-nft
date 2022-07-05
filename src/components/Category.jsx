import { collection, getDocs, getFirestore, query, where } from 'firebase/firestore';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { primeraLetraAMayusc } from '../utilidades/utilidades';
import ItemList from './ItemList';
import Loading from './Loading';

function Category({greeting}) {
    const { categoryName } = useParams()
    
    const [arrayNftsFiltrados, setArrayNftsFiltrados] = useState()

    let categoryNameDisplayable = primeraLetraAMayusc(categoryName)
    
    
    useEffect(() => {
      const arrayProductos = collection(getFirestore(), "items")
      const q = query(arrayProductos, where("category", "==", categoryName))

      getDocs(q)
      .then((res)=>{
        setArrayNftsFiltrados(
          [...new Set(res.docs.map((producto) => (
              {
                id: producto.id,
                ...producto.data()
              }
            ))
          )]
        )
      })
    }, [arrayNftsFiltrados, categoryName])

    if(arrayNftsFiltrados == undefined) {
      return (
        <div className="loading-container">
          <Loading />
        </div>
      )
    } else {      
      return (
        <div>
          <div className='contenedor-encabezado'>
              <p>{greeting}</p>
             <h1>Martín NFT</h1>           
             <h2 className="categoryName">{categoryNameDisplayable}</h2>
          </div>
          {/* Hago el siguiente if puesto que hasta que se hace el fetch arrayProductos es un array vacío lo que genera un error en el mapeo que sucede dentro de ItemList*/}
          {arrayNftsFiltrados !== [] && <ItemList arrayProductos={arrayNftsFiltrados} />}          
        </div>
      )
    }
  }

export default Category