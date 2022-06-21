
import './App.css';
import ItemListContainer from './components/ItemListContainer';
import NavBar from './components/NavBar';
import { createContext, useState } from 'react';
import RetribucionesImg from './components/RetribucionesImg';
import ItemDetailContainer from './components/ItemDetailContainer';
import Category from './components/Category';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import ClaseEventos from './components/ClaseEventos';
import MiCarrito from './components/MiCarrito';
import MyProvider from './context/CartContext';

export default function App() {
  const mensajeBienvenida = "Bienvenidos a"

  return (
    <>
    <MyProvider>
      <BrowserRouter>
        <NavBar />
      <Routes>
        <Route path='/' element={<ItemListContainer greeting={mensajeBienvenida}/>} />
        <Route path='/home' element={<ItemListContainer greeting={mensajeBienvenida}/>} />
        {/* Paso el estado cantidadProductosEnCarrito para que se pueda utilizar el dato dentro del componente y también paso la función con la que se puede modificar para que pueda ser modificable dentro del mismo*/}
        <Route path='/producto/:nombre' element={<ItemDetailContainer/>} />
        <Route path='/categoria/:categoryName' element={<Category greeting={mensajeBienvenida} />} />
        <Route path='/claseEventos' element={<ClaseEventos />} />
        <Route path='/miCarrito' element={<MiCarrito />} />
      </Routes>
        <RetribucionesImg />
      </BrowserRouter>
    </MyProvider>
      
    </>
  );
}
