
import ItemList from '../itemList/ItemList';
import './itemListContainer.scss'
import { useState,useEffect } from 'react'
import { useParams } from 'react-router-dom';


//Componente que recupera todo el arreglo de productos y los pasa a ITEM LIST para que los mapee e ITEM los muestre
const ItemListContainer = (props) => {

//Arreglo que contiene todos los productos  
const [productos, setProductos] = useState([])
//Activa o desactiva la vista de Loading.. mientras se cargan los productos.
const[isLoadingILC,setisLoadingILC] = useState(false)

//Parametro que se utiliza para mostrar la categoría segun lo seleccionado por el usuario
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
      setisLoadingILC(true)
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
      setisLoadingILC(false)
    })
  }, [idCategoria])

  return (
    <>
    <header class="bg-grey py-5">
      <div class="container px-4 px-lg-5 ">
        <div class="text-center text-white">
            <h1 class="display-4 fw-bolder text-danger">VI-COMMERCE</h1>
            <p class="lead fw-normal text-white-50 mb-0">Tienda de vinilos musicales</p>
        </div>
      </div>
    </header>
        <section className= 'container-fluid mt-5' id="productos">
          <h3 className='text-start fs-2 fw-bold text-decoration-underline'>{props.titulo}</h3>
          {isLoadingILC ? <button class="btn btn-primary text-center" type="button" disabled>  
                            <span class="spinner-border spinner-border-md mb-2" role="status" aria-hidden="true"></span>
                               Cargando ...
                        </button>  
                        :<ItemList productos={productos}/>}  
        </section>
        

    </>
  )
}

export default ItemListContainer