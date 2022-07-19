
import { useState } from 'react'
import './App.css'

//LIBRERIAS Y FRAMEWORKS
import '../node_modules/bootstrap/dist/js/bootstrap'
import '../src/styles.scss'

//COMPONENTES
import NavBar from './components/navBar/NavBar'
import ItemListContainer from './components/itemListContainer/ItemListContainer'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <NavBar/>
        <ItemListContainer nombreProducto="Vendemos Vinilos Musicales!"/>
    </div>
  )
}

export default App
