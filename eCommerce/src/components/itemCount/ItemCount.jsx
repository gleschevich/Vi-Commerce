import { useState,useContext } from 'react'
import { myContext } from '../cartContext/CartContext'

//Componente que muestra botón para añadir prodcutos al carrito y elegir su cantidad, además muestra el stock disponible
const ItemCount = (props) => {
    const [cantProducto, setCantProducto] = useState(parseInt(props.inicial))
    const { setHideButton} = useContext(myContext)
    
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
    
    //Función callback que devuelve la cantidad del producto elegida por el usuario. Además esconde el boton de añadir al carrito
    const onAdd = (cantProducto) =>{
      props.onAdd(cantProducto)
      console.log(cantProducto)

      setHideButton(true);

      

    }
    return (
    <>
        <a className='btn btn-primary ms-2' onClick={restar}> - </a>
        <output className='text-primary ms-2'>{cantProducto}</output>
        <a className='btn btn-primary ms-2' onClick={sumar}> + </a>
        <a className='btn btn-primary ms-2' onClick={() => onAdd(cantProducto)}> Añadir al carrito </a>
        <p className='text opacity-25 mt-2' id='stock'>cantidad disponible: {props.stock} </p>

    </>
  )
}

export default ItemCount