import React from 'react'
import { Link } from 'react-router-dom'
import logo4 from '../img/Logo4.png'
import CartWidget from './CartWidget'
import './NavBar.css'

function NavBar({productosEnCarrito}) {
    return (
    <>
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
          <Link to={"/"} className="navbar-brand"><img src={logo4} alt="Logo Martín NFT" />Martín NFT</Link>
          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon" />
          </button>
          <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
            <div className="navbar-nav">
              <Link to={"/"} className="nav-link active">Home <span className="sr-only">(current)</span></Link>
              {/* Esta etiqueta <a> no es utilizada para navegación por lo que no la cambiaré a Link */}
              <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-expanded="false">
                Categorías
              </a>
              <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                <Link to={"/categoria/harinas"}>Harinas</Link>
                <Link to={"/categoria/carnes"}>Carnes</Link>
              </div>
            </div>
            <CartWidget cantidadProductos={productosEnCarrito}/>
          </div>
        </nav>
    </>
    )
}

export default NavBar