
import { FcCallback } from 'react-icons/fc'
import ItemCount from '../itemCount/ItemCount'
import ItemList from '../itemList/ItemList';
import styles from './itemListContainer.scss'
import { useState,useEffect } from 'react'


const ItemListContainer = (props) => {
  let totalProductos=0;

  const onAdd = (childData) =>{
      totalProductos+=childData;
      props.verTotalenCarrito(totalProductos)

}

const [productos, setProductos] = useState(props.productos)



  return (
    <>
        <section className= 'container-fluid mt-5' id="productos">
          <h3 className='text-start fs-2 fw-bold text-decoration-underline'>{props.titulo}</h3>
          <ItemList productos={productos}/>  
        </section>

    </>
  )
}

export default ItemListContainer