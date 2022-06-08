
import './App.css';
import Contador from './components/Contador';
import ItemCount from './components/ItemCount';
import ItemListContainer from './components/ItemListContainer';
import NavBar from './components/NavBar';
import { useState } from 'react';
import RetribucionesImg from './components/RetribucionesImg';
import ItemDetailContainer from './components/ItemDetailContainer';

function App() {
  const [productosEnCarrito, onAdd] = useState(0);
  let itemId = 1;

  const arrayDeProductos = [
            {
              nombre: "galletitas",
              stock: 20,
              precio: 20
            },{
              nombre: "pan",
              stock: 0,
              precio: 10
            }
        ];

  return (
    <>
      <NavBar productosEnCarrito={productosEnCarrito}/>
      <ItemListContainer greeting={"Bienvenidos a"}/>
      <Contador valor={0}/>
      {arrayDeProductos.map(producto => {
        return <ItemCount key={producto.nombre} inicial={producto.stock > 0 ? 1 : 0} producto={producto.nombre} stock={producto.stock} productosEnCarrito={productosEnCarrito} onAdd={onAdd} precio={producto.precio}/>        
      })}
      <ItemDetailContainer itemId={itemId} productosEnCarrito={productosEnCarrito} onAdd={onAdd}/>
      <RetribucionesImg />
    </>
  );
}

export default App;
