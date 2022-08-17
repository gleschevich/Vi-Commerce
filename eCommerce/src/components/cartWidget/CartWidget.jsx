import {FaShoppingCart} from 'react-icons/fa'
import { Link } from 'react-router-dom'
import './cartWidget.scss'




//Componente que muestra el icono del carrito de compras
const CartWidget = (props) => {
  
  return (<> 
    <Link to='/cart' id='cart'>
      <FaShoppingCart/>
      <span id="cantCarrito"> {props.cantidadCarrito}</span>
    
    </Link>
    
    
    </>
  )
}

export default CartWidget