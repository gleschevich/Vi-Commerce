import { useState,useEffect } from 'react'
import ItemCount from '../itemCount/ItemCount'


const Item = (item) => {
  


  return (
    <>
    
    <div className='card mt-lg-0 mt-md-0 mt-sm-3'>
        <img className='card-img-top border border-danger' src={item.productos.imagenURL}/>
        <div className='card-body'>
            <p className='card-title text-primary'>{item.productos.artista}</p>
            <p className='text-primary'>{item.productos.album}</p>
            <p className='text-primary'>${item.productos.precio}</p>
            <ItemCount stock = "5" inicial="1"/>
        </div>           
    </div>
    

    </>
  )
}

export default Item