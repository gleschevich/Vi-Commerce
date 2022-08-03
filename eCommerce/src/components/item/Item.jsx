import { useState,useEffect } from 'react'
import ItemCount from '../itemCount/ItemCount'
import ItemDetailContainer from '../itemDetailContainer/ItemDetailContainer'


const Item = (item) => {


  return (
    <>
    
    <div className='card mt-lg-0 mt-md-0 mt-sm-3'>
        <img className='card-img-top border border-danger' src={item.productos.imagenURL}/>
        <div className='card-body'>
            <p className='text-primary'>${item.productos.precio}</p>
        </div>           
        <a className='btn btn-primary' href='#' > Ver Detalle </a>

    </div>
    

    </>
  )
}

export default Item