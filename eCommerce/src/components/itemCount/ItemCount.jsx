import { useState,useContext } from 'react'
import { myContext } from '../cartContext/CartContext'


const ItemCount = (props) => {
    const [cantProducto, setCantProducto] = useState(parseInt(props.inicial))
    const {hideButton, setHideButton} = useContext(myContext)
    
    const sumar = () =>{
        
        if (cantProducto == props.stock)
            setCantProducto(cantProducto)
        else
            setCantProducto(cantProducto+1)
    }
    const restar = () =>{
      if (cantProducto == 1)
        setCantProducto(cantProducto)
      else
        setCantProducto(cantProducto-1)
    }
    
    const onAdd = (cantidad) =>{
      
      props.onAdd(cantProducto)
      setHideButton(true)
      

    }
    return (
    <>
        <a className='btn btn-primary ms-2' onClick={restar}> - </a>
        <output className='text-primary ms-2'>{cantProducto}</output>
        <a className='btn btn-primary ms-2' onClick={sumar}> + </a>
        <a className='btn btn-primary ms-2' onClick={onAdd}> Añadir al carrito </a>
        <p className='text opacity-25 mt-2' id='stock'>cantidad disponible: {props.stock} </p>

    </>
  )
}

export default ItemCount