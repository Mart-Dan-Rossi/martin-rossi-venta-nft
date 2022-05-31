
import './App.css';
import Contador from './components/Contador';
import ItemListContainer from './components/ItemListContainer';
import NavBar from './components/NavBar';

function App() {
  return (
    <>
      <NavBar />
      <ItemListContainer greeting={"Bienvenidos a"}/>
      <Contador valor={0}/>
    </>
  );
}

export default App;
