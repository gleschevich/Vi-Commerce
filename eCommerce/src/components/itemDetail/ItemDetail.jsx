import {  useContext } from 'react'
import ItemCount from '../itemCount/ItemCount'
import { Link } from 'react-router-dom'
import { myContext } from '../cartContext/CartContext'

//Componente que muestra el detalle del producto, y, dependiendo de la condición, el boton de añadir al carrito o finalizar compra.
//Además, cuando el usuario finaliza la compra añade el producto y su cantidad al carrito.
const ItemDetail = (props) => {
  
  const {addItem, hideButton, setHideButton, sethayProductos,precioTotal,setprecioTotal  } = useContext(myContext)

  const onAdd = (cantProducto) =>{
       
        addItem(props.producto,cantProducto)
        sethayProductos(true)
      
        let precioAux = 0
        precioAux = props.producto.precio * cantProducto
        precioAux += precioTotal 
        setprecioTotal(precioAux)
      
    }
      
      const finCompra= ()=>
      {
       
        setHideButton(false);
       
        
      }
  return (
  <>
    
    <div className='container'>
      <div className='row'>
        <aside className='col-lg-6 mb-3'>
           <img className='img-fluid border border-danger' src={props.producto.imagenURL}/>
        </aside>
        <div className='col-lg-6 bg-secondary bg-gradient mb-3'>
          <div className='ps-lg-3'>
              <h2 className='text-primary m-2'>{props.producto.tipo}</h2>
              <h2 className='text-primary m-2'>{props.producto.artista} - {props.producto.album}</h2>
              <h3 className='text-primary'>${props.producto.precio}</h3>
              <h5 className='text-primary'>Año de lanzamiento: {props.producto.año}</h5>

          
          {hideButton ? <span><Link className='btn btn-primary me-2' to='/cart' id='btn-detalle' onClick={finCompra}>Finalizar compra</Link>
                        <Link className='btn btn-primary' to='/' id='btn-detalle' onClick={finCompra}>Volver al inicio</Link></span>
                          
                          :
                        <ItemCount stock = "5" inicial="1" onAdd={onAdd}/>} 
          </div>           
        </div>
      </div>
    </div>
  </>
  )
}

export default ItemDetail