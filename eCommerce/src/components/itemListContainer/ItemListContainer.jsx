
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

const [productos, setProductos] = useState([])

useEffect(() => {
let arregloObjetos= [
  {
    id:1,
    artista:"Iron Maiden",
    album: "Iron Maiden",
    precio:2500,
    imagenURL:"./img/MaidenCollection.jpeg"
  },
  {
    id:2,
    artista:"Iron Maiden",
    album: "Killers",
    precio:2500,
    imagenURL:"./img/Maiden-Killers.jpeg"
  },
  {
    id:3,
    artista:"Iron Maiden",
    album: "Fear of the dark",
    precio:2500,
    imagenURL:"./img/Maiden-Fear.jpeg"
  }
]



const promesa = new Promise((res,rej) => {
  setTimeout(() => {
    res(arregloObjetos)
  },2000)
})
promesa.then((res)=>{

  setProductos(res)

})

}, [])

  return (
    <>
        <section className= 'container-fluid mt-5' id="productos">
          <h3 className='text-start fs-2 fw-bold text-decoration-underline'>{props.nombreProducto}</h3>
          <ItemList productos={productos}/>  
        </section>

    </>
  )
}

export default ItemListContainer