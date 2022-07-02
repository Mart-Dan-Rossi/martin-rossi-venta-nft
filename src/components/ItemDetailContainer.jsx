import { doc, getDoc, getFirestore } from 'firebase/firestore';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import ItemDetail from './ItemDetail';
import './ItemDetailContainer.css';
import Loading from './Loading';

    
function ItemDetailContainer() {
    const [item, setItem] = useState({})
    const { idProducto } = useParams()

    useEffect(() => {
        let producto = doc(getFirestore(), "items", idProducto)
        getDoc(producto)        
        .then(doc => {
            setItem({id: doc.id, ...doc.data()})
        })
      }, [])
      

    if(item.id === undefined) {
      return (
        <div className="loading-container">
          <Loading />
        </div>
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