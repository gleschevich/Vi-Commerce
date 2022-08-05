
import { FcCallback } from 'react-icons/fc'
import ItemCount from '../itemCount/ItemCount'
import ItemList from '../itemList/ItemList';
import styles from './itemListContainer.scss'
import { useState,useEffect } from 'react'
import { useParams } from 'react-router-dom';



const ItemListContainer = (props) => {
  let totalProductos=0;

  const onAdd = (childData) =>{
      totalProductos+=childData;
      props.verTotalenCarrito(totalProductos)

}


const [productos, setProductos] = useState([])
const {idCategoria} = useParams()
let auxProductos = [
  {
    id:1,
    artista:"Iron Maiden",
    album: "Iron Maiden",
    precio:2500,
    imagenURL:"../img/MaidenCollection.jpeg",
    tipo:"Vinilo",
    año:1980,
    idCategoria:"Metal"
  },
  {
    id:2,
    artista:"Iron Maiden",
    album: "Killers",
    precio:2500,
    imagenURL:"../img/Maiden-Killers.jpeg",
    tipo:"Vinilo",
    año:1981,
    idCategoria:"Metal"
  },
  {
    id:3,
    artista:"Iron Maiden",
    album: "Fear of the dark",
    precio:2500,
    imagenURL:"../img/Maiden-Fear.jpeg",
    tipo:"Vinilo",
    año:1992,
    idCategoria:"Metal"
  },
    {
      id:4,
      artista:"Michael Jackson",
      album: "Past, Present & Future I",
      precio:3450,
      imagenURL:"../img/Jackson-PPFI.jpeg",
      tipo:"vinilo",
      año:1995,
      idCategoria:"Pop"
    },
    {
      id:5,
      artista:"Queen",
      album: "A Night at the Opera",
      precio:3700,
      imagenURL:"../img/Queen-ANATO.jpeg",
      tipo:"vinilo",
      año:1975,
      idCategoria:"Rock"
    }
  ]
  useEffect(() => {
   
    const getProductos = new Promise((res,rej) => {
      setTimeout(() => {
        if (!idCategoria){
          res(auxProductos)
        }
        else
        {
          res(auxProductos.filter((producto)=>producto.idCategoria == idCategoria))
        }
      },2000)
    })
    getProductos.then((res)=>{
      setProductos(res)
    })
    
 
  
  }, [idCategoria])

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