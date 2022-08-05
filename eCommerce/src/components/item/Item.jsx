import { useState,useEffect } from 'react'
import ItemCount from '../itemCount/ItemCount'
import ItemDetailContainer from '../itemDetailContainer/ItemDetailContainer'
import {FaHeart} from 'react-icons/fa'
import { Link } from 'react-router-dom'


const Item = (item) => {


  return (
    <>
    
    <div className='card mt-lg-0 mt-md-0 mt-sm-3 mb-3'>
        <img className='card-img-top border border-danger' src={item.productos.imagenURL}/>
        <div className='card-body'>
            <p className='text-primary' id='text-precio'>${item.productos.precio}</p>
        </div>           
        <div className='mb-3' id='details-icons'>
          <a className='btn btn-primary'><Link to='/producto/'>Ver Detalle</Link> </a>
          <a className='btn btn-primary btn-icon ms-3' id='fav-icon'> <FaHeart/> </a>
        </div>



    </div>
    

    </>
  )
}

export default Item