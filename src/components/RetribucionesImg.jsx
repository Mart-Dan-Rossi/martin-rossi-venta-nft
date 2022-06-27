import React, { useContext, useEffect, useState } from 'react'
// import { ApiContext } from '../context/ApiContext'
import Loading from './Loading'
import './RetribucionesImg.css'

function RetribucionesImg() {
    // const { arrayProductos } = useContext(ApiContext)

    const [loading, setLoading] = useState(false)

    useEffect(() => {    
      // setLoading(true)
      // if(arrayProductos.length > 0){
      //   setLoading(false)
      // }
  }, [/*arrayProductos*/])

    
  if(loading) {
    return (
      <Loading />
    )
  } else {
    return (
      <div>
          <li className="nav-item dropdown">
          {/* Esta etiqueta <a> no es usada para navegar por lo que no la cambio a Link */}
          <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-expanded="false">
            Links agradecimientos
          </a>
          <div className="dropdown-menu" aria-labelledby="navbarDropdown">
              <p>Quiero aclarar que esta es una página creada para practicar. No es mi intención real vender estas imágenes.</p>
              {/* {arrayProductos.map(nft => {
                  if(nft.agradecimientoLink != ""){
                  return  <> */}
                            {/* Esta etiqueta <a> es para ir a un link externo a mi sitio */}
                            {/* <a href={nft.agradecimientoLink} target="_blank">
                              {nft.agradecimientoMensaje}
                            </a>
                          </>
                  }
              })}           */}
          </div>
        </li>
      </div>
    )
  }
}

export default RetribucionesImg