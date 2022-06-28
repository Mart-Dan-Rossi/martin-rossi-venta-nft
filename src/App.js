
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Category from './components/Category';
import ClaseEventos from './components/ClaseEventos';
import ItemDetailContainer from './components/ItemDetailContainer';
import ItemListContainer from './components/ItemListContainer';
import MiCarrito from './components/MiCarrito';
import NavBar from './components/NavBar';
import RetribucionesImg from './components/RetribucionesImg';
import MyProvider from './context/CartContext';

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import Checkout from './components/Checkout';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries



export default function App() {
  // Your web app's Firebase configuration
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
        {/* Paso el estado cantidadProductosEnCarrito para que se pueda utilizar el dato dentro del componente y también paso la función con la que se puede modificar para que pueda ser modificable dentro del mismo*/}
        <Route path='/producto/:idProducto' element={<ItemDetailContainer/>} />
        <Route path='/categoria/:categoryName' element={<Category greeting={mensajeBienvenida} />} />
        <Route path='/claseEventos' element={<ClaseEventos />} />
        <Route path='/miCarrito' element={<MiCarrito />} />
        <Route path='/checkout' element={<Checkout />} />
      </Routes>
        <RetribucionesImg />
      </BrowserRouter>
    </MyProvider>      
    </>
  );
}
