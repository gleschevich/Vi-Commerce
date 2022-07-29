
import { useState } from 'react'
import './App.css'

//LIBRERIAS Y FRAMEWORKS
import '../node_modules/bootstrap/dist/js/bootstrap';
import styles from "./styles.css";

//COMPONENTES
import NavBar from './components/navBar/NavBar'
import ItemListContainer from './components/itemListContainer/ItemListContainer'

function App() {
  

  return (
  <>
      
      <NavBar/>
      <ItemListContainer nombreProducto="Nuestros vinilos" />
      

  </>
    )
}

export default App
