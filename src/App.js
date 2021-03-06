
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Category from './components/Category';
import ItemDetailContainer from './components/ItemDetailContainer';
import ItemListContainer from './components/ItemListContainer';
import MiCarrito from './components/MiCarrito';
import NavBar from './components/NavBar';
import RetribucionesImg from './components/RetribucionesImg';
import MyProvider from './context/CartContext';

import { initializeApp } from "firebase/app";
import Checkout from './components/Checkout';



export default function App() {
  const firebaseConfig = {
    apiKey: "AIzaSyAFiTDBaWEAvOR4vCTRw57gh1otGeyv7gQ",
    authDomain: "martin-nfts.firebaseapp.com",
    projectId: "martin-nfts",
    storageBucket: "martin-nfts.appspot.com",
    messagingSenderId: "382358826896",
    appId: "1:382358826896:web:a9b70a6c538b0bf4b0cd15"
  };

  initializeApp(firebaseConfig);

  const mensajeBienvenida = "Bienvenidos a"

  return (
    <>     
    <MyProvider>
      <BrowserRouter>
        <NavBar />
      <Routes>
        <Route path='/' element={<ItemListContainer greeting={mensajeBienvenida}/>} />
        <Route path='/home' element={<ItemListContainer greeting={mensajeBienvenida}/>} />
        <Route path='/producto/:idProducto' element={<ItemDetailContainer/>} />
        <Route path='/categoria/:categoryName' element={<Category greeting={mensajeBienvenida} />} />
        <Route path='/cart' element={<MiCarrito />} />
        <Route path='/checkout' element={<Checkout />} />
      </Routes>
        <RetribucionesImg />
      </BrowserRouter>
    </MyProvider>      
    </>
  );
}
