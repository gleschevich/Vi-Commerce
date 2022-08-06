import Item from "../item/Item"
import { useState,useEffect } from 'react'

const ItemList = ({productos}) => {
    
    
  return (
    <>
    <div className='row row-cols-lg-3 row-cols-md-2 row-col-sm-1'>
      {
        productos.map((productos)=>(
        <div className='col'>
          <Item key={productos.id} productos={productos}/>
        </div>
        ))
      }
     
    </div>

    </>
  )
}

export default ItemList