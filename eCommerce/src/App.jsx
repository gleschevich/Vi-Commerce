
import { useState } from 'react'
import './App.css'

//LIBRERIAS Y FRAMEWORKS
import '../node_modules/bootstrap/dist/js/bootstrap';
import styles from "./styles.css";

//COMPONENTES
import NavBar from './components/navBar/NavBar'
import ItemListContainer from './components/itemListContainer/ItemListContainer'

function App() {
  //Reflejar el total de productos en el carrito de compras
  const [totalCarrito, setTotalCarrito] = useState(0)
 const cantCompra=(dataCompra)=>{
        
    setTotalCarrito(dataCompra+=totalCarrito)
  }
  return (
  <>
      //se pasa el total del carrito de compras para renderizarlo en el boton
      <NavBar totalCarrito={totalCarrito}/>
      //Se le pasa el componente el titulo del div y la funcion cantCompra que devolvera el total de compras para reflejar en el componente cartWidget
      <ItemListContainer nombreProducto="Nuestros vinilos" verTotalenCarrito={cantCompra}/>
      

  </>
    )
}

export default App
