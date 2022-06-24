import { collection, getDocs, getFirestore } from 'firebase/firestore';
import { createContext, useState } from 'react';
export const ApiContext = createContext()

const {Provider} = ApiContext;

let primerSeteo = true;
const ProvedorProductos = ({children}) => {
    const coleccionProductos = collection(getFirestore(), "items")
    const [arrayProductos, setArrayProductos] = useState([])

    const fetchearDatos = ()=>{
        //Este getDocs es la forma de fetchear la base de datos
        getDocs(coleccionProductos)    
        .then((res) => {
            setArrayProductos(res.docs.map(doc=> ({id: doc.id, ...doc.data()})))
        })
    }

    if(primerSeteo) {
        fetchearDatos()
        primerSeteo = false
    }
    
    //Ejecuto de esta forma para que se me refresquen los datos con la frecuencia determinada en el setTimeout
    setTimeout(()=>{
        fetchearDatos()
    }, 60000)
    
    return <Provider value={{arrayProductos}}>{children}</Provider>
}

export default ProvedorProductos