
import './App.css';
import Contador from './components/Contador';
import NavBar from './components/NavBar';

function App() {
  return (
    <>
      <NavBar />
      <Contador valor={0}/>
    </>
  );
}

export default App;
