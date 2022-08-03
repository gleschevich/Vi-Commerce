
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
      imagenURL:"./img/MaidenCollection.jpeg",
      tipo:"Vinilo",
      año:1980
    },
    {
      id:2,
      artista:"Iron Maiden",
      album: "Killers",
      precio:2500,
      imagenURL:"./img/Maiden-Killers.jpeg",
      tipo:"Vinilo",
      año:1981
    },
    {
      id:3,
      artista:"Iron Maiden",
      album: "Fear of the dark",
      precio:2500,
      imagenURL:"./img/Maiden-Fear.jpeg",
      tipo:"Vinilo",
      año:1992
    },
      {
        id:4,
        artista:"Michael Jackson",
        album: "Past, Present & Future I",
        precio:3450,
        imagenURL:"./img/Jackson-PPFI.jpeg",
        tipo:"vinilo",
        año:1995
      }
    ])
  
  

  return (
  <>
      
      <NavBar/>
      <ItemListContainer titulo="Nuestros vinilos" productos={productos}/>
      <ItemDetailContainer titulo="Vista del Detalle" productos={productos}/>
      

  </>
    )
}

export default App
