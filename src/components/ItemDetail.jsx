import { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import { CartContext } from '../context/CartContext';
import { primeraLetraAMayusc } from '../utilidades/utilidades';
import ItemCount from './ItemCount';

function ItemDetail({item}) {
    const {id, imgURL, nombre, lore, stock, category} = item
    const [mostrarItemCount, setMostrarItemCount] = useState(true)
    const {agregarItem} = useContext(CartContext)

    const onAdd = (cantidad)=> {
      agregarItem(item, cantidad)
      setMostrarItemCount(false)
    }

    let nombreDisplayeable = primeraLetraAMayusc(nombre)
    let categoryDisplayeable = primeraLetraAMayusc(category)
    
    return (
      <>
      <div className="item-detail">
        <div className="item-header">
          <h4 className="card-title">{nombreDisplayeable} <span className="subtitulo">#{id}</span></h4>
          {/*La función primeraLetraAMatusc es propia de mi proyecto. Se encuentra en la carpeta utilidades.*/}
          <Link to={`/categoria/${category}`}>
            <h4 className="card-title">{categoryDisplayeable}</h4>
          </Link>
        </div>
        <img src={"../"+imgURL} className="item-detail-img-top" alt={"imágen " + nombre}/>
        <div className="item-detail-body">
          <h5 className="card-title">{nombreDisplayeable}</h5>
          <p className="card-text lore">{lore}</p>
        </div>
        {mostrarItemCount ? 
           <ItemCount key={id} inicial={stock > 0 ? 1 : 0} item={item} onAdd={onAdd}/>
           : 
            <div className="contenedor-navegacion-item-detail d-flex justify-content-center w-100">
              <div className="col-3 justify-content-center d-flex">
                <Link to={"/"} className='btn btn-primary'>Seguir comprando</Link>
              </div>
              <div className="col-3 justify-content-center d-flex">
                <Link to="/cart" className='btn btn-primary'>Ir al carrito</Link>
              </div>
            </div>
        }        
      </div>
      </>
    )
}

export default ItemDetail