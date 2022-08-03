import { useState } from 'react'

const ItemCount = (props) => {
    const [cantProducto, setCantProducto] = useState(parseInt(props.inicial))

    const sumar = () =>{
        
        if (cantProducto == props.stock)
            setCantProducto(cantProducto)
        else
            setCantProducto(cantProducto+1)
    }
    const restar = () =>{
      if (cantProducto == 0)
        setCantProducto(cantProducto)
      else
        setCantProducto(cantProducto-1)
    }
    
    
    return (
    <>
        <a className='btn btn-primary ms-2' onClick={restar}> - </a>
        <output className='text-primary ms-2'>{cantProducto}</output>
        <a className='btn btn-primary ms-2' onClick={sumar}> + </a>
        <a className='btn btn-primary ms-2'> Añadir al carrito </a>

    </>
  )
}

export default ItemCount