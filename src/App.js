
import './App.css';
import ItemListContainer from './components/ItemListContainer';
import NavBar from './components/NavBar';
import { useState } from 'react';
import RetribucionesImg from './components/RetribucionesImg';
import ItemDetailContainer from './components/ItemDetailContainer';
import Category from './components/Category';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

function App() {
  const [cantidadProductosEnCarritoEnCarrito, onAdd] = useState(0)
  const mensajeBienvenida = "Bienvenidos a"

  return (
    <>
    <BrowserRouter>
      <NavBar cantidadProductosEnCarritoEnCarrito={cantidadProductosEnCarritoEnCarrito}/>
    <Routes>
      <Route path='/' element={<ItemListContainer greeting={mensajeBienvenida}/>} />
      <Route path='/home' element={<ItemListContainer greeting={mensajeBienvenida}/>} />
      <Route path='/producto/:nombre' element={<ItemDetailContainer cantidadProductosEnCarritoEnCarrito={cantidadProductosEnCarritoEnCarrito} onAdd={onAdd}/>} />
      <Route path='/categoria/:categoryName' element={<Category greeting={mensajeBienvenida} />} />
    </Routes>
      <RetribucionesImg />
    </BrowserRouter>
      
      
    </>
  );
}

export default App;
