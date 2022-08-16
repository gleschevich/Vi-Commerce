import {FaShoppingCart} from 'react-icons/fa'
import './cartWidget.scss'



//Componente que muestra el icono del carrito de compras
const CartWidget = (props) => {
  
  return (<> 
    <div>
      <FaShoppingCart/>
      <span id="cantCarrito"> {props.cantidadCarrito}</span>
    
    </div>
    
    
    </>
  )
}

export default CartWidget