import { useState } from "react";
import { createContext } from "react";

export const CartContext = createContext()

const {Provider} = CartContext;

const MyProvider = ({children}) => {
    const [cart, setCart] = useState([])    
    const [cantidadProductosEnCarrito, setCantidadCarrito] = useState(0)

    const isInCart = (id)=> {
        //Método Some es un método de array que devuelve un boolean
        return cart.some(productoEnCarrito => productoEnCarrito.id == id)
    }

    const agregarItem = (item, cantidadEnElCarrito)=> {
        //Le agrego una nueva propiedad al item
        const newItem = {
            ...item,
            cantidadEnElCarrito
        }

        if(isInCart(newItem.id)){
            //Busco el producto en el estado por su id
            const productoAgregadoEnItemArray = cart.find(producto => producto.id == newItem.id)
            //Obtengo el índice del producto en el array
            const indexProducto = cart.indexOf(productoAgregadoEnItemArray)
            //Copio el estado cart para poder modificarlo
            const arrayProductosAux = [...cart]

            //Modifico el estado para que agregue la cantidad indicada
            arrayProductosAux[indexProducto].cantidadEnElCarrito += cantidadEnElCarrito
            //Guardo las modificaciones del estado
            setCart(arrayProductosAux)
        } else {
            //Si no estaba en el carrito agrego el nuevo item al cart reteniendo la info previa
            setCart([...cart], newItem)
        }
    }

    const vaciarCarrito = ()=> {
        setCart([])
    }

    const borrarItem = (id)=> {
        return setCart(cart.filter(producto => producto.id != id))
    }

    const cantidadEsteProductoEnCarrito = ()=> {
        return cart ? cart.reduce((acc, producto)=> acc += producto.cantidadEnElCarrito, 0) : 0
    }

    const obtenerPrecioPorTipoDeProducto = ()=> {
        return cart.reduce((acc, producto)=> acc += producto.cantidadEnElCarrito * producto.precio, 0)
    }


    return <Provider value={{cart, cantidadProductosEnCarrito, setCantidadCarrito, isInCart, agregarItem, vaciarCarrito, borrarItem, cantidadEsteProductoEnCarrito, obtenerPrecioPorTipoDeProducto}}>{children}</Provider>
}

export default MyProvider