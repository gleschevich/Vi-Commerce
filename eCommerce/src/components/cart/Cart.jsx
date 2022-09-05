import {useContext} from 'react'
import { myContext } from '../cartContext/CartContext'
import {BsTrashFill} from 'react-icons/bs'
import { Link } from 'react-router-dom'
import './cart.scss'

const Cart = (props) => {
    const {cart,removeItem,sethayProductos,hayProductos,precioTotal, setprecioTotal} = useContext(myContext)
    

    
    const eliminar = (productos)=>{
      
        
      setprecioTotal(precioTotal - (productos.cantidad * productos.precio))
      removeItem(productos)
    

      if (cart.length==0)
        sethayProductos(false)
      else 
        sethayProductos(true)
    }
    
  return (
     <>
     {hayProductos ? <section className= 'container-fluid mt-5' id="carrito">
          <h3 className='display-6 fw-bolder text-danger' id='title__cart'>{props.titulo}</h3>
      
        <table class="table table-dark table-hover">
            <thead>
             <tr>
                <th scope="col">Artista</th>
                <th scope="col">Album</th>
                <th scope="col">Cantidad</th>
                <th scope="col">Precio</th>
             </tr>
            </thead>
        {
            cart.map((productos)=>(

                    <tbody>
                        <tr>
                        <td>{productos.artista}</td>
                        <td>{productos.album}</td>
                        <td>{productos.cantidad}</td>
                        <td>${productos.precio * productos.cantidad}</td>
                        <td><button onClick={() => eliminar(productos)}> <BsTrashFill/></button></td>
                        </tr>
                    </tbody>
                    
                    
            ))
        
        }
     
         <tfoot>
           <td></td>
           <td></td>
           <td></td>
           <td></td>
           <td className='text-white  bg-black border border-danger'>Total ${precioTotal}</td>
        </tfoot>
     </table>
        <section className= 'container-fluid mt-5'>
              <Link className='btn btn-primary' to='/checkout' id='btn-detalle'>Finalizar compra</Link>

        </section>
    </section>
    :
    <section className= 'container-fluid mt-5' id="productos">
          <h1 className='text-start fs-2 fw-bold text-decoration-underline' id='title__container'>NO HAY ITEMS EN EL CARRITO</h1>
          <Link className='btn btn-primary' to='/' id='btn-detalle'>Volver al inicio</Link>

    </section>
      }
    </>
  )
}

export default Cart