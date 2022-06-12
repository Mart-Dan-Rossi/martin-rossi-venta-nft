import React, { useState } from 'react'
import './ItemCount.css'
import iconoSuma from '../img/icon-suma.svg'
import iconoResta from '../img/icon-resta.svg'

function ItemCount({inicial, item, cantidadProductosEnCarrito, onAdd}) {
    const {nombre, stock, precio} = item
    const [cantidadSeleccioable, setCantidadSeleccioable] = useState(inicial)
    const [cantidadEsteProductoEnElCarrito, setCantidadEsteProductoEnElCarrito] = useState(0)
    
    const contrastarInventario = (cantidadActual)=> {
        const seccionEsteProducto = document.getElementById(`${nombre}`)
        const indicadorCantidadDisponible = seccionEsteProducto.querySelector(".cantidad-disponible")
        const indicadorCantidadEnCarrito = seccionEsteProducto.querySelector(".cantidad-en-carrito")
        if (cantidadActual <= stock && cantidadActual + cantidadEsteProductoEnElCarrito <= stock) {
            indicadorCantidadDisponible.classList.remove("resaltar-con-rojo")
            indicadorCantidadEnCarrito.classList.remove("resaltar-con-rojo");
        } else {
            indicadorCantidadDisponible.classList.add("resaltar-con-rojo")
            indicadorCantidadEnCarrito.classList.add("resaltar-con-rojo")
        }
    }

    const clickBotonRestar = ()=> {
        contrastarInventario(cantidadSeleccioable - 1)
        if (cantidadSeleccioable > 0) {
            setCantidadSeleccioable(cantidadSeleccioable - 1)
        }
    }

    const clickBotonSumar = ()=> {
        contrastarInventario(cantidadSeleccioable + 1)
        if (cantidadSeleccioable + cantidadEsteProductoEnElCarrito < stock) {
            setCantidadSeleccioable(cantidadSeleccioable + 1)
        }
    }

    const clickBotonSumarAlCarrito = (event)=> {
        const seccionEsteProducto = document.getElementById(`${nombre}`)
        const indicadorCantidadDisponible = seccionEsteProducto.querySelector(".cantidad-disponible")
        const indicadorCantidadEnCarrito = seccionEsteProducto.querySelector(".cantidad-en-carrito")
        event.preventDefault()
        if (0 < cantidadSeleccioable && (cantidadEsteProductoEnElCarrito + cantidadSeleccioable) <= stock){
            setCantidadEsteProductoEnElCarrito(cantidadEsteProductoEnElCarrito + cantidadSeleccioable)
            onAdd(cantidadProductosEnCarrito + cantidadSeleccioable)
        }
        if (cantidadEsteProductoEnElCarrito + cantidadSeleccioable >= stock) {
            setCantidadSeleccioable(0)
            indicadorCantidadDisponible.classList.add("resaltar-con-rojo");
            indicadorCantidadEnCarrito.classList.add("resaltar-con-rojo");
        } else if (cantidadEsteProductoEnElCarrito + cantidadSeleccioable < stock) {
            setCantidadSeleccioable(1)
            indicadorCantidadDisponible.classList.remove("resaltar-con-rojo");
            indicadorCantidadEnCarrito.classList.remove("resaltar-con-rojo");
        }
    }

    return (
      <>
        <form>
            <div id={nombre} className="contenedor-parte-principal">
                <div className="contenedor-control-inventario">
                    <span className='cantidad-disponible'>Disponibles: {stock}</span>
                    <span className="cantidad-en-carrito">En carrito: {cantidadEsteProductoEnElCarrito}</span>
                </div>
                <div className="contenedor-selector-numerico">
                    <img className='boton-restar' src={iconoResta} alt="Botón restar" 
                    onClick={()=> { clickBotonRestar() }}/>
                    <input type="text" value={cantidadSeleccioable} readOnly/>
                    <img className='boton-sumar' src={iconoSuma} alt="Botón sumar" 
                    onClick={()=> { clickBotonSumar() }}/>
                </div>
                <span className="precio">Precio unidad: <span>${precio}</span></span>
            </div>
            <div className="contenedor-boton-agregar">
                <button className="agregar-al-carrito"
                onClick={(event)=>{ clickBotonSumarAlCarrito(event) }}>Agregar al carrito</button>
            </div>
        </form>
      </>
    )
}

export default ItemCount