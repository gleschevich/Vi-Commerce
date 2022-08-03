
import { useState } from 'react'
import './App.css'

//LIBRERIAS Y FRAMEWORKS
import '../node_modules/bootstrap/dist/js/bootstrap';
import styles from "./styles.css";

//COMPONENTES
import NavBar from './components/navBar/NavBar'
import ItemListContainer from './components/itemListContainer/ItemListContainer'
import ItemDetailContainer from './components/itemDetailContainer/ItemDetailContainer';

function App() {
  const [productos, setProductos] = useState([
    {
      id:1,
      artista:"Iron Maiden",
      album: "Iron Maiden",
      precio:2500,
      imagenURL:"./img/MaidenCollection.jpeg"
    },
    {
      id:2,
      artista:"Iron Maiden",
      album: "Killers",
      precio:2500,
      imagenURL:"./img/Maiden-Killers.jpeg"
    },
    {
      id:3,
      artista:"Iron Maiden",
      album: "Fear of the dark",
      precio:2500,
      imagenURL:"./img/Maiden-Fear.jpeg"
    }])
  
  

  return (
  <>
      
      <NavBar/>
      <ItemListContainer titulo="Nuestros vinilos" productos={productos}/>
      <ItemDetailContainer titulo="Vista del Detalle" productos={productos}/>
      

  </>
    )
}

export default App
