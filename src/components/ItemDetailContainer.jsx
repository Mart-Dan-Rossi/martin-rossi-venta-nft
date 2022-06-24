import {useEffect, useState, useContext} from 'react';
import { useParams } from 'react-router-dom'
import ItemDetail from './ItemDetail'
import './ItemDetailContainer.css'
import Loading from './Loading'
import {ApiContext} from '../context/ApiContext';

const getItem = (arrayProductos, setFunction, nombreAFiltrar, setLoading)=> {    
    setFunction(arrayProductos.find(nft => {
        return nft.nombre === nombreAFiltrar})
        )
    if(arrayProductos.length > 0) {
        setLoading(false)
    }
}
    
function ItemDetailContainer() {
    const { arrayProductos } = useContext(ApiContext)
    const [item, setItem] = useState({})
    const { nombre } = useParams()

    const [loading, setLoading] = useState(false)


    useEffect(() => {
        setLoading(true)
        getItem(arrayProductos, setItem, nombre, setLoading)
      }, [arrayProductos])

      if(loading) {
        return (
            <Loading />
        )
      } else {
          return (
            <div className='item-detail-container'>
                <ItemDetail item={item}/>
            </div>
          )
      }
}

export default ItemDetailContainer