import { doc, getDoc, getFirestore } from 'firebase/firestore';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import ItemDetail from './ItemDetail';
import './ItemDetailContainer.css';
import Loading from './Loading';

    
function ItemDetailContainer() {
    const [item, setItem] = useState({})
    const { nombre } = useParams()

    const [loading, setLoading] = useState(false)


    useEffect(() => {
        setLoading(true)
        let producto = doc(getFirestore(), "items", nombre)
        getDoc(producto)        
        .then(doc => {
            setItem({id: doc.id, ...doc.data()})
        })
        .finally(setLoading(false))

        // setItem(arrayProductos.find(nft => {
        //     return nft.nombre === nombre})
        //     )
        // if(arrayProductos.length > 0) {
        //     setLoading(false)
        // }
      }, [])
      

      if(loading) {
        return (
            <Loading />
        )
      } else {
          return (
            <div className='item-detail-container'>
                {/* {console.log(item)} */}
                <ItemDetail item={item}/>
            </div>
          )
      }
}

export default ItemDetailContainer