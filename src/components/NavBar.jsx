import React from 'react'
import logo4 from '../img/Logo4.png'
import CartWidget from './CartWidget'
import './NavBar.css'

function NavBar() {
    return (
    <>
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
          <a className="navbar-brand" href="#"><img src={logo4} alt="Logo Martín NFT" />Martín NFT</a>
          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon" />
          </button>
          <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
            <div className="navbar-nav">
              <a className="nav-link active" href="#">Home <span className="sr-only">(current)</span></a>
              <a className="nav-link" href="#">Galería</a>
              <a className="nav-link" href="#">Precios</a>
            </div>
            <CartWidget cantidadProductos={0}/>
          </div>
        </nav>
    </>
    )
}

export default NavBar