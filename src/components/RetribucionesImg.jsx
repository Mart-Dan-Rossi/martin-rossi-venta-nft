import React, { useEffect, useState } from 'react'
import './RetribucionesImg.css'

function RetribucionesImg() {
    const [arrayNfts, setNfts] = useState([])
    useEffect(() => {    
        fetch("nfts.json")
            .then((res) => res.json())
            .then((json) => setNfts(json))
            .catch(err => console.error("Error al importar nfts.json:", err))
    }, [])

    
    
  return (
    <div>
        <li className="nav-item dropdown">
        <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-expanded="false">
          Links agradecimientos
        </a>
        <div className="dropdown-menu" aria-labelledby="navbarDropdown">
            {arrayNfts.map(nft => {
                if(nft.agradecimientoLink != ""){
                return  <>
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