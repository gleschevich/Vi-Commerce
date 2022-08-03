import { useState,useEffect } from 'react'
import ItemCount from '../itemCount/ItemCount'


const ItemDetail = (props) => {
  

  return (
    <>
    
    <div className='card mt-lg-0 mt-md-0 mt-sm-3'>
        <img className='card-img-top border border-danger' src={props.producto.imagenURL}/>
        <div className='card-body'>
            <p className='card-title text-primary'>{props.producto.artista}</p>
            <p className='text-primary'>{props.producto.album}</p>
            <p className='text-primary'>${props.producto.precio}</p>
            <ItemCount stock = "5" inicial="1"/>
        </div>           
    </div>
    

    </>
  )
}

export default ItemDetail