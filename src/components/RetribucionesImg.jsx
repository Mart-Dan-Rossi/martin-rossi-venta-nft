import React, { useContext, useEffect, useState } from 'react'
import Loading from './Loading'
import {collection, getDocs, getFirestore} from 'firebase/firestore';
import './RetribucionesImg.css'

function RetribucionesImg() {
  const [arrayProductos, setArrayProductos] = useState([])
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
      <div>
          <li className="nav-item dropdown">
          {/* Esta etiqueta <a> no es usada para navegar por lo que no la cambio a Link */}
          <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-expanded="false">
            Links agradecimientos
          </a>
          <div className="dropdown-menu mi-dropdown" aria-labelledby="navbarDropdown">
              <p>Quiero aclarar que esta es una página creada para practicar. No es mi intención real vender estas imágenes.</p>
              {arrayProductos.map(nft => {
                  if(nft.agradecimientoLink != ""){
                  return  <>
                            {/* Esta etiqueta <a> es para ir a un link externo a mi sitio */}
                            <a href={nft.agradecimientoLink} target="_blank">
                              {nft.agradecimientoMensaje}
                            </a>
                          </>
                  }
              })}          
          </div>
        </li>
      </div>
    )
  }
}

export default RetribucionesImg