import { useState, useContext } from 'react'
import ItemCount from '../itemCount/ItemCount'
import { Link } from 'react-router-dom'
import { myContext } from '../cartContext/CartContext'

//Componente que muestra el detalle del producto, y, dependiendo de la condición, el boton de añadir al carrito o finalizar compra.
//Además, cuando el usuario finaliza la compra añade el producto y su cantidad al carrito.
const ItemDetail = (props) => {
  
  const {addItem,quantity,setQuantity, hideButton, setHideButton, sethayProductos  } = useContext(myContext)

  const onAdd = (cantidad) =>{
        setQuantity(cantidad)
    }
      
      const finCompra= ()=>
      {
        if (quantity!=0)
          sethayProductos(true)
        setHideButton(false);
        addItem(props.producto,quantity)
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

          
          {hideButton ?  <Link className='btn btn-primary' to='/cart' id='btn-detalle' onClick={finCompra}>Finalizar compra</Link>
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