import React, { useEffect, useState } from 'react'
import './RetribucionesImg.css'

function RetribucionesImg() {
    const [arrayNfts, setNfts] = useState([])
    useEffect(() => {    
        fetch("../nfts.json")
            .then((res) => res.json())
            .then((json) => setNfts(json))
            .catch(err => console.error("Error al importar nfts.json:", err))
    }, [])

    
    
  return (
    <div>
        <li className="nav-item dropdown">
        {/* Esta etiqueta <a> no es usada para navegar por lo que no la cambio a Link */}
        <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-expanded="false">
          Links agradecimientos
        </a>
        <div className="dropdown-menu" aria-labelledby="navbarDropdown">
            <p>Quiero aclarar que esta es una página creada para practicar. No es mi intención real vender estas imágenes.</p>
            {arrayNfts.map(nft => {
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

export default RetribucionesImg