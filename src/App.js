
import './App.css';
import ItemListContainer from './components/ItemListContainer';
import NavBar from './components/NavBar';
import { useState } from 'react';
import RetribucionesImg from './components/RetribucionesImg';
import ItemDetailContainer from './components/ItemDetailContainer';
import Category from './components/Category';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

function App() {
  const [cantidadProductosEnCarrito, onAdd] = useState(0)
  const mensajeBienvenida = "Bienvenidos a"

  return (
    <>
    <BrowserRouter>
      <NavBar cantidadProductosEnCarrito={cantidadProductosEnCarrito}/>
    <Routes>
      <Route path='/' element={<ItemListContainer greeting={mensajeBienvenida}/>} />
      <Route path='/home' element={<ItemListContainer greeting={mensajeBienvenida}/>} />
      {/* Paso el estado cantidadProductosEnCarrito para que se pueda utilizar el dato dentro del componente y también paso la función con la que se puede modificar para que pueda ser modificable dentro del mismo*/}
      <Route path='/producto/:nombre' element={<ItemDetailContainer cantidadProductosEnCarrito={cantidadProductosEnCarrito} onAdd={onAdd}/>} />
      <Route path='/categoria/:categoryName' element={<Category greeting={mensajeBienvenida} />} />
    </Routes>
      <RetribucionesImg />
    </BrowserRouter>
      
      
    </>
  );
}

export default App;
