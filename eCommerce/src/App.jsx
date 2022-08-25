
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import CartContext from './components/cartContext/CartContext';
import './App.css'

//LIBRERIAS Y FRAMEWORKS
import '../node_modules/bootstrap/dist/js/bootstrap';
import './styles.scss';

//COMPONENTES
import NavBar from './components/navBar/NavBar'
import ItemListContainer from './components/itemListContainer/ItemListContainer'
import ItemDetailContainer from './components/itemDetailContainer/ItemDetailContainer';
import Cart from './components/cart/Cart';
import Checkout from './components/checkout/Checkout';
import Footer from './components/footer/Footer';

function App() {
  document.title = "Vi-Commerce: Vinilos!"
  
  return (
  <>
    <CartContext>
      <BrowserRouter>
        <NavBar/>
        <Routes>
          <Route path='/' element= {<ItemListContainer titulo="Nuestros vinilos"/>} />     
          <Route path='/categoria/:idCategoria' element= {<ItemListContainer titulo="Nuestros vinilos"/>} />     
          <Route path='/producto/:idProducto' element= {<ItemDetailContainer titulo="Vista del Detalle"/>} />    
          <Route path='/cart' element= {<Cart titulo="Carrito de compras"/>} />    
          <Route path='/checkout' element= {<Checkout titulo="Finaliza tu compra!"/>} />    
          <Route path='*' element= {<p>ERROR 404</p>} />     
        </Routes>
        <Footer/> 
      </BrowserRouter>
    </CartContext>  

  </>
    )
}

export default App
