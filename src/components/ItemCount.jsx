import { useContext, useState } from 'react'
import { CartContext } from '../context/CartContext'
import iconoResta from '../img/icon-resta.svg'
import iconoSuma from '../img/icon-suma.svg'
import './ItemCount.css'

function ItemCount({inicial, item, onAdd}) {
    const {nombre, stock, precio} = item
    const [cantidadSeleccioable, setCantidadSeleccioable] = useState(inicial)
    const {cantidadEsteProductoEnCarrito} = useContext(CartContext)

    let cantidadEnCarrito = cantidadEsteProductoEnCarrito(nombre)
    
    const contrastarInventario = (cantidadSeleccionableActual)=> {
        const seccionEsteProducto = document.getElementById(`${nombre}`)
        const indicadorCantidadDisponible = seccionEsteProducto.querySelector(".cantidad-disponible")
        const indicadorCantidadEnCarrito = seccionEsteProducto.querySelector(".cantidad-en-carrito")
        if (cantidadSeleccionableActual <= stock && cantidadSeleccionableActual + cantidadEnCarrito <= stock) {
            indicadorCantidadDisponible.classList.remove("resaltar-con-rojo")
            indicadorCantidadEnCarrito.classList.remove("resaltar-con-rojo");
        } else {
            indicadorCantidadDisponible.classList.add("resaltar-con-rojo")
            indicadorCantidadEnCarrito.classList.add("resaltar-con-rojo")
        }
    }

    const clickBotonRestar = ()=> {
        contrastarInventario(cantidadSeleccioable - 1)
        cantidadSeleccioable > 0 && setCantidadSeleccioable(cantidadSeleccioable - 1)
    }

    const clickBotonSumar = ()=> {
        contrastarInventario(cantidadSeleccioable + 1)
        cantidadSeleccioable + cantidadEnCarrito < stock && setCantidadSeleccioable(cantidadSeleccioable + 1)
    }

    const clickBotonSumarAlCarrito = (event)=> {
        const seccionEsteProducto = document.getElementById(`${nombre}`)
        const indicadorCantidadDisponible = seccionEsteProducto.querySelector(".cantidad-disponible")
        const indicadorCantidadEnCarrito = seccionEsteProducto.querySelector(".cantidad-en-carrito")
        event.preventDefault()
        if (cantidadEnCarrito + cantidadSeleccioable >= stock) {
            setCantidadSeleccioable(0)
            indicadorCantidadDisponible.classList.add("resaltar-con-rojo");
            indicadorCantidadEnCarrito.classList.add("resaltar-con-rojo");
        } else if (cantidadEnCarrito + cantidadSeleccioable < stock) {
            setCantidadSeleccioable(1)
            indicadorCantidadDisponible.classList.remove("resaltar-con-rojo");
            indicadorCantidadEnCarrito.classList.remove("resaltar-con-rojo");
        }
        if(0 < cantidadSeleccioable && (cantidadEnCarrito + cantidadSeleccioable) <= stock){
            onAdd(cantidadSeleccioable)
        }
    }

    return (
      <>
        <form>
            <div id={nombre} className="contenedor-parte-principal">
                <div className="contenedor-control-inventario">
                    <span className='cantidad-disponible'>Disponibles: {stock}</span>
                    <span className="cantidad-en-carrito">En carrito: {cantidadEnCarrito}</span>
                </div>
                <div className="contenedor-selector-numerico">
                    <img className='boton-restar' src={iconoResta} alt="Bot??n restar" 
                    onClick={()=> { clickBotonRestar() }}/>
                    <input type="text" value={cantidadSeleccioable} readOnly/>
                    <img className='boton-sumar' src={iconoSuma} alt="Bot??n sumar" 
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