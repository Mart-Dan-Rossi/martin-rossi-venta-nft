
import './App.css';
import Contador from './components/Contador';
import ItemCount from './components/ItemCount';
import ItemListContainer from './components/ItemListContainer';
import NavBar from './components/NavBar';
import { useState } from 'react';

function App() {
  const [productosEnCarrito, onAdd] = useState(0);

  const arrayDeProductos = [
            {
              nombre: "galletitas",
              stock: 20
            },{
              nombre: "pan",
              stock: 10
            }
        ];

  return (
    <>
      <NavBar productosEnCarrito={productosEnCarrito}/>
      <ItemListContainer greeting={"Bienvenidos a"}/>
      <Contador valor={0}/>
      {arrayDeProductos.map(producto => {
        return <ItemCount inicial={producto.stock > 0 ? 1 : 0} producto={producto.nombre} stock={producto.stock} productosEnCarrito={productosEnCarrito} onAdd={onAdd}/>        
      })}
    </>
  );
}

export default App;
