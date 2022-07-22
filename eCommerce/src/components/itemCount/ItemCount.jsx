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
        <a className='btn btn-primary m-2' href='#' onClick={restar}> - </a>
        <output className='text-primary'>{cantProducto}</output>
        <a className='btn btn-primary m-2' href='#' onClick={sumar}> + </a>

    </>
  )
}

export default ItemCount