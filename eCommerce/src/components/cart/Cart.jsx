import {useContext,useState,useEffect} from 'react'
import { myContext } from '../cartContext/CartContext'
import {BsTrashFill} from 'react-icons/bs'
import { Link } from 'react-router-dom'


const Cart = (props) => {
    const {cart,removeItem,sethayProductos,hayProductos,precioTotal, setprecioTotal} = useContext(myContext)
    
    
    
   
    // useEffect(() => {
      
    // }, [])
    
    const eliminar = (productos)=>{
      
        
      setprecioTotal(precioTotal - (productos.cantidad * productos.precio))
      removeItem(productos)
      console.log(cart.length)
    

      if (cart.length==0)
        sethayProductos(false)
      else 
        sethayProductos(true)
    }
    
  return (
     <>
     {hayProductos ? <section className= 'container-fluid mt-5' id="carrito">
          <h3 className='text-start fs-2 fw-bold text-decoration-underline'>{props.titulo}</h3>
      
        <table class="table table-dark table-hover">
            <thead>
             <tr>
                <th scope="col">Tapa</th>
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
                        <th scope="row">1</th>
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
           <td>Total ${precioTotal}</td>
        </tfoot>
     </table>
        <section className= 'container-fluid mt-5' id="productos">
              <Link className='btn btn-primary' to='/checkout' id='btn-detalle'>Finalizar compra</Link>

        </section>
    </section>
    :
    <section className= 'container-fluid mt-5' id="productos">
          <h1 className='text-start fs-2 fw-bold text-decoration-underline'>NO HAY ITEMS EN EL CARRITO</h1>
          <Link className='btn btn-primary' to='/' id='btn-detalle'>Volver al inicio</Link>

    </section>
      }
    </>
  )
}

export default Cart